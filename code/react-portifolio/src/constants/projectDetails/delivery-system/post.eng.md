Complete delivery management and tracking system, built with a team of 3, pairing a hybrid Flutter mobile app with a backend built on a microservices architecture, with a serverless layer on Azure for notification spikes.

## Features

- Separate flows for customers and drivers within the same app
- Real-time delivery tracking via GPS
- Photo capture as delivery proof
- Order history and offline storage with SQLite
- Push and email notifications dispatched asynchronously
- Centralized authentication via API Gateway, issuing JWT tokens

## Architecture

Each responsibility in the system is its own independent service, each with its own database:

- **API Gateway** (Spring Cloud Gateway) — single entry point, routing and authenticating every call
- **Auth Service** (Node.js) — authentication and JWT issuance, backed by MongoDB
- **Order Service** (Java 21 / Spring Boot) — full order CRUD, backed by MongoDB
- **Tracking Service** (Node.js) — real-time delivery tracking, backed by PostgreSQL, with Swagger docs

Services communicate synchronously over REST and asynchronously over RabbitMQ, isolating failures and letting each service scale independently.

![Architecture diagram: the Flutter app talks to the API Gateway, which routes to Order Service, Track Service and Auth Service, integrating MongoDB, PostgreSQL, RabbitMQ, Azure Functions, SendGrid and Firebase](./images/architecture-diagram.jpeg)

In a third phase, we integrated Azure Functions and Azure Service Bus to process email (SendGrid) and push notifications (Firebase) asynchronously and serverlessly, absorbing demand spikes without overloading the core services. The whole stack is orchestrated with Docker and Docker Compose, with health checks across every service.

## Domain model

The domain centers on `User`, `Order`, `Address` and `LocationPoint` for real-time tracking, plus `NotificationPreference` and `Settings` to customize how each user receives alerts.

![Domain class diagram: User, Order, Address, LocationPoint, NotificationPreference and Settings](./images/uml-diagram.png)
