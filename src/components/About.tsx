import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Shiv Nadar University, Chennai",
      period: "2023 - 2027",
      status: "Third Year",
    },
  ];

  const certifications = [
    {
      title: "Introduction to Statistics",
      provider: "Stanford University",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Supervised Machine Learning",
      provider: "DeepLearning.AI",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Affective Computing",
      provider: "NPTEL",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  const skills = [
    "Large Language Models (LLMs)",
    "AI Agents",
    "Retrieval-Augmented Generation (RAG)",
    "Python",
    "LangChain",
    "FastAPI",
    "Machine Learning",
    "Data Science",
    "Natural Language Processing",
    "Deep Learning",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Combining academic rigor with practical innovation in AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
              <BookOpen className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              As a third-year student at Shiv Nadar University, Chennai, I'm deeply passionate about 
              the transformative potential of artificial intelligence. My curiosity drives me to explore 
              cutting-edge technologies like Large Language Models and AI Agents, with a focus on making 
              AI systems more accessible and impactful.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I believe in the power of continuous learning and have enriched my academic foundation 
              with specialized courses from renowned institutions. My goal is to develop scalable AI 
              solutions that bridge the gap between complex technology and practical applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
              <GraduationCap className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="portfolio-card bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-1 text-sm sm:text-base">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                    <Badge variant="secondary" className="w-fit">{edu.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Certifications & Courses</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="portfolio-card bg-card border-0 shadow-soft hover:shadow-medium">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="flex justify-center mb-3 sm:mb-4 text-primary">
                    {cert.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{cert.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;