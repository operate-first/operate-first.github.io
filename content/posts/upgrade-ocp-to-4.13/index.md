---
title: 'Planning an OpenShift upgrade, and look out for deprecated APIs'
date: 2023-05-21
author: 'Christoph [GNU:] Görn'
description: 'Learn about the implications of upgrading from OpenShift 4.12 to 4.13, including the deprecation of certain Kubernetes APIs, and follow a comprehensive plan that includes understanding the changes, planning the migration, testing, monitoring, and reporting to ensure a successful and efficient upgrade process.'
tags:
  - OperateFirst
  - Operations
  - OpenShift
  - Kubernetes
  - upgrade
---

## Introduction

The continuous evolution of technology systems and standards requires regular updates and migrations to ensure optimal performance, security, and functionality. As we look to the impending upgrade from OpenShift 4.12 to 4.13, it's essential to understand the implications of this change, particularly regarding the deprecation of certain Kubernetes APIs. This report seeks to provide a comprehensive overview of the main changes accompanying the upgrade, focusing specifically on deprecated APIs and their impact on current applications.

## Understanding our role and objectives

As an Operate First Platform Engineer and SRE (Site Reliability Engineer), we are in a unique position that involves a blend of software engineering and system administration. We are responsible for creating reliable and highly scalable software systems, maintaining and improving the performance of existing systems, and ensuring that these systems are operational at all times.

Our work involves managing the infrastructure that supports these systems, ensuring that they are always available and performing optimally. This includes monitoring system health, automating routine tasks, responding to system incidents, and planning for system upgrades and migrations, such as the transition from OpenShift 4.12 to 4.13.

## TBD: upgrade OpenShift to 4.13

In the context of this OpenShift/Kubernetes API deprecation scenario, our role as an Operate First Platform Engineer and SRE involves the following key responsibilities:

1. **Understanding the Changes**: We need to have a deep understanding of the changes involved in the upgrade from OpenShift 4.12 to 4.13, particularly with regard to deprecated Kubernetes APIs.
2. **Planning the Migration**: We have to create a detailed plan for the migration, identifying which deprecated APIs are currently in use and planning their replacement with the new API versions.
3. **Testing**: Before implementing any changes, it is crucial that we thoroughly test these in a non-production environment. This helps us to anticipate any issues that may arise during the actual upgrade and mitigate them in advance.
4. **Monitoring and Reporting**: We are responsible for monitoring the health of the system both during and after the migration. We also need to provide clear and detailed reports to other stakeholders regarding the upgrade process and its impact on the system.

In all of these tasks, we leverage our skills in coding, system administration, problem-solving, and communication. The goal is to ensure that our platform remains reliable, efficient, and up-to-date with the latest technological advancements.

Based on the OpenShift 4.13 release notes and the [Kubernetes deprecated API migration guide](https://kubernetes.io/docs/reference/using-api/deprecation-guide/), here's a high-level plan for migrating (some of the) deprecated APIs:

**Storage APIs**: [migration.k8s.io/v1alpha1]​8​: The Kubernetes API migration guide suggests migrating from the storage.k8s.io/v1beta1 API version of CSIStorageCapacity to the storage.k8s.io/v1 API version​9​. However, it's not clear if this is applicable to all APIs listed in the Storage APIs section of the release notes.

**Workloads APIs**: [apps.openshift.io/v1]​12​: The Kubernetes API migration guide provides migration steps for CronJob from batch/v1beta1 to batch/v1​13​, and for HorizontalPodAutoscaler from autoscaling/v2beta2 to autoscaling/v2​14​. These might be relevant for some of the APIs listed in the Workloads APIs section of the release notes.

Please note that for each deprecated API, it's recommended to migrate manifests and API clients to use the new API versions. All existing persisted objects are accessible via the new API versions.

However, this plan does not cover all deprecated APIs listed in the [OpenShift 4.13 release notes](https://docs.openshift.com/container-platform/4.13/release_notes/ocp-4-13-release-notes.html), as not all migration guides for these APIs could be found in my research. For APIs without a clear migration guide, it's recommended to consult with the respective API documentation, OpenShift support, or community forums for guidance. Also, as with any migration, ensure that you have a robust testing and rollback plan in place.

Based on your provided script and the considerations for deprecated APIs, here's an updated migration plan:

### Preparation: Evaluate API Usage

Execute the provided bash script to identify the usage of deprecated APIs in the past 24 hours. This script will list the endpoints that are deprecated, along with the number of calls made to them in the last hour and the last 24 hours. If an API hasn't been used in the past 24 hours, it's safe to assume that all applications using it can safely migrate.

Here is the script for reference:

```shell
#!/bin/env bash

indent_arrow() { sed 's/^/  -> /'; }
indent() { sed 's/^/     /'; }

oc get apirequestcounts -o jsonpath='{range .items[?(@.status.removedInRelease!="")]}{.status.removedInRelease}{"\t"}{.metadata.name}{"\t"}{.status.currentHour.requestCount}{"\t"}{.status.requestCount}{"\n"}{end}' | sort |
    while read version endpoint count1h count24h; do
        echo "endpoint '$endpoint' is deprecated in version '$version'" | indent_arrow
        if [ $count24h -ne 0 ]; then
            echo "# of calls: $count1h (last 1h), $count24h (last 24h)" | indent_arrow | indent
            echo "it was called by the following callers in last 24h:" | indent_arrow | indent
            oc get apirequestcounts $endpoint -o jsonpath='{range ..username}{$}{"\n"}{end}' | sort -u | indent_arrow | indent | indent
        else
            echo "it was not called in last 24h" | indent_arrow | indent
        fi
    done
```

The output of the script is as follows, and the output is very positive: no deprecated APIs have been used in the past
24 hours! We are good to migrate...

```shell
❯ oc version
Client Version: 4.9.0-202303281553.p0.g88cfeb4.assembly.stream-88cfeb4
Server Version: 4.12.17
Kubernetes Version: v1.25.8+37a9a08
❯ ./scripts/deprecatedAPIsStillInUse.sh
  -> endpoint 'ingresses.v1beta1.extensions' is deprecated in version '1.22'
       -> it was not called in last 24h
  -> endpoint 'cronjobs.v1beta1.batch' is deprecated in version '1.25'
       -> it was not called in last 24h
  -> endpoint 'horizontalpodautoscalers.v2beta1.autoscaling' is deprecated in version '1.25'
       -> it was not called in last 24h
  -> endpoint 'poddisruptionbudgets.v1beta1.policy' is deprecated in version '1.25'
       -> it was not called in last 24h
  -> endpoint 'horizontalpodautoscalers.v2beta2.autoscaling' is deprecated in version '1.26'
       -> it was not called in last 24h
```

This script is available at [https://github.com/b4mad/op1st-emea-b4mad/blob/8a46e0b5e923b785618cd4ffa8ea5d065c53fb84/scripts/deprecatedAPIsStillInUse.sh](https://github.com/b4mad/op1st-emea-b4mad/blob/8a46e0b5e923b785618cd4ffa8ea5d065c53fb84/scripts/deprecatedAPIsStillInUse.sh)

### Plan the Migration

Based on the output of the script, plan the migration of the APIs that are being used. The migration plan should include details on the new API versions to use, the applications affected, and the order of migration. For APIs without a clear migration guide, it's recommended to consult with the respective API documentation, OpenShift support, or community forums for guidance.

### Communicate the Plan

Share the plan with the team, and clearly communicate the changes and their implications to ensure a smooth transition. Encourage questions and feedback to ensure everyone understands the plan and its potential impact.

### Test the Migration

Before implementing the migration in a production environment, it's recommended to test the migration in a non-production environment if possible. This will help identify potential issues and mitigation strategies.

### Execute the Migration

Begin the migration as per the plan. One of the most important steps, is to acknowledge you have evaluated your cluster for any removed APIs and have migrated any removed APIs. To do so, run the following command:

```shell
oc --namespace openshift-config patch cm admin-acks \
    --patch '{"data":{"ack-4.12-kube-1.26-api-removals-in-4.13":"true"}}' \
    --type=merge
```

### Post-Migration Review

After the migration, review the process and identify any lessons learned. This can help improve future migrations. Also, consider rerunning the script to confirm that the deprecated APIs are no longer in use.

## Conclusion

In the ever-evolving world of technology, staying up to date with the latest standards and practices is crucial. The upgrade from OpenShift 4.12 to 4.13 represents an essential step in maintaining a robust, efficient, and secure platform. The transition involves some complexity due to the deprecation of certain Kubernetes APIs, but with careful planning, thorough testing, and efficient use of tools like the provided bash script, the upgrade process can be managed successfully. The focus should be on minimizing disruption while maximizing the benefits of the new features and improvements in OpenShift 4.13.
