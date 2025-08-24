import { GraduationCap, Code, Brain, Target } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "3rd year B.Tech in Computer Science (IoT) at Sreenidhi Institute of Science and Technology (2023-2027)"
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack web development with modern frameworks and technologies"
    },
    {
      icon: Brain,
      title: "AI & Innovation",
      description: "Passionate about artificial intelligence and machine learning applications"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Dedicated to creating efficient solutions for real-world challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Passionate Developer & Lifelong Learner
              </h3>
              
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  I'm currently pursuing my undergraduate degree in Computer Science with a specialization in IoT, 
                  scheduled to graduate in 2027. My academic journey has been complemented by hands-on experience 
                  in full-stack development and a deep fascination with artificial intelligence.
                </p>
                
                <p>
                  What drives me is the endless possibility of creating solutions that make a difference. Whether 
                  it's building a robust web application, optimizing database performance, or exploring the latest 
                  in AI technology, I approach every project with curiosity and dedication.
                </p>
                
                <p>
                  Currently, I'm expanding my expertise in Data Structures and Algorithms using Java, diving deeper 
                  into advanced Python concepts, mastering REST API development, and exploring cloud deployment 
                  strategies. Each day brings new learning opportunities and challenges that fuel my passion for technology.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-full mb-4">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">My Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary rounded-full" />
              
              <div className="space-y-12">
                {/* 2023 */}
                <div className="flex items-center justify-center">
                  <div className="bg-card p-6 rounded-xl shadow-lg w-[320px] h-[160px] flex flex-col justify-center items-center text-center relative">
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">2023 - Present</h4>
                    <p className="text-muted-foreground">Started B.Tech in Computer Science (IoT) at SNIST</p>
                  </div>
                </div>
                
                {/* 2024 */}
                <div className="flex items-center justify-center">
                  <div className="bg-card p-6 rounded-xl shadow-lg w-[320px] h-[160px] flex flex-col justify-center items-center text-center relative">
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">2024</h4>
                    <p className="text-muted-foreground">Learned Java, DSA, and explored frameworks for web development</p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="flex items-center justify-center">
                  <div className="bg-card p-6 rounded-xl shadow-lg w-[320px] h-[160px] flex flex-col justify-center items-center text-center relative">
                    <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">2025</h4>
                    <p className="text-muted-foreground">Full Stack Development Internship CodSoft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
