Carona? started from a concrete problem: getting around outside business hours, when public transit is scarce and apps like Uber get expensive or slow to accept a ride. The idea is simple: connect someone already driving to a destination with someone who needs to go the same way. With no automatic billing and no live tracking, the system stays lightweight, focused only on organizing the match between driver and passenger.

I was part of a 6-person team responsible for the full product cycle: requirements gathering, modeling, and building the mobile app, backend, and the web admin panel.

## Features

- Separate sign-up and login for passengers and drivers, with new drivers approved by an admin
- Ride creation with origin, destination, time and available seats, with route selection on a map via OpenStreetMap
- Searching and requesting available rides, with accept/decline handled by the driver
- Canceling participation in an already-confirmed ride
- Mutual rating between driver and passenger at the end of a trip
- Reporting users, with a review queue for admins
- Notification center, including real-time alerts for new rides and trip changes
- Ride history for both drivers and passengers
- Web admin panel to approve sign-ups, view every ride on the platform, and handle reports

## Architecture

The system follows a straightforward client-server architecture: two clients (a React Native mobile app and a React web panel) talk over HTTP to a single Java Spring Boot API, which persists data in MySQL and uses RabbitMQ to process notifications asynchronously, so dispatching an alert never blocks the API's response. Profile and vehicle images live in Supabase.

![Architecture diagram: mobile and web apps communicate over HTTP with the Spring Boot API, which integrates RabbitMQ and MySQL](./images/architecture-diagram.png)

On the backend, the API follows a classic layered split (Controller, Service, and Repository), with RabbitMQ and MySQL as the service's external dependencies.

![Component diagram: mobile and web clients hit the REST API, which splits into Controller, Service, and Repository, integrating RabbitMQ and MySQL](./images/component-diagram.png)

## Domain model

The domain model centers on `Usuario`, specialized into `Estudante` (who can act as a passenger or also as a driver, via `PerfilMotorista`) and `Administrador`. A `Carona` (ride) has `Parada`s (stops), receives `SolicitacaoCarona` (ride requests) from students, generates `Avaliacao` (ratings) between the parties, and can lead to `Denuncia`s (reports) reviewed by admins.

![Domain class diagram: Usuario, Estudante, PerfilMotorista, Carona, SolicitacaoCarona, Avaliacao, Denuncia and Notificacao](./images/class-diagram.png)

## App screens

![App home screen, with quick access to Rides and Profile](./images/app-home.jpg)

![Driver's home screen, with options specific to someone offering rides](./images/app-driver-home.jpg)

![Ride-creation flow with map-based route selection, distance and estimated time](./images/app-create-ride.jpg)
