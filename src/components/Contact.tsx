import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Twitter, GraduationCap, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kandemvignesh@gmail.com",
      href: "mailto:kandemvignesh@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9391202937",
      href: "tel:+919391202937"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vigneshkandem07",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/Vignesh-Kandem",
      color: "hover:text-gray-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Vigneshkandem",
      color: "hover:text-blue-400"
    },
    {
      icon: GraduationCap,
      label: "ORCID",
      href: "https://orcid.org/0009-0007-6956-1163",
      color: "hover:text-green-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply connect with fellow developers and tech enthusiasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="bg-input border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="p-3 bg-gradient-primary rounded-xl mr-4 group-hover:animate-float">
                          <info.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href && info.href !== "#" ? (
                            <a 
                              href={info.href}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 group ${social.color}`}
                      >
                        <social.icon className="h-5 w-5 mr-3 group-hover:animate-float" />
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Current Status</h3>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                    <span className="text-primary font-medium">Available for Opportunities</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Currently pursuing B.Tech and actively seeking internships, 
                    freelance projects, and collaboration opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;