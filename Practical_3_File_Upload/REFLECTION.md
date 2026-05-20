# Practical 3 Reflection

## Purpose

The goal of this practical was to build a complete file upload workflow with a separate frontend and backend. It reinforced how to handle multipart data, validate files on both client and server, and provide feedback to users during upload.

## What I learned

- How to use `react-dropzone` to create a drag-and-drop upload interface.
- How `react-hook-form` can manage form validation and custom file inputs.
- How to send `FormData` with Axios and track upload progress using `onUploadProgress`.
- How to configure Express with `multer` to accept file uploads and save them to disk.
- How to enable CORS for local development between frontend and backend.

## Key challenges

- Ensuring accepted file types and maximum file size were validated consistently on both frontend and backend.
- Managing file previews for images while still supporting file types like PDF that do not render as images.
- Avoiding upload failures due to mismatched backend URL or server port configuration.

## Improvements made

- Added client-side validation for file type and size before upload.
- Implemented upload progress feedback so users can see status during large transfers.
- Created a reusable dropzone component to simplify drag-and-drop behavior.

## Future improvements

- Add multiple-file upload support.
- Show a list of uploaded files with download links.
- Add server-side authentication to restrict upload access.
- Implement better error handling and user notifications.

## Conclusion

This practical strengthened my understanding of end-to-end file upload flows and the coordination required between frontend form handling and backend file processing. It also emphasized the importance of user feedback and validation when working with file uploads in modern web applications.
