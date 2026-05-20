# Reflection

## What I built
I created a simple Node.js app that demonstrates token-based authentication using Express, JWTs, and bcrypt.

The app supports:
- user registration with password hashing
- login to receive a signed JSON Web Token
- a protected `/profile` endpoint that requires a valid JWT
- a public `/users` endpoint that returns user details safely without passwords

## What I learned
- How to securely hash passwords before saving them using `bcryptjs`
- How to generate and verify JWTs with `jsonwebtoken`
- How middleware can enforce protected routes by checking the `Authorization` header
- Why storing user credentials in memory is only appropriate for demos, not production

## Challenges and solutions
- Challenge: deciding where to store user data without a database.
  - Solution: use an in-memory array for demonstration and keep the code focused on auth flow.

- Challenge: protecting a route using a token instead of session state.
  - Solution: add `verifyToken` middleware that extracts `Bearer <token>` and validates it with the JWT secret.

## What worked well
- Registration and login flows function correctly.
- Passwords are never returned in responses.
- The protected route only responds when the token is valid and not expired.

## Improvements I would make next
- Add persistent storage with a real database like MongoDB or PostgreSQL.
- Improve error handling and validation for request data.
- Add refresh tokens, token revocation, and stronger password rules.
- Include automated tests for authentication and route protection.

## Key takeaway
Token-based authentication is an effective way to secure APIs: users authenticate once, receive a signed token, and then include that token in requests to access protected resources.
