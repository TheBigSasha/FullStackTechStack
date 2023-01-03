#!/usr/bin/env bash
# Runs the server and client
# Ensures nginx is running
sudo service nginx start

# In parallel:


# Runs the backend from ./helpsched
# - gradlew bootrun
./launch-backend.sh &


# Runs the frontend from ./helpschedfrontend
# - yarn build
# - serve -s build

./launch-frontend.sh &

# Waits for both to finish
wait


