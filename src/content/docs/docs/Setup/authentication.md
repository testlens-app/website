---
title: Authentication
description: How the setup-testlens action authenticates with TestLens
sidebar:
  order: 3
---

The [`testlens-app/setup-testlens`](https://github.com/testlens-app/setup-testlens) action needs to prove to TestLens that test results come from a GitHub Actions job of your repository.
It supports the following options.

## GitHub token (default)

By default, the action uses the job's [`GITHUB_TOKEN`](https://docs.github.com/actions/tutorials/authenticate-with-github_token).
TestLens only uses it to verify that the job belongs to a repository the TestLens GitHub app is installed for.
All other GitHub API calls use the TestLens GitHub app's own credentials.
No additional configuration is required.

## OpenID Connect (OIDC)

If your security policy doesn't allow sending secrets outside your build environment, grant the job permission to request a [GitHub Actions OIDC token](https://docs.github.com/actions/concepts/security/openid-connect) and set the `use-oidc` input to `true`:

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v6
      # ...
      - uses: testlens-app/setup-testlens@v1
        with:
          use-oidc: true
```

:::note
Declaring `permissions` removes all permissions that aren't listed.
Make sure to include all other permissions your job needs, such as `contents: read` for `actions/checkout`.
:::

The action then exchanges the OIDC token for a TestLens token and doesn't use the `GITHUB_TOKEN`.
The OIDC token is signed by GitHub and grants no access to your repository or the GitHub API.
The TestLens token is only issued to running jobs, can only be used to report results for your repository, and expires when the job would time out at the latest.

### Using the GitHub token as fallback

GitHub doesn't issue OIDC tokens to workflows triggered by pull requests from forks.
For those, the action falls back to the `GITHUB_TOKEN`, so results of such pull requests are still reported.
It also falls back if no OIDC token is available for other reasons, e.g. because the `id-token: write` permission is missing, but emits a warning in that case.

If you want to make sure the `GITHUB_TOKEN` is never sent to TestLens, additionally disable the fallback by setting the `github-token` input to an empty string:

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v6
      # ...
      - uses: testlens-app/setup-testlens@v1
        with:
          use-oidc: true
          github-token: ""
```

This configuration does not support reporting test results to TestLens when workflows are triggered by pull requests from forks.
The action emits a warning in that case.

### Self-hosted runners

When `use-oidc` is `true`, the action requires `curl` and `jq` to exchange the OIDC token.
Both are preinstalled on GitHub-hosted runners.
On self-hosted runners, make sure they're installed; otherwise, the action fails with an error naming the missing tool.
