<img src="src/assets/opf-logo.png" alt="Operate First Website Image" width="250"/>

![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.operate-first.cloud%2F)
[![Deploy Operate First GH Pages](https://github.com/operate-first/operate-first.github.io/actions/workflows/build_job.yaml/badge.svg)](https://github.com/operate-first/operate-first.github.io/actions/workflows/build_job.yaml)

This repository contains some content and the code to build the [operate-first.cloud](https://www.operate-first.cloud/) website. It is based on [Gatsby](https://www.gatsbyjs.com/) and can be deployed to [GitHub Pages](https://pages.github.com/).

## Local Development

You can run the app locally to preview your changes.
In terminal:

```sh
npm install
npm run develop
```

In case of stale cache or errors, please try:

```sh
npm run clean
```

### Previewing your changes on GitHub pages

We use Netlify to preview PR changes. Each PR will show a Netlify check that can be used to access a dynamically generated build and deployment of that PR.

### Manual Site Deployment (Production GitHub Pages)

CI will deploy to GitHub pages automatically on every push to default branch as well on daily schedule. You can trigger a new build manually if you have _write_ permissions on this repo by simply clicking **Run workflow** button on the [CI workflow details screen here](https://github.com/operate-first/operate-first.github.io/actions/workflows/build_job.yaml).

![Manual CI trigger](misc/manual_ci_trigger.png)

Fully manual build is possible by issuing following commands (requires _write_ access to the repo):

```sh
npm install
npm deploy
```

### Resources
If you wish to understand the codebase better and the technologies we use then here are some useful links!
- [Gatsby Docs](https://www.gatsbyjs.com/docs)
- [Learn more about React](https://beta.reactjs.org/)
- [Mantine Docs](https://mantine.dev/getting-started/)
