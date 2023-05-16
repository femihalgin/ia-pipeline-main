#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER
SERVER_FOLDER="/usr/share/nginx/html/"

# Building React output
cd clientside/
npm install
npm run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -o StrictHostKeyChecking=no -r build/* ubuntu@${DEPLOY_SERVER}:/usr/share/nginx/html

echo "Finished copying the build files"
