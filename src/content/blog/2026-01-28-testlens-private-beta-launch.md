---
title: "TestLens launches to accelerate Java and Kotlin pull request workflows"
description: |
  Every software engineer knows the problem: you’re done with the implementation of a feature, you’ve opened a pull request (PR), and now the build is failing. More often than not, some tests have failed and you now need to figure out why. Was it your change? Did something in the environment change? Is the test flaky on the main branch as well?
pubDate: "2026-01-28"
image: "blog/private-beta-announcement.png"
---

Every software engineer knows the problem: you’re done with the implementation of a feature, you’ve opened a pull request (PR), and now the build is failing. More often than not, some tests have failed, and you now need to figure out why. Was it your change? Did something in the environment change? Is the test flaky on the main branch as well?

Finding the root cause is tedious. The user interfaces of the PR and the test runners (GitHub Actions) are not well integrated and you have to scroll through long and noisy build logs. As a consequence, you often decide to “just” rerun the build without looking too closely. But rerunning takes a lot of time, pipelines are usually slow, costly and unnecessarily waste compute resources.

TestLens assists you in getting your pull requests merged faster. It posts an easy-to-read summary of all failed tests from all jobs as a PR comment and keeps it up-to-date as new results come in. You can see the reason a test failed right in your pull request without having to sift through the build logs. Moreover, it allows rerunning only those tests that have failed while skipping all previously successful tests. As a result, your rerun is finished much faster. If you’re convinced a broken or flaky test wasn’t caused by your changes, you can temporarily mute it to make the build pass.

<iframe src="https://www.youtube.com/embed/dUlEECmrveI?si=B3m_aLIc_HaIvIx6&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-100 sm:h-190"></iframe>

**This post marks the official start of the TestLens private beta!** So far, the [JUnit](https://junit.org) and [GradleX](https://gradlex.org) open source projects have been onboarded, and are seeing great results. For example, here’s a [PR comment posted by TestLens](https://github.com/gradlex-org/java-module-packaging/pull/88#issuecomment-3656634459) that shows a flaky test in a GradleX project.

TestLens currently supports JVM (Java, Kotlin, etc.) projects with tests running on the JUnit Platform via Maven or Gradle and CI builds running on GitHub Actions.

Prior to starting the private beta phase, we’ve already received onboarding requests from other open source projects which we’ll add in the coming weeks. If you’re interested in trying out TestLens as well, <a data-signup-trigger href="mailto:team@testlens.app">let us know</a>.

The TestLens Team – Benedikt, Jendrik, and Marc
