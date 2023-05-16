#!/usr/bin/bash

sudo pm2 kill
sudo pm2 delete all

sudo pm2 start /var/www/ecosystem.config.cjs
sudo pm2 save
