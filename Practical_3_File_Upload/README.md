# Practical 3: File Upload Application

This repository contains a file upload practical exercise divided into two parts:

- `file-upload-frontend/`: Next.js frontend app with a drag-and-drop upload form.
- `file-upload-server/`: Express backend server that receives uploads and stores files locally.

## Overview

The app demonstrates how to implement secure, user-friendly file upload functionality using a modern React/Next.js frontend and an Express/Multer backend. It supports image and PDF uploads, client-side validation, upload progress, and server-side storage.

## Features

- Single file upload via drag-and-drop or file selector
- Client-side validation for accepted MIME types (`image/jpeg`, `image/png`, `application/pdf`)
- File size limit: 5MB
- Upload progress tracking in the browser
- Server-side storage using `multer`
- CORS-enabled backend for local frontend/backend development
- Static serving of uploaded files from the server

## Technology Stack

- Frontend: Next.js, React, React Hook Form, React Dropzone, Axios
- Backend: Express, Multer, CORS, Morgan
- Runtime: Node.js

## Setup Instructions

### 1. Install dependencies

Open two terminals.

#### Frontend

```bash
cd file-upload-frontend
npm install
```

#### Backend

```bash
cd file-upload-server
npm install
```

### 2. Start the backend server

```bash
cd file-upload-server
node server.js
```

The backend runs by default on `http://localhost:5000`.

### 3. Start the frontend app

```bash
cd file-upload-frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

## Usage

1. Enter a name in the form.
2. Drag and drop a JPEG, PNG, or PDF file, or click to select one.
3. Submit the form.
4. Monitor upload progress and success or error messages.

Uploaded files are saved to the `file-upload-server/uploads/` directory.

## Notes

- The frontend is configured to send uploads to `http://localhost:8000/api/upload` in code comments, but the server listens on `http://localhost:5000/api/upload` by default. Update the frontend URL if you change the backend port.
- Ensure the `uploads/` directory exists or allow the server to create it automatically.

## Project Structure

- `file-upload-frontend/src/app/page.js`: Main upload form component.
- `file-upload-server/server.js`: Express server and Multer upload route.
- `file-upload-server/uploads/`: Directory where uploaded files are stored.

## License

This project is created for educational purposes as Practical 3 in a web development course.
