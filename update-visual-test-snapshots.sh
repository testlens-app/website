#!/usr/bin/env bash
set -e

for file in test-results/visual-regression-Visual-R*/*-actual.png;
do
  cp $file "tests/visual-regression.spec.ts-snapshots/$(basename "${file/actual/firefox-linux}")"
done

