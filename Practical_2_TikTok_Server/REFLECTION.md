# Practical 2 Reflection

## Project Summary
This practical implemented a TikTok-style API server using Express and an in-memory datastore. The application supports basic social media operations including user management, video posting, commenting, liking, and following.

## What I Learned
- How to structure an Express application with separate routes, controllers, and models.
- How to build RESTful routes for CRUD operations and nested resource actions.
- How to use middleware for logging, CORS, JSON parsing, and response validation.
- How to implement basic request validation and error handling in controllers.
- How to manage related resource state in memory, including cascading deletes and relationship updates.

## Key Challenges
- Designing route behavior for likes and follows while keeping the API intuitive.
- Ensuring related resources are cleaned up correctly when a user or video is deleted.
- Handling validation for IDs and required request body fields without a database.

## Strengths of the Implementation
- Clear separation of concerns between routes and controllers.
- Helpful HTTP status codes and consistent JSON error responses.
- A working in-memory example that can be extended to a database later.
- Preloaded sample data for quick testing of endpoints.

## Areas for Improvement
- Add persistence with a database such as MongoDB or PostgreSQL.
- Introduce authentication and authorization for user actions.
- Add request schema validation using a library like Joi or Zod.
- Expand API documentation with example requests and responses.
- Add automated tests for routes and controller logic.

## Next Steps
- Migrate the in-memory datastore to a persistent database.
- Add user authentication so actions can be performed by authenticated accounts.
- Improve the API by adding pagination and search filters for videos and comments.
- Add a frontend interface or Postman collection for easier manual testing.
