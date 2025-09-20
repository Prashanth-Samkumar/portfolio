<!-- 
  This project does not use the All Contributors specification.
  Please do not add contributor sections automatically.
-->

# Prashanth Samkumar - AI & Data Science Portfolio

A modern, responsive portfolio website showcasing innovative AI projects and solutions. Built with React, TypeScript, and Tailwind CSS, featuring a professional dark theme with smooth animations and mobile-first responsive design.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual deployment URL -->

## 🎯 Overview

This portfolio represents my journey as an AI & Data Science student at Shiv Nadar University, Chennai. It highlights my expertise in Large Language Models, AI Agents, and Retrieval-Augmented Generation (RAG) systems through carefully curated projects and professional presentation.

## ✨ Features

### 🎨 Design & User Experience
- **Modern Dark Theme** - Professional dark color scheme with blue accents
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - CSS animations and transitions for enhanced UX
- **Mobile-First Design** - Hamburger navigation and touch-friendly interactions
- **Accessibility** - Semantic HTML and keyboard navigation support

### 🔧 Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and building
- **React Router** for smooth navigation
- **Lucide React** for consistent iconography
- **Shadcn/ui** components for consistent UI elements

### 📱 Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing

### UI Components
- **Shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful, customizable icons
- **Tailwind Animate** - Animation utilities

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Bun** - Fast package manager and runtime

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.html          # Resume/CV page
│   └── styles.css           # Additional styles
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── About.tsx        # About section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── Navigation.tsx   # Navigation component
│   │   ├── Portfolio.tsx    # Portfolio projects
│   │   └── Services.tsx     # Services offered
│   ├── assets/
│   │   └── baki.jpg         # Profile image
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Main portfolio page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and CSS variables
├── components.json          # Shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prashanth-Samkumar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The built files will be in the `dist` directory, ready for deployment.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Colors and Theme
The portfolio uses CSS custom properties defined in `src/index.css`. You can easily customize:

```css
:root {
  --background: 222 84% 4.9%;        /* Dark background */
  --primary: 217 89% 61%;            /* Blue primary color */
  --foreground: 210 40% 98%;         /* Light text */
  /* ... more variables */
}
```

### Content Updates
- **Personal Information**: Update `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Modify the `projects` array in `src/components/Portfolio.tsx`
- **Services**: Update the `services` array in `src/components/Services.tsx`
- **Contact**: Modify social links in `src/components/Contact.tsx`

### Profile Image
Replace `src/assets/baki.jpg` with your own profile image. The image should be square (1:1 aspect ratio) for best results.

## 🌟 Featured Projects

### 1. **VectraPDF** 
- **Description**: Natural language interaction with PDFs using custom text chunking
- **Tech Stack**: LangChain, Groq (LLM), Pinecone, Gemini TTS, FastAPI
- **Live Demo**: [VectraPDF](https://vectra-pdf.vercel.app)

### 2. **StudIQ**
- **Description**: AI-powered Learning Management System with contextual answers
- **Tech Stack**: LangChain, Groq LLaMA3, HuggingFace, FAISS, FastAPI, Redis
- **GitHub**: [StudIQ Repository](https://github.com/Prashanth-Samkumar/AI-Powered-Learning-Management-System.git)

### 3. **Odyssey**
- **Description**: Complete e-commerce solution with secure checkout
- **Tech Stack**: React, FastAPI, MySQL, Razorpay API
- **GitHub**: [Odyssey Repository](https://github.com/Prashanth-Samkumar/Odyssey.git)

### 4. **QuantumEd**
- **Description**: EdTech platform with real-time object detection and AI recommendations
- **Tech Stack**: Python, Flask, Google Cloud Vision API
- **GitHub**: [QuantumEd Repository](https://github.com/Prashanth-Samkumar/QuantumEd.git)

## 🎓 Education & Certifications

- **B.Tech in AI & Data Science** - Shiv Nadar University, Chennai (2023-2027)
- **Introduction to Statistics** - Stanford University
- **Supervised Machine Learning** - DeepLearning.AI
- **Affective Computing** - NPTEL

## 🛠️ Services Offered

- **Custom Chatbot Development** - Intelligent, context-aware chatbots
- **AI Agent Solutions** - Autonomous agents for complex decision-making
- **RAG Implementation** - Retrieval-Augmented Generation systems
- **Machine Learning Solutions** - Custom ML models and implementations
- **Data Science Consulting** - Data analysis and insights

## 📱 Responsive Design

The portfolio is fully responsive with the following breakpoints:

- **Mobile** (< 640px): Single column layout, hamburger navigation
- **Tablet** (640px - 1024px): Optimized two-column layouts
- **Desktop** (> 1024px): Full multi-column layouts with hover effects

## 🔗 Links

- **LinkedIn**: [prashanthsamkumar](https://linkedin.com/in/prashanthsamkumar)
- **GitHub**: [Prashanth-Samkumar](https://github.com/Prashanth-Samkumar)
- **Instagram**: [@_prashanth_2005_](https://www.instagram.com/_prashanth_2005_/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the amazing icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

---

**Built with ❤️ by Prashanth Samkumar**

*Currently pursuing B.Tech in AI & Data Science at Shiv Nadar University, Chennai*
