# My Blog

![App Preview](https://imgix.cosmicjs.com/f0480420-3e85-11f1-a169-fd69d33cc743-autopilot-photo-1551183053-bf91a1d81141-1776888040659.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern blog platform built with Next.js 16 and Cosmic CMS. Features posts, authors, and categories with a creative portfolio aesthetic.

## Features

- 📝 Dynamic blog posts with featured images and tags
- 👤 Author profiles with bio and avatars
- 🏷️ Category organization and filtering
- 🎨 Beautiful moody design with atmospheric imagery
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js 16
- 🔍 SEO optimized

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69e928998a9355b61761db83&clone_repository=69e929859a48165dfbd3f354)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
> 
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: categories, authors, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic CMS** - Content management
- **Inter Font** - Typography

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account with your content

### Installation

1. Clone and install dependencies:
```bash
bun install
```

2. Set up environment variables:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all posts with author and category
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .depth(1)

// Fetch single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three Cosmic object types:
- **Posts**: Main blog content with featured images, tags, author, and category references
- **Authors**: Writer profiles with name, bio, and profile picture
- **Categories**: Topic organization with name and description

## Deployment Options

Deploy easily to Vercel or Netlify. Set environment variables in your hosting dashboard.

<!-- README_END -->