---
title: Journey to providing an Open Cloud — OKD and CentOS Stream CoreOS update
date: 2022-10-24
author: Karsten Wade @quaid
description: This post provides an overview, update, and roadmap on the efforts to build the OKD Kubernetes-distribution using CentOS Stream CoreOS as part of the Operate First community cloud environments.
---

_This post provides an overview, update, and roadmap on the efforts to build the OKD Kubernetes-distribution using CentOS Stream CoreOS as part of the Operate First community cloud environments._

_By Karsten Wade, Principal Community Architect_

_Update:_ The OKD project has just released a minimal viable product (MVP) build that is ready to deploy and test; you can find all the details in [this OKD community blog post by Diane Mueller](https://www.okd.io/blog/2022-10-25-OKD-Streams-Building-the-Next-Generation-of-OKD-together/).

Recently in May 2022 we [quietly let out the news](https://www.operate-first.cloud/blog/kube-con-valencia-eu-2022-trip-report#okd-fedora-coreos) about a collaboration with the [OKD working group (OKD WG)](https://www.okd.io/working-groups/#okd-primary-working-group) to create an Operate First community cloud environment for building OKD images entirely in the Open.

Now (and just in time for [KubeCon NA 2022](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) and the [OpenShift Commons Gathering](https://commons.openshift.org/gatherings/kubecon-22-oct-25/) in Detroit) we have an [update below](#update) on this effort and the [roadmap from here](#roadmap).

But first, some thoughts on why this effort matters.

## tl;dr (summary): Why this work matters

To truly appreciate the challenge OKD faces in the world, let's look to a historic parallel:

Imagine you are creating a Linux distribution like [Fedora Linux](https://getfedora.org), but it doesn't have a public build system to produce Linux installer images.
That is how it was for Fedora Core 1 through Core 6, until the release of Fedora 7 built on the new [Koji platform](https://koji.fedoraproject.org).
There was no way to show *how* the Open Source software was created — it was a recipe and a resulting cupcake, with no way to see how the raw ingredients became finished goods.

Now imagine you not only don't have a public build system, but you don't have an easy way to share your Linux images once they are built.
Maybe the only way is to burn CDs or DVDs and mail them to people.

This 2002-Linux-distro-like state is unfortunately the state we are in with the Open Cloud.
But it's even worse than mailing a DVD installer to our users.
It's back to when the users are compiling the installer from source code, writing the installation manifest, then using it to install the packages we send you on the DVD.

### A solution

The Operate First project is solving this problem right now. We are doing this by providing Open Operations practices, tools, and environments to build and deliver the entire stack of Open Source software needed from bare metal up to user-facing services, from principles through practices to proven Open Operations.

And the OKD Working Group (OKD WG) is using this environment right now to transparently build the actual OKD platform itself, akin to Fedora Linux being built at koji.fedoraproject.org.

The OKD WG is using the container host environment of CentOS Stream CoreOS because this puts the build environment directly in the path between Fedora Linux and Red Hat Enterprise Linux (RHEL) — just as OKD is in the path between the [Kubernetes ecosystem](https://kubernetes.io) and [OpenShift the commercial service](https://cloud.redhat.com).

<a name="update"></a>
## Update -- current status

This is a brief update on the OKD WG work in the Operate First project.

* Clusters are up and running for the WG usage.
* Clusters are able to:
    * Build Images from `s2i` for `kvm-device-plugin`
    * Deploy a Daemonset (to labeled nodes) that ensures the `kvm-device-plugin` is available for the CentOS Stream CoreOS (CSCOS) build pipeline
    * Execute the CSCOS build pipeline from a commmand line using `kubectl` or `tekton` client
* Planning underway for Tekton pipelines to build various community Operators and CentOS Stream CoreOS OS images for OKD.

<a name="roadmap"></a>
## Roadmap

Evnisioned from our initial discussions, this is the roadmap highlighting milestones in this effort:

1. Clusters are running _(done)_
1. Tekton pipelines are building CentOS Stream CoreOS images
1. Tekton pipelines are building OKD releases, based on CentOS Stream CoreOS images
1. GitOps - The availability of a new OKD release triggers the update of an OKD cluster for testing on Operate First
1. The OKD community is able to build community Operators using the OKD Tekton Operators pipeline
1. Configure triggers and event listeners to automatically rebuild community Operators as well as the CentOS Stream CoreOS image when changes are made in the source code repository
1. _TBD_
