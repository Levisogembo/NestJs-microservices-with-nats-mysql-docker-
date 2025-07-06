# NestJs-microservices-with-nats-mysql-docker-
This project is a demonstration of a microservices architecture built with NestJS, using NATS as the message broker, Docker for containerization, MySQL as the database, and TypeORM for object-relational mapping. The system is composed of three main services: an API Gateway, a Users microservice, and a Payments microservice.
# Project Overview
This microservices system is designed to showcase how to build scalable, maintainable, and decoupled backend applications using modern technologies. The services communicate asynchronously via NATS, and all are containerized for easy deployment.

# Services
## API Gateway:
Acts as the entry point for client requests. It receives HTTP requests and routes them to the appropriate microservice using NATS messaging.
## Users Microservice:
Handles all user-related operations, such as creating and managing user accounts. It connects to a MySQL database to store user data and uses TypeORM for data modeling.
## Payments Microservice:
Manages payment-related operations, linking payments to users. It also uses MySQL and TypeORM for data persistence.
## NATS:
A high-performance messaging system used for communication between the microservices.
## MySQL:
The relational database used by both the Users and Payments microservices.

# Technologies Used
- NestJS: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- NATS: A lightweight, high-performance messaging system for cloud-native applications, microservices, and IoT.
- Docker: Used to containerize each service, making it easy to run and manage the entire system.
- MySQL: The database engine for persistent storage of users and payments.
- TypeORM: An ORM that supports TypeScript and enables easy database interaction and migrations.
- Jest: For unit and integration testing of the services.
