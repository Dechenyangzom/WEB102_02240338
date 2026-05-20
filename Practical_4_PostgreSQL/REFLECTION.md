# Practical 4 Reflection

## Objectives

The goal of this practical was to build a backend API for a social video application using PostgreSQL and Prisma. The implementation focused on data modeling, authentication, and common social features such as user profiles, follows, likes, and comments.

## What I accomplished

- Designed a relational schema with Prisma for users, videos, comments, likes, and follows.
- Implemented user authentication with JWT tokens and protected routes.
- Built user registration and login functionality with password hashing using `bcrypt`.
- Added profile update support and avatar upload handling.
- Implemented cursor-based pagination for large result sets in the video and comment controllers.
- Provided an automatic `uploads` folder creation flow for file storage.
- Created a seeding script to populate the database with sample users, videos, comments, likes, and follow relationships.

## Challenges

- Ensuring authentication and protected routes worked correctly required careful handling of tokens and user lookup.
- Keeping the Prisma schema in sync with controller data expectations was important; some model fields referenced in the seed script differ from the schema names.
- The current workspace shows routes for users only, while `app.js` references video and comment route modules that are not present.

## Learning outcomes

- I gained stronger familiarity with Express middleware patterns and route structure.
- I practiced Prisma relational queries, including joins, aggregates, and pagination.
- I learned how to secure APIs using JWT and how to hash passwords safely.
- I improved my ability to document backend setup and intended API behavior.

## Future improvements

- Add the missing `videos` and `comments` route modules and complete their endpoint wiring.
- Add request validation middleware for cleaner error handling.
- Add tests for authentication, authorization, and controller logic.
- Improve seeding data consistency with the current Prisma schema.
- Add API documentation or a Postman collection for easier testing.
