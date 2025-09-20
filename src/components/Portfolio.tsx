import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "VectraPDF",
      description:
        "A platform for natural language interaction with PDFs, featuring custom text chunking and text-to-speech for accessibility. Deployed as containerized services.",
      technologies: ["LangChain", "Groq (LLM)", "Pinecone", "Gemini TTS", "Python", "FastAPI"],
      liveLink: "https://vectra-pdf.vercel.app",
      githubLink:
        "https://github.com/Prashanth-Samkumar/Persona-Driven-Document-Intelligence-Engine.git",
      image: "bg-gradient-to-br from-blue-500/80 to-purple-600/80",
    },
    {
      title: "StudIQ",
      description:
        "A modern LMS that provides contextual, course-specific answers from student materials, enhancing learning with AI-driven insights.",
      technologies: ["LangChain", "Groq LLaMA3", "HuggingFace", "FAISS", "FastAPI", "Redis", "Python"],
      liveLink: "", // 🚨 no live link
      githubLink: "https://github.com/Prashanth-Samkumar/AI-Powered-Learning-Management-System.git",
      image: "bg-gradient-to-br from-green-500/80 to-teal-600/80",
    },
    {
      title: "Odyssey",
      description:
        "A complete e-commerce solution supporting product browsing, shopping cart, secure checkout, and order tracking with scalable data management.",
      technologies: ["React", "FastAPI", "MySQL", "Razorpay API", "Python"],
      liveLink: "", // 🚨 no live link
      githubLink: "https://github.com/Prashanth-Samkumar/Odyssey.git",
      image: "bg-gradient-to-br from-orange-500/80 to-red-600/80",
    },
    {
      title: "QuantumEd",
      description:
        "An EdTech platform using real-time camera input to detect objects and recommend personalized hands-on learning projects.",
      technologies: ["Python", "Flask", "Google Cloud Vision API", "AI Recommendation"],
      liveLink: "", // 🚨 no live link
      githubLink: "https://github.com/Prashanth-Samkumar/QuantumEd.git",
      image: "bg-gradient-to-br from-indigo-500/80 to-cyan-600/80",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Showcasing innovative AI projects and solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const hasLiveDemo = project.liveLink && project.liveLink !== "#";

            return (
              <Card
                key={index}
                className="portfolio-card group border-0 shadow-medium hover:shadow-strong bg-card"
              >
                <div
                  className={`h-40 sm:h-48 ${project.image} rounded-t-lg flex items-center justify-center`}
                >
                  <div className="text-white text-center p-4 sm:p-6">
                    <h3 className="text-lg sm:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90">AI-Powered Solution</p>
                  </div>
                </div>

                <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0 p-4 sm:p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      disabled={!hasLiveDemo}
                      className={`flex-1 text-xs sm:text-sm ${
                        hasLiveDemo
                          ? "bg-gradient-primary hover:bg-primary-dark"
                          : "bg-gray-400 cursor-not-allowed opacity-60"
                      }`}
                      onClick={() => hasLiveDemo && window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 sm:flex-none"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-0" />
                      <span className="ml-1 sm:hidden">GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline"
            className="px-6 sm:px-8 py-2 sm:py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://github.com/Prashanth-Samkumar", "_blank")}
          >
            View More on GitHub
            <Github className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
