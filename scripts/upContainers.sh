#!/bin/bash

# Create network
docker network create trooper-network

# Up rabbit container
cd ../ && docker-compose up -d --build

# Up product container
cd trooper-ms-product && docker-compose up -d --build

# Up account container
cd ../trooper-ms-account && docker-compose up -d --build

# Up order container
cd ../trooper-ms-order && docker-compose up -d --build

# Up payment container
cd ../trooper-ms-payment && docker-compose up -d --build

# Up gateway container
cd ../trooper-ms-gateway && docker-compose up -d --build

# Up frontend container
cd ../trooper-frontend && docker-compose up -d --build
