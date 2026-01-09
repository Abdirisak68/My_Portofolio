// Mock data for skills, projects, and messages
import SchoolSystem from "@/assets/SchoolSystem.png";
export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string | null;
  repoUrl: string | null;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export const skillsData: Skill[] = [
  { id: 1, name: "HTML5", proficiency: 95, category: "Frontend" },
  { id: 2, name: "CSS3", proficiency: 93, category: "Frontend" },
  { id: 3, name: "JavaScript", proficiency: 80, category: "Frontend" },
  { id: 4, name: "React.js", proficiency: 88, category: "Frontend" },
  { id: 5, name: "TypeScript", proficiency: 87, category: "Frontend" },
  { id: 6, name: "Node.js", proficiency: 45, category: "Backend" },
  { id: 7, name: "Express.js", proficiency: 45, category: "Backend" },
  { id: 8, name: "REST APIs", proficiency: 86, category: "Backend" },
  // { id: 9, name: "UI/UX Design", proficiency: 85, category: "Design" },
  { id: 10, name: "Graphic Design", proficiency: 96, category: "Design" },
  { id: 11, name: "Responsive Design", proficiency: 85 , category: "Design" },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    projectUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A full-stack social networking platform with real-time messaging, notifications, and user profiles.",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    tags: ["Next.js", "Socket.io", "Node.js", "MongoDB"],
    projectUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website designed to showcase professional work and skills.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
    tags: ["Vite", "React", "Framer Motion", "Shadcn UI"],
    projectUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task manager with drag-and-drop interface, team workspaces, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=85",
    tags: ["TypeScript", "React Query", "Express", "Node.js"],
    projectUrl: "#",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "School Management System",
    description: "A comprehensive school management system with features for student management, teacher management, and more.",
    imageUrl: SchoolSystem,
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    projectUrl: "#",
    repoUrl: "#"
  }
];

const messagesData: Message[] = [];
let messageIdCounter = 1;

export const mockStorage = {
  getSkills(): Skill[] {
    return [...skillsData];
  },

  getProjects(): Project[] {
    return [...projectsData];
  },

  createMessage(data: { name: string; email: string; message: string }): Message {
    const newMessage: Message = {
      id: messageIdCounter++,
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: new Date(),
    };
    messagesData.push(newMessage);
    return newMessage;
  },

  getMessages(): Message[] {
    return [...messagesData];
  }
};
