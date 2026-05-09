# CreatorHub Mini Platform

A responsive mini web app where a creator can showcase paid content and users can search, filter, sort, and open detailed previews.

## Tech Stack

- Vite for fast local development and production builds
- React with TypeScript for reusable UI components and typed content data
- Plain CSS for lightweight responsive styling without setup overhead

## Features

- Creator profile with hero/banner image, bio, avatar, location, and social links
- Dynamic content listing with reusable cards
- Detail modal with full description, category, tags, preview, and CTA
- Search, category filter, price sorting, and dark/light mode
- Responsive layout for mobile, tablet, and desktop

## Project Structure

```text
src/
  components/
    ContentCard.tsx
    CreatorProfile.tsx
    DetailModal.tsx
    Filters.tsx
  data/
    content.ts
  App.tsx
  main.tsx
  styles.css
  types.ts
```

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```
