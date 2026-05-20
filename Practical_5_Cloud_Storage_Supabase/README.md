# Practical 5 — Cloud Storage with Supabase

This repository contains a full-stack demo project for a TikTok-like app using Supabase for storage and authentication, and a Node/Prisma backend.

Contents
- TikTok_Frontend: Next.js frontend using Supabase for auth/storage and Axios for API calls.
- TikTok_Server: Node.js + Express API with Prisma for database access and Supabase for file storage.

Quick start

1. Install dependencies for both projects:

	 - Frontend

	 ```bash
	 cd TikTok_Frontend
	 npm install
	 ```

	 - Server

	 ```bash
	 cd TikTok_Server
	 npm install
	 ```

2. Configure environment variables

- Frontend: create a `.env.local` in `TikTok_Frontend` with your Supabase URL and anon key, e.g.:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

- Server: create a `.env` in `TikTok_Server` with Prisma and Supabase credentials, e.g.:

```
DATABASE_URL="file:./dev.db" # or your Postgres connection
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
PORT=4000
```

Database & migrations

- Prisma schema is in `TikTok_Server/prisma/schema.prisma`. Run migrations and seed data from the server folder:

```bash
cd TikTok_Server
npx prisma migrate dev
node prisma/seed.js
```

Supabase storage

- The server uses Supabase for storing uploaded video files. Ensure you have created a bucket in Supabase and set the proper CORS and public/private rules.
- Update `TikTok_Server/src/lib/supabase.js` (or `TikTok_Frontend/src/lib/supabase.js`) if you need custom behavior.

Running the apps

- Start the backend API

```bash
cd TikTok_Server
npm run dev
```

- Start the Next.js frontend

```bash
cd TikTok_Frontend
npm run dev
```

Project structure (high level)

- `TikTok_Frontend/`: Next.js app (app router) with components, contexts, services, and Supabase client.
	- `src/app/`: pages and routes (login, signup, upload, profile, video, explore, etc.)
	- `src/components/`: UI components and auth modal/forms
	- `src/lib/`: `supabase.js`, `axios.js`, and API config

- `TikTok_Server/`: Express API with Prisma and Supabase integration.
	- `src/controllers/`: route handlers
	- `src/routes/`: Express routers
	- `prisma/`: schema, migrations, and seed
	- `scripts/`: helper scripts (e.g., migrateVideosToSupabase.js)

Useful scripts

- Frontend (`TikTok_Frontend/package.json`): `dev`, `build`, `start`
- Server (`TikTok_Server/package.json`): `dev`, `start`, plus Prisma scripts in `prisma` folder

Testing and maintenance

- Review `TikTok_Server/scripts` for migration helpers and cleanup utilities.
- When migrating storage or changing file paths, update the `storage_paths` migration and `storageService.js` accordingly.

Contributing

- Open an issue or submit a PR. Keep changes focused and include tests where applicable.

License

This project does not include a license file. Add one if you plan to share publicly.

Files to inspect

- Frontend entry: TikTok_Frontend/src/app/page.js
- Server entry: TikTok_Server/src/index.js

---
If you want, I can: run the dev servers, add example `.env` files, or expand any section.

