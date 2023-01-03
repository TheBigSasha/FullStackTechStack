#!/usr/bin/env bash
# Runs the frontend from ./frontend
# Runs the  client


cd ./frontend || exit
npm install
npm run build
serve -s build

