# Your Product

A personal portfolio website for presenting Mayang's profile, selected projects, focus areas, and contact information. The site is built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive single-page portfolio layout
- Personal introduction, strengths, and focus areas
- Project showcase cards with tags and outcomes
- Contact section with email and social links
- Fast local development and production builds with Vite

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   Reusable layout and UI components
  data/         Portfolio profile, project, and contact data
  lib/          Shared utilities
  sections/     Page sections such as home, about, projects, and contact
  types/        TypeScript types
```

## Customization

- Update personal profile data in `src/data/profile.ts`
- Update project entries in `src/data/projects.ts`
- Update contact copy in `src/data/contact.ts`
- Replace placeholder images in `public/images/`

## Deployment

This project can be deployed to any static hosting platform that supports Vite builds, such as Vercel, Netlify, or GitHub Pages.
