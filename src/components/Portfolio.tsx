import { ExternalLink, Github, ShoppingCart, Calculator, Gamepad2, CreditCard, DollarSign, Shirt, Bot, Calendar, BookOpen } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const featuredProjects = [
    {
      title: "Cartzy - Grocery Store Management",
      description:
        "A comprehensive full-stack web application for grocery store management featuring product management, billing system, and inventory tracking. Built with modern web technologies for optimal performance.",
      icon: ShoppingCart,
      techStack: ["Django", "Bootstrap", "DB-Browser", "Python"],
      features: [
        "Product Management",
        "Billing System",
        "Inventory Tracking",
        "User Authentication",
      ],
      githubUrl: "https://github.com/Vignesh-Kandem/cartzy",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      title: "Smart Calculator",
      description:
      "Feature-rich desktop calculator application built with Java Swing, offering both dark and light themes, keyboard input support, and advanced mathematical functions for enhanced user experience.",
      icon: Calculator,
      techStack: ["Java", "Swing", "AWT"],
      features: [
        "Dark/Light Themes",
        "Keyboard Input",
        "Advanced Functions",
        "Memory Operations",
      ],
      githubUrl: "https://github.com/Vignesh-Kandem/Calculator",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600", // updated color
    },
  ];

  const majorProjects = [
    {
      title: "Gumroad Clone",
      description: "E-commerce platform clone with payment integration",
      icon: CreditCard,
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "CSS",
        "JavaScript",
        "HTML",
        "Postman",
      ],
    },
    {
      title: "Smart Clothing System",
      description: "IoT-based smart clothing solution with sensor integration",
      icon: Shirt,
      techStack: [
        "IoT",
        "Sensors",
        "Embedded Systems",
        "C/C++",
        "ESP32",
        "Circuit Design",
        "CAD Software",
      ],
    },
    {
    title: "EduSphere",
    description:
      "Education platform for students to explore roadmaps and upcoming tech events.",
    icon: BookOpen,
    techStack: ["React",
        "Node.js",
        "MongoDB",
        "Express",
        "CSS",
        "JavaScript",
        "HTML",
        "Postman"
      ],
},
    {
      title: "Elevator Shaft Inspection Bot",
      description: "Automated inspection system for elevator maintenance",
      icon: Bot,
      techStack: [
        "Robotics",
        "IoT",
        "Sensors",
        "Embedded Systems",
        "C/C++",
        "ESP32",
        "Circuit Design",
        "CAD Software",
      ],
    },
  ];

  const miniProjects = [
    {
      title: "Expense Tracker",
      description: "Personal finance management application",
      icon: DollarSign,
      techStack: ["Python", "matplotlib", "Pandas", "NumPy"],
    },
    {
      title: "Casino Game",
      description: "Interactive casino game with multiple game modes",
      icon: Gamepad2,
      techStack: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Card Flip Game",
      description: "Memory-based card matching game with animations",
      icon: Gamepad2,
      techStack: ["JavaScript", "CSS Animations", "HTML5"],
    },
    {
    title: "Planora",
    description:
      "The all-in-one app to manage your tasks, schedule, and projects effortlessly",
    icon: Calendar,
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Simple Calculator",
    description: "A basic calculator for performing minor calculations",
    icon: Calculator,
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest projects demonstrating full-stack
              development skills, problem-solving abilities, and passion for
              creating innovative solutions.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 transform hover:scale-105 group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div
                      className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}
                    >
                      <project.icon className="h-16 w-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-foreground mb-2">
                          Key Features:
                        </h5>
                        <div className="grid grid-cols-2 gap-1">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center text-xs"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Major Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Major Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 transform hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-primary rounded-xl group-hover:animate-float">
                        <project.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Minor Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Minor Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 transform hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-primary rounded-xl group-hover:animate-float">
                        <project.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-secondary border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Explore More on GitHub
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Visit my GitHub profile to see more projects, contributions, and
                code samples showcasing my development journey and technical
                skills.
              </p>
              <Button
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://github.com/Vignesh-Kandem", "_blank")
                }
              >
                <Github className="h-5 w-5 mr-2" />
                View GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
