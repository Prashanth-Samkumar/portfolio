import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react"; // replaced FileText with Eye
import profileImage from "@/assets/baki.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 sm:px-6 pt-20 sm:pt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                Hi, I'm{" "}
                <span className="gradient-text">Prashanth Samkumar</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-balance">
                AI & Data Science Innovator
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-balance">
                Passionate about Large Language Models, AI Agents, and Retrieval-Augmented Generation. 
                Currently pursuing B.Tech in AI & Data Science at Shiv Nadar University, Chennai, 
                building scalable and impactful AI systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-primary hover:bg-primary-dark text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="./public/resume.html" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow animate-scale-in">
                <img
                  src={profileImage}
                  alt="Prashanth Samkumar - AI & Data Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 sm:top-8 sm:left-8 w-full h-full rounded-full bg-gradient-primary/20 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
