import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Search, Zap, MessageSquare, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Custom Chatbot Development",
      description: "Build intelligent, context-aware chatbots tailored to your specific business needs using advanced NLP and machine learning techniques.",
      features: [
        "Natural language understanding",
        "Multi-turn conversations",
        "Integration with existing systems",
        "Custom training on domain data",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Agent Solutions",
      description: "Develop autonomous AI agents capable of complex decision-making, task automation, and intelligent problem-solving.",
      features: [
        "Goal-oriented behavior",
        "Multi-step reasoning",
        "Tool integration capabilities",
        "Adaptive learning mechanisms",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "RAG Implementation",
      description: "Implement Retrieval-Augmented Generation systems that combine the power of large language models with your proprietary knowledge base.",
      features: [
        "Semantic search capabilities",
        "Vector database integration",
        "Real-time information retrieval",
        "Domain-specific knowledge synthesis",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Deployment",
      description: "Quick turnaround times with efficient development processes",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Continuous maintenance and optimization of AI systems",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored implementations based on specific requirements",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Specialized AI solutions for modern challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="portfolio-card border-0 shadow-soft hover:shadow-medium bg-gradient-card h-full">
              <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-glow`}>
                  {service.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 p-4 sm:p-6">
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-soft">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">Why Choose My Services?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">{benefit.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-gradient-primary hover:bg-primary-dark text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start Your AI Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;