TicketTrade is a resale marketplace for tickets to shows, events, and talks. The goal is to solve a common problem: someone bought a ticket they can no longer use and needs a safe way to pass it on, without relying on informal groups or social-media scams.

## Features

- User sign-up and login, with the same account able to act as both seller and buyer
- Listing tickets for resale, with event, city, date and price
- Searching and filtering available tickets
- Payment via Pix (QR code and copy-paste code) or boleto
- Payment held in an admin-controlled escrow until the ticket transfer is confirmed, protecting the buyer
- Mutual rating between buyer and seller after the transaction
- Reporting users, with a review queue for the admin
- Admin validation of submitted tickets

## Architecture

The system follows a straightforward three-layer architecture: a web interface consumes a Spring Boot REST API, which handles registration, selling, and buying tickets, and persists everything to MySQL via Hibernate.

![Component diagram: the HTML interface consumes the Cadastro (sign-up), Comprador (buyer), Vendedor (seller) and Venda (sale) modules, which talk to the database](./images/component-diagram.png)

The data model centers on `Ingresso` (ticket), `Compra` (purchase), `Avaliacao` (rating), `Denuncia` (report) and `Notificacao`, all tied to a `Usuario` who can buy or sell.

![Class diagram: Usuario, Ingresso, Compra, Avaliacao, Denuncia and Notificacao](./images/class-diagram.png)

![MySQL data model: ingresso, user, compra, avaliacao, denuncia and notificacao tables](./images/er-diagram.png)

## Screens

![TicketTrade homepage, with the core functions: selling, buying and reporting tickets](./images/home-screen.png)

![Ticket search with filters by event, city and date](./images/search-tickets.png)

![Single ticket page, with event details and a button to proceed to payment](./images/ticket-detail.png)

![Pix payment screen, with QR code and copy-paste code](./images/pix-payment.png)

![Post-transaction rating screen between buyer and seller](./images/rating-screen.png)
