DePinho Multimídias is a purpose-built e-commerce platform built with a team for a real client: Gabriel De Pinho, a YouTuber who sells and installs car multimedia head units. The core challenge isn't just selling — it's helping the customer find the right unit for their specific car, so the whole product revolves around a vehicle-fitment search.

## Features

- Product search by vehicle brand, model and year, with extra filters for steering-wheel controls and factory radio compatibility
- Catalog of compatible multimedia units, shopping cart, and checkout integrated with MercadoPago
- Order history and purchase status tracking
- A support channel (SAC) where the customer asks questions and the admin answers
- Admin panel for managing products, orders, and FAQ entries
- Authentication with distinct roles for customer and admin

## Domain model

The system's central use case cleanly separates the two sides: the Customer searches, filters, and buys products compatible with their vehicle, while the Admin manages the catalog, orders, and FAQ.

![Use-case diagram: Customer searches compatible products, manages cart, pays, and contacts support; Admin manages products, orders and FAQ](./images/use-case-diagram.png)

The data model reflects that fitment search: every `Produto` carries a compatibility `ano_inicio`/`ano_fim` (start/end year) plus flags for steering-wheel controls and factory radio, tied to a `Pedido` (order) with its `ItemPedido` (line items) and `Pagamento` (payment).

![Domain class diagram: Usuario, Pedido, Produto (with vehicle-fitment fields), ItemPedido, Pagamento and Duvida](./images/database-diagram.png)

## Screens

![Homepage wireframe: search form by vehicle brand, model and year, with a grid of compatible multimedia units below](./images/wireframe-home.jpg)

![Production homepage, with the vehicle search form and the client's YouTube channel featured](./images/homepage-screenshot.jpg)
