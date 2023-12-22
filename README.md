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

### User
 

* **[POST]** Create user

  `https://trashsure.live/api/users`
  
  Header :
    * **Content-Type:** application/json
    * **Authorization:** Bearer `idToken`
    
    Response:
    ```json
    {
        "message": "User created successfully.",
        "data": {
            "id": "M35aVFlBZBaljxYjNpgZQdfs6VI2",
            "createdAt": "2023-12-21T11:38:38.560Z",
            "updatedAt": "2023-12-21T11:38:38.560Z",
            "deletedAt": null,
            "fullname": "Unnamed User",
            "email": "example@gmail.com"
        }
    }
    ```
    
* **[GET]** Me
  
    `https://trashsure.live/api/users`

    Header :
    * **Content-Type:** application/json
    * **Authorization:** Bearer `idToken`
    
    Response:
    ```json
    {
        "message": "User retrieved successfully.",
        "data": {
            "id": "M35aVFlBZBaljxYjNpgZQdfs6VI2",
            "createdAt": "2023-12-21T11:38:38.560Z",
            "updatedAt": "2023-12-21T11:38:38.560Z",
            "deletedAt": null,
            "fullname": "Unnamed User",
            "email": "example@gmail.com"
        }
    }    
    ```
    
### History
 

* **[POST]** Create history

  `https://trashsure.live/api/histories`
  
  Header :
    * **Content-Type:** application/json
    * **Authorization:** Bearer `idToken`
    
    Body:
    ```json
    {
        "image": file,
        "confidenceThreshold": 99,
        "typeId": 1
    }
    ```
    
    
    Response:
    ```json
    {
        "message": "History created successfully.",
        "data": {
            "id": 1,
            "createdAt": "2023-12-21T11:39:10.356Z",
            "updatedAt": "2023-12-21T11:39:10.356Z",
            "deletedAt": null,
            "imageUrl": "https://storage.googleapis.com/trashsurebucket1111/histories%2F1703158749806-Bangkit.png",
            "confidenceThreshold": 99.97,
            "typeId": 1,
            "userId": "M35aVFlBZBaljxYjNpgZQdfs6VI2"
        }
    }
    ```
    
* **[GET]** Get History
  
    `https://trashsure.live/api/histories/:id`

    Header :
    * **Content-Type:** application/json
    * **Authorization:** Bearer `idToken`
    
    Response:
    ```json
    {
        "message": "History retrieved successfully.",
        "data": {
            "id": 1,
            "createdAt": "2023-12-21T11:39:10.356Z",
            "updatedAt": "2023-12-21T11:39:10.356Z",
            "deletedAt": null,
            "imageUrl": "https://storage.googleapis.com/trashsurebucket1111/histories%2F1703158749806-Bangkit.png",
            "confidenceThreshold": 99.97,
            "typeId": 1,
            "userId": "M35aVFlBZBaljxYjNpgZQdfs6VI2"
        }
    }   
    ```
    
* **[GET]** Get All Histories
  
    `https://trashsure.live/api/histories`

    Header :
    * **Content-Type:** application/json
    * **Authorization:** Bearer `idToken`
    
    Response:
    ```json
    {
        "message": "Histories retrieved successfully.",
        "data": [
            {
                "id": 1,
                "createdAt": "2023-12-21T11:39:10.356Z",
                "updatedAt": "2023-12-21T11:39:10.356Z",
                "deletedAt": null,
                "imageUrl": "https://storage.googleapis.com/trashsurebucket1111/histories%2F1703158749806-Bangkit.png",
                "confidenceThreshold": 99.97,
                "typeId": 1,
                "userId": "M35aVFlBZBaljxYjNpgZQdfs6VI2"
            }
        ]
    }
    ```

### Recommendation


* **[GET]** Get Recommendation By Type Id
  
    `https://trashsure.live/api/recommendations`

    Header :
    * **Content-Type:** application/json
    * **Authorization:** Bearer `idToken`
    
    Response:
    ```json
    {
        "message": "Recommendation retrieved successfully.",
        "data": [
            {
                "id": 1,
                "description": "Recycling Tip: Separate glass by color to enhance recycling efficiency, as different colors may have distinct chemical compositions.",
                "typeId": 1
            },
            {
                "id": 2,
                "description": "DIY Decor: Embrace do-it-yourself (DIY) projects by upcycling glass containers into aesthetically pleasing decorative items for home or garden use.",
                "typeId": 1
            },
            {
                "id": 3,
                "description": "Bottle Return Programs: Participate in bottle return programs where available, contributing to the circular economy by supporting glass recycling initiatives.",
                "typeId": 1
            },
            {
                "id": 4,
                "description": "Glass Mulch: Investigate the use of crushed glass as mulch in gardening, providing an eco-friendly alternative to traditional mulching materials.",
                "typeId": 1
            },
            {
                "id": 5,
                "description": "Reuse: Advocate for the reuse of glass jars for food storage, organizing small items, or crafting, minimizing single-use packaging.",
                "typeId": 1
            }
        ]
    }
```
