# URL Shortener

[![dependencies Status](https://img.shields.io/david/marcobiedermann/url-shortener)](https://david-dm.org/marcobiedermann/url-shortener)
[![devDependencies Status](https://img.shields.io/david/dev/marcobiedermann/url-shortener)](https://david-dm.org/marcobiedermann/url-shortener?type=dev)

Simple URL shortener

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Requirements

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Setup

Install dependencies.

```sh
npm install
```

Create `.env` from which you can source environment variables.

```sh
cp .env.sample .env
```

## Usage

### Database

Use Docker Compose to run the PostgreSQL database locally.

```sh
docker-compose up
```

Migrate the database using the [Sequelize CLI](https://github.com/sequelize/cli).

```sh
npm run db:migrate
```

### Development

Run development server which automatically restarts using [ts-node-dev].

```sh
npm run develop
```

### Format

Format code using [Prettier](https://prettier.io/).

```sh
npm run format
```

### Linting

Lint code using [ESLint](https://eslint.org/).

```sh
npm run lint
```

### Production

To run the server in production, you have to compile the source files first.

```sh
npm run build
npm start
```

## License

© [Marco Biedermann](https://github.com/marcobiedermann)