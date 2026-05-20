# Practical 1 Reflection

## Overview

This practical implemented a simple social media API using Express.js and in-memory mock data. The goal was to build RESTful endpoints for users, posts, comments, likes, and followers while applying middleware and route/controller separation.

## What I built

- An Express API server with `server.js` as the entry point.
- CRUD operations for users, posts, and comments.
- Like and follower management features.
- Pagination support across list endpoints.
- Basic simulated authorization using the `X-User-Id` header for write operations.
- Centralized error handling and response formatting.

## Key learnings

- How to organize an Express app using routes and controllers.
- Implementing pagination for array-backed data.
- Using middleware such as `helmet`, `cors`, and `morgan` for security, cross-origin support, and logging.
- Building reusable error-handling patterns with custom error classes.
- Simulating authenticated behaviour in a stateless API using request headers.

## Challenges faced

- Working with in-memory data requires careful handling of updates and deletes because changes are not persisted.
- Ensuring that endpoints return consistent response shapes, especially when enhancing resources with related user or post data.
- Keeping authorization logic simple while still demonstrating valid access control for operations like updating or deleting resources.

## What I would improve next

- Add persistent storage with a database such as MongoDB or PostgreSQL.
- Implement real authentication and authorization instead of header-based simulation.
- Add validation middleware to ensure request payloads are correctly shaped.
- Write automated tests for endpoints and middleware.
- Expand the documentation with example request/response bodies and error cases.

## Reflection on the code

This project is a strong starting point for learning REST API design. It demonstrates core Express.js concepts and shows how to connect route definitions to controller logic. The current implementation is appropriate for a practical exercise, and building persistence and authentication next would make it production-ready.
