# A Next.js Blog with a Native Authoring Experience

This starter is a statically generated blog that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content. It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a blog or learn these technologies.

## Features

- A performant, static blog with editable posts, authors, and site settings
- A native and customizable authoring environment, accessible on `yourblog.com/studio`
- Real-time and collaborative content editing with fine-grained revision history
- Side-by-side instant content preview that works across your whole site
- Support for block content and the most advanced custom fields capability in the industry
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Free and boosted Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- A project with starter-friendly and not too heavy-handed TypeScript and Tailwind.css

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Questions and Answers](#questions-and-answers)
  - [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
  - [How can I remove the "Next steps" block from my blog?](#how-can-i-remove-the-next-steps-block-from-my-blog)
  - [How can I set up Incremental Static Revalidation?](#how-can-i-set-up-incremental-static-revalidation)
- [Next steps](#next-steps)

## Project Overview

| [Blog](https://nextjs-blog.sanity.build)                                                                       | [Studio](https://nextjs-blog.sanity.build/studio)                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![Blog](https://user-images.githubusercontent.com/44635000/197511913-94ea36dd-099d-4dbf-b71f-3335879621c9.png) | ![Sanity Studio](https://user-images.githubusercontent.com/44635000/197511725-b2a2e2e5-287b-41a9-84c6-ec90d37ca480.png) |

### Important files and folders

| File(s)                                     | Description                                      |
| ------------------------------------------- | ------------------------------------------------ |
| `sanity.config.ts`                          |  Config file for Sanity Studio                   |
| `sanity.cli.ts`                             |  Config file for Sanity CLI                      |
| `/pages/studio/[[...index]].tsx`            |  Where Sanity Studio is mounted                  |
| `/pages/api/revalidate.tsx`                 |  Serverless route for triggering ISR             |
| `/pages/api/preview.tsx`                    |  Serverless route for triggering Preview mode    |
| `/schemas`                                  |  Where Sanity Studio gets its content types from |
| `/lib/sanity.server.tsx`, `/lib/config.tsx` | Configuration for the Sanity Content Lake client |

## Configuration

### Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].
