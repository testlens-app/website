---
title: Gradle
description: Gradle
sidebar:
  order: 2
---

To instrument GitHub Actions workflow using Gradle, add the [`testlens-app/setup-testlens`](https://github.com/testlens-app/setup-testlens) action right after the `setup-gradle`:

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
      - uses: gradle/actions/setup-gradle@v5
      - uses: testlens-app/setup-testlens@v1
      - run: ./gradlew build
```

The action writes a Gradle init script that instruments all `Test` tasks.
The script is located in the `$GRADLE_USER_HOME/init.d` directory.
In case your pipeline starts the build inside a container, make sure that `$GRADLE_USER_HOME` is mounted in the container.
