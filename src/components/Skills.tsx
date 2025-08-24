import { 
  Code2, 
  Database, 
  Globe, 
  GitBranch, 
  Cpu, 
  Cloud,
  Brain,
  Users,
  Lightbulb,
  Target
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "PL/SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["Django", "Node.js", "Express.js", "Bootstrap", "SpringBoot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQL-based systems"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Web Technologies",
      icon: Cpu,
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Maven"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Cloud & APIs",
      icon: Cloud,
      skills: ["Web APIs", "REST APIs", "Cloud deployment", "API Integration"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const softSkills = [
    {
      icon: Brain,
      title: "Analytical Thinking",
      description: "Breaking down complex problems into manageable solutions"
    },
    {
      icon: Lightbulb,
      title: "Adaptability", 
      description: "Quick to learn new technologies and adapt to changing requirements"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments and cross-functional projects"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Creative approach to finding efficient and scalable solutions"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technical skills and soft skills that enable me to build 
              robust, scalable applications and work effectively in diverse environments.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 transform hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h4 className="ml-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Soft Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-secondary border-border/50 hover:shadow-glow transition-all duration-500 transform hover:scale-105 group text-center"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-full mb-4 group-hover:animate-float">
                      <skill.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;