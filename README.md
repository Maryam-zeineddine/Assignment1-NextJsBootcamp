# Developer Community Platform

A full-stack web platform built with **Next.js (App Router)** as part of a bootcamp series of assignments. The project started as a frontend-only community platform for developers and communities, and later grew a backend layer with a full CRUD API.

## Overview

The Developer Community Platform lets users:

- Browse developer profiles
- Explore developer communities and topics
- View individual developer pages, including their posts
- (Backend) Create, read, update, and delete developer records through a REST-style API

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data | Local mock database (in-memory, TypeScript files) |
| API Testing | Thunder Client (VS Code extension) |
| Version Control | Git + GitHub |
| UI Polish | GitHub Copilot Agent |

## Project Structure

```
app/
  (public)/
    page.tsx                          # Home page
    about/page.tsx
    communities/
      page.tsx                        # All communities
      [slug]/page.tsx                 # Single community
      mobile-dev/page.tsx
      ui-ux/page.tsx
      web-dev/page.tsx
    developers/
      page.tsx                        # All developers
      new-members/page.tsx
      top-rated/page.tsx
      [username]/
        page.tsx                      # Single developer profile
        [posts]/
          page.tsx                    # Developer's posts
          [postID]/page.tsx           # Single post
    topics/page.tsx
  api/
    developers/
      route.ts                        # GET (all), POST
      [id]/
        route.ts                      # GET (by id), PUT, DELETE
  layout.tsx
  globals.css
components/
  Navbar.tsx
  Footer.tsx
  developer-card.tsx
  community-card.tsx
  join-button.tsx
data/
  developers.ts                       # Mock developer data
  communities.ts
  posts.ts
  topics.ts
types/
  developer.ts                        # Developer TypeScript interface
```

## Assignment 1 — Frontend & Routing

The initial phase focused on building out the platform's pages and navigation using the Next.js App Router:

- Static and dynamic routes for developers, communities, topics, and posts
- Reusable UI components (cards, navbar, footer, join button)
- Nested dynamic routes (e.g. a developer's individual posts)

## Assignment 2 — Backend API & UI Enhancement

The second phase introduced a backend layer and polished the UI:

### Backend: CRUD API for Developers

Built using **Next.js Route Handlers**, all responses returned via `NextResponse.json()` with appropriate HTTP status codes.

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/api/developers` | Return all developers |
| `POST` | `/api/developers` | Add a new developer |
| `GET` | `/api/developers/[id]` | Return one developer by id |
| `PUT` | `/api/developers/[id]` | Update a developer by id |
| `DELETE` | `/api/developers/[id]` | Delete a developer by id |

**Validation & error handling:**
- Missing required fields on `POST` → `400` with a descriptive error
- Non-existent `id` on `GET`, `PUT`, or `DELETE` → `404` with a descriptive error
- Successful creation → `201`
- Successful read/update/delete → `200`

### API Testing

All endpoints were tested using **Thunder Client**, covering:
- Reading the full developer list
- Reading a single developer by both valid and invalid id
- Creating a new developer
- Updating an existing developer's data
- Deleting a developer and confirming removal

### UI Enhancement

The frontend was polished using the **GitHub Copilot Agent**, focused on:
- Navbar & footer spacing and alignment
- Cleaner, more consistent developer and community cards
- Improved typography hierarchy and readability
- Better section spacing and layout grouping
- A more cohesive color palette and button styling

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

API routes are available at `http://localhost:3000/api/developers`.

## Data Model

```typescript
export interface Developer {
  id: number;
  username: string;
  name: string;
  title: string;
  bio: string;
  rating: number;
  isNew: boolean;
}
```

## Author

Maryam Zeineddine
