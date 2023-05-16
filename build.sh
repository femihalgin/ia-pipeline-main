#!/usr/bin/bash

#sed -i "http://localhost:8081/" "http://194.47.178.180:8081"
#sed -i "http://localhost:8082/" "http://194.47.178.180:8082"

/bin/su tstapps -c
#This is written to copy the client side build folder
cd ./clientside/;
source ~/.nvm/nvm.sh;
npm run build;

cp -r build/ ../ansible/files/build

#This step is written to copy the backend two services
cd ../ansible/files/social/;

rm -r content-service/
rm -r user-services/
 cd ../../../

cp -r content-service ansible/files/social;
cp -r user-services ansible/files/social;

#Removing node module from content services
cd ansible/files/social/content-service;
rm -r node_modules/

#Removing node module from user services
cd ../user-services;
rm -r node_modules/

#Running the ansible command
 cd ../../../
 ansible-playbook -i inventory social.yml


