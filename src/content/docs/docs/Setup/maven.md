---
title: Maven
description: Maven
sidebar:
  order: 2
---

To instrument GitHub Actions workflow using Maven, add the [`testlens-app/setup-testlens`](https://github.com/testlens-app/setup-testlens) action before the first call to `mvn` that executes tests.
We recommend adding it right after `actions/setup-java` or a similar action that ensures the required version of Java is available.

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-java@v5
        with:
          distribution: temurin
          java-version: 8 # or later
      - uses: testlens-app/setup-testlens@v1
      - run: mvn verify
```

The action expects the root parent POM to be present in the root directory of the repository.
It alters the POM by adding a profile that instruments all executions of the `maven-surefire-plugin` and `maven-failsafe-plugin`.
