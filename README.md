# Portfolio Builder

A modern, frontend-only portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Beautiful UI**: Tailwind CSS with Shadcn/UI components
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact Form**: Client-side message handling with validation
- **Skills Showcase**: Display your technical skills with proficiency levels
- **Project Portfolio**: Showcase your projects with images and tech stack
- **Type-Safe**: Full TypeScript implementation with Zod validation
- **React Router**: Client-side routing with React Router DOM

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio-Builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

This will start the development server on **http://localhost:5173** (Vite's default port)

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Portfolio-Builder/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # Shadcn UI components
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   ├── data/         # Mock data
│   │   │   └── mockData.ts
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility libraries
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main App component
│   │   └── main.tsx      # Entry point
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## 🔧 Available Scripts

- `npm run dev` - Start Vite development server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## 🎨 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Shadcn/UI (Radix UI)
- React Query (TanStack Query)
- Framer Motion (animations)
- Zod (validation)

### Development
- Vite (build tool & dev server)
- TypeScript
- ESLint
- PostCSS

## 📝 Data Management

All data is stored in [client/src/data/mockData.ts](file:///c:/Users/Abdirisak/Desktop/Portfolio-Builder/client/src/data/mockData.ts):
- Skills with proficiency levels
- Projects with images and descriptions
- Messages (stored in memory during session)

### Customizing Your Portfolio

Edit the data in [mockData.ts](file:///c:/Users/Abdirisak/Desktop/Portfolio-Builder/client/src/data/mockData.ts):

```typescript
export const skillsData: Skill[] = [
  { id: 1, name: "HTML5", proficiency: 95, category: "Frontend" },
  // Add your skills here
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Description here",
    imageUrl: "https://...",
    tags: ["React", "TypeScript"],
    projectUrl: "#",
    repoUrl: "#"
  },
  // Add your projects here
];
```

## 🐛 Troubleshooting

### Port Already in Use
- Vite will automatically try the next available port
- Or specify a port: `vite --port 3000`

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Build Errors
- Run `npm run check` to see TypeScript errors
- Clear Vite cache: `rm -rf node_modules/.vite`

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!
