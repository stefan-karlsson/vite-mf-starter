# vite-mf-starter

!! This project is currently under development and is not ready to be used !! 

A starter project for a micro frontend using vite, single-spa, federated modules and react.

## Developer experience

The following tools has been installed and configured to improve the developer experience when working in this workpace.

### [eslint](https://eslint.org/)

ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

### [prettier](https://prettier.io/)

An opinionated code formatter that supports many languages and integrates with most editors.

### [husky](https://typicode.github.io/husky/#/)

Modern native git hooks made easy. Husky can prevent bad git commit, git push and more 🐶 woof!

### [lint-staged](https://github.com/okonet/lint-staged)

Run linters against staged git files and don't let 💩 slip into your code base!

### [commitlint](https://commitlint.js.org/#/)

Helps your team adhere to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

### [commitizen](https://commitizen.github.io/cz-cli/)

Simple commit conventions for internet citizens.

### [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

Semantic-release automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.
This removes the immediate connection between human emotions and version numbers, strictly following the Semantic Versioning specification and communicating the impact of changes to consumers.

## Styling

This project uses [tailwindcss](https://tailwindcss.com/) for styling. Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.

Writing your styles in scss is supported by [postcss](https://github.com/postcss/postcss) 

## Browser Support

Current browsers supported can be viewed using the command `npx browserslist`. postcss will automatically add vendor prefixes to your css.

## Deployment

This project is configured to deploy to be deployed to [AWS](https://aws.amazon.com/) and hosted on [Amplify](https://docs.amplify.aws/). The deployment is configured to be triggered by a push to the develop/main branch.