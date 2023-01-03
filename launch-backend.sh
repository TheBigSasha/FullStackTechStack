#!/usr/bin/env bash
# Runs the server
docker start /myPostgresDb

cd ./fullstack || exit

./gradlew bootrun -Dorg.gradle.java.home=/usr/lib/jvm/java-19-oracle/
