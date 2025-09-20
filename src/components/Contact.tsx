import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/_prashanth_2005_/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/prashanthsamkumar",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/Prashanth-Samkumar",
      gradient: "from-gray-800 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Let's collaborate on your next AI project
          </p>
        </div>

        <Card className="border-0 shadow-medium bg-card mb-8 sm:mb-12">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Ready to Innovate?</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm currently pursuing my B.Tech at Shiv Nadar University, Chennai, and actively seeking 
                opportunities to collaborate on exciting AI projects. Whether you need custom chatbots, 
                AI agents, or RAG implementations, I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  onClick={() => window.open(method.href, "_blank")}
                  className="cursor-pointer border-0 shadow-soft hover:shadow-medium bg-gradient-card min-w-0 transition-transform hover:scale-105"
                >
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col items-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg bg-gradient-to-r ${method.gradient} flex items-center justify-center text-white shadow-glow`}
                    >
                      {method.icon}
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base">{method.label}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-primary hover:bg-primary-dark text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-lg flex items-center mx-auto"
                onClick={() => window.open("https://linkedin.com/in/prashanthsamkumar", "_blank")}
              >
                Send Me a Message
                <Linkedin className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 Prashanth Samkumar. Building the future with AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
