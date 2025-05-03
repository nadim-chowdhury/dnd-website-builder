This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

dnd-website-builder/
├── app/
│ ├── (auth)/ # Auth layout group
│ │ ├── login/
│ │ │ └── page.tsx
│ │ ├── register/
│ │ │ └── page.tsx
│ │ └── layout.tsx
│ ├── (dashboard)/ # Protected routes group
│ │ ├── projects/
│ │ │ └── page.tsx
│ │ ├── editor/
│ │ │ ├── [projectId]/
│ │ │ │ ├── components/ # Builder components
│ │ │ │ │ ├── Canvas/
│ │ │ │ │ │ ├── BuilderCanvas.tsx
│ │ │ │ │ │ ├── ElementController.tsx
│ │ │ │ │ │ └── GridLines.tsx
│ │ │ │ │ ├── Toolbar/
│ │ │ │ │ │ ├── ElementsLibrary.tsx
│ │ │ │ │ │ ├── LayersPanel.tsx
│ │ │ │ │ │ └── TemplatesPanel.tsx
│ │ │ │ │ ├── PropertiesPanel/
│ │ │ │ │ │ ├── StyleControls.tsx
│ │ │ │ │ │ ├── SettingsControls.tsx
│ │ │ │ │ │ └── AdvancedControls.tsx
│ │ │ │ │ └── Preview/
│ │ │ │ │ ├── MobilePreview.tsx
│ │ │ │ │ └── DesktopPreview.tsx
│ │ │ │ ├── page.tsx
│ │ │ │ └── layout.tsx
│ │ │ └── layout.tsx
│ │ └── layout.tsx
│ ├── api/ # Next.js API routes
│ │ └── auth/
│ │ └── route.ts
│ ├── components/ # Shared UI components
│ │ ├── elements/ # Drag-and-drop elements
│ │ │ ├── TextElement.tsx
│ │ │ ├── ImageElement.tsx
│ │ │ ├── ButtonElement.tsx
│ │ │ └── SectionElement.tsx
│ │ ├── panels/ # Editor panels
│ │ │ ├── HistoryControls.tsx
│ │ │ ├── UndoRedo.tsx
│ │ │ └── DevicePreview.tsx
│ │ ├── providers/ # Context providers
│ │ │ ├── BuilderProvider.tsx
│ │ │ └── ThemeProvider.tsx
│ │ └── ui/ # Shadcn/ui components
│ │ ├── button.tsx
│ │ ├── dialog.tsx
│ │ └── dropdown-menu.tsx
│ ├── hooks/ # Custom hooks
│ │ ├── useBuilder.ts
│ │ ├── useDragDrop.ts
│ │ └── useUndoRedo.ts
│ ├── lib/ # Utilities and config
│ │ ├── constants/ # App constants
│ │ │ ├── elementTypes.ts
│ │ │ └── defaultStyles.ts
│ │ ├── validation/ # Zod schemas
│ │ │ └── builderSchema.ts
│ │ ├── api/ # API client
│ │ │ └── client.ts
│ │ └── utils/ # Helper functions
│ │ ├── domUtils.ts
│ │ └── styleUtils.ts
│ ├── stores/ # Zustand state stores
│ │ ├── builderStore.ts
│ │ ├── projectStore.ts
│ │ └── themeStore.ts
│ ├── types/ # TypeScript types
│ │ ├── builder.d.ts
│ │ └── element.d.ts
│ ├── styles/
│ │ ├── globals.css # Tailwind imports
│ │ └── animations.css
│ ├── layout.tsx
│ └── page.tsx
├── public/
│ ├── fonts/
│ ├── images/
│ └── icons/
├── tailwind.config.js
├── postcss.config.js
├── .env.local
├── tsconfig.json
└── package.json
