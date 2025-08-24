import { 
  Code, 
  Database, 
  Globe, 
  Layers, 
  Wrench, 
  Lightbulb 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust server-side applications using Python, Django, Node.js, and Express.js with clean, maintainable code architecture.",
      features: ["RESTful API Development", "Database Integration", "Authentication Systems", "Performance Optimization"]
    },
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "End-to-end web application development combining modern frontend frameworks with powerful backend technologies.",
      features: ["React/JavaScript Frontend", "Python/Node.js Backend", "Responsive Design", "Modern UI/UX"]
    },
    {
      icon: Globe,
      title: "API Development & Integration",
      description: "Custom API development and seamless integration with third-party services for enhanced functionality.",
      features: ["REST API Design", "API Documentation", "Third-party Integrations", "Data Validation"]
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Efficient database architecture design and optimization for both SQL and NoSQL database systems.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Tuning"]
    },
    {
      icon: Wrench,
      title: "Custom Application Development",
      description: "Tailored software solutions built from scratch to meet specific business requirements and workflows.",
      features: ["Requirements Analysis", "Custom Solutions", "Scalable Architecture", "Maintenance Support"]
    },
    {
      icon: Lightbulb,
      title: "Problem-Solving & Optimization",
      description: "Analytical approach to identifying bottlenecks and implementing efficient solutions for better performance.",
      features: ["Code Optimization", "Performance Analysis", "Bug Fixing", "System Enhancement"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with modern technologies 
              and best practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 transform hover:scale-105 group h-full"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex-shrink-0 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl group-hover:animate-float">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how we can work together to bring your ideas to life with cutting-edge technology 
                and proven development practices.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;