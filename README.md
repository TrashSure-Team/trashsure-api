# Trashsure Mobile App Backend/API

## Introduction

> This backend app provides an API for the Trashsure mobile app in our team. Trashsure is an application used for classifying types of waste from images, whether they are photos or real-time captures. The API serves as the bridge between the mobile app and the backend system, allowing seamless communication and data exchange. This API saves the user's data and the classification results to the database, which can be accessed by the user through the mobile app.

## Tech Stack

- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient and scalable server-side applications.
- [Typescript](https://www.typescriptlang.org/): A superset of JavaScript that adds static types to the language.
- [MySQL](https://www.mysql.com/): A popular open-source relational database management system.

## Getting Started

```bash
npm install

cp .env.example .env

npx prisma migrate dev --name init && npx prisma generate
npx prisma db seed

npm run start:dev
```

## Configuration

## Cloud Services

- [Compute Engine](https://cloud.google.com/compute), A secure and scalable cloud computing service that lets you create and deploy virtual machines on Google's infrastructure.
- [Cloud SQL](https://cloud.google.com/sql), A fully-managed database service that makes it easy to set up, maintain, manage, and administer your relational PostgreSQL, MySQL, and SQL Server databases in the cloud.
- [Cloud Storage](https://cloud.google.com/storage), A unified object storage for developers and enterprises, from live data serving to data analytics/ML to data archiving.

## API Documentation
