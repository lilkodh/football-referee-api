# Football Referee API

A REST API built with **Node.js**, **Express**, **PostgreSQL**, and **Sequelize** to manage referees, matches, and match assignments for a football competition.

## Features

- MVC architecture
- CRUD operations for referees
- CRUD operations for matches
- CRUD operations for assignments
- Validation middleware
- Request logger middleware
- Centralized error handling
- Sequelize associations
- Eager loading with `include`
- Filtering, searching, sorting, and pagination
- Foreign keys and database indexes

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

## Getting Started

1. Clone the repository.
2. Install dependencies:

```bash
pnpm install
```

3. Configure your `.env` file.
4. Start the server:

```bash
pnpm start
```

The API runs at:

```text
http://localhost:3000
```

## Main Endpoints

### Referees

- `GET /referees`
- `GET /referees/:id`
- `POST /referees`
- `PUT /referees/:id`
- `DELETE /referees/:id`
- `GET /referees/:id/matches`

### Matches

- `GET /matches`
- `GET /matches/:id`
- `POST /matches`
- `PUT /matches/:id`
- `DELETE /matches/:id`
- `GET /matches/:id/referees`

### Assignments

- `GET /assignments`
- `GET /assignments/:id`
- `POST /assignments`
- `PUT /assignments/:id`
- `DELETE /assignments/:id`

## Author

**Khalid Drihem**