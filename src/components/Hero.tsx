import { ArrowRight, Download } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.docx";
    link.download = "Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,173,239,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img
              src={profileImage}
              alt="Vignesh Kandem"
              className="w-72 h-72 rounded-full mx-auto object-cover border-4 border-white shadow-md"
              />
            </div>
          </div>

          <div className="mb-6 animate-fade-in">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 text-gradient-primary leading-[1.2] pb-2"
              style={{ textShadow: "0 2px 8px rgba(0,173,239,0.4)" }}
            >
              Vignesh Kandem
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium h-12">
              <Typewriter
                words={[
                  "Enthusiastic in Full Stack Development",
                  "Intensely curious in Artificial Intelligence"
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </div>

          <div className="mb-10 animate-fade-in">
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Passionate about learning, exploring, and coding. I enjoy building
              real-world applications and actively learning DSA (Java), advanced
              Python, REST APIs, and cloud deployment. Always excited to tackle
              new challenges and create innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#portfolio")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="relative z-50 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={downloadResume}
            >
              Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
