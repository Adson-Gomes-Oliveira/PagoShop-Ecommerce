#!/bin/bash

# Down product container
cd ../trooper-ms-product && docker-compose down

# Down account container
cd ../trooper-ms-account && docker-compose down

# Down order container
cd ../trooper-ms-order && docker-compose down

# Down payment container
cd ../trooper-ms-payment && docker-compose down

# Down gateway container
cd ../trooper-ms-gateway && docker-compose down

# Down frontend container
cd ../trooper-frontend && docker-compose down

# Down rabbit container
cd ../ && docker-compose down

# Delete network
docker network rm trooper-network
