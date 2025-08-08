import { Services } from "../components/Services";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function ServicesPage() {
  const serviceDetails = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications built for performance, scalability, and user engagement",
      features: ["iOS & Android Development", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications", "Offline Functionality", "Performance Monitoring"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"]
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that create intuitive, engaging experiences and drive conversions",
      features: ["User Research & Testing", "Wireframing & Prototyping", "Visual Design Systems", "Interaction Design", "Accessibility Compliance", "Design-to-Code Handoff"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"]
    },
    {
      title: "Consulting & Product Strategy",
      description: "Strategic guidance to define your digital roadmap, validate concepts, and accelerate time-to-market",
      features: ["Digital Transformation", "Product Roadmapping", "Technology Assessment", "Market Analysis", "Go-to-Market Strategy", "Technical Architecture"],
      technologies: ["Lean Canvas", "Design Thinking", "Agile Methodology", "OKRs", "SWOT Analysis", "Competitor Analysis"]
    },
    {
      title: "Cloud Tower: Infrastructure & DevOps",
      description: "Scalable, secure cloud infrastructure with automated deployment and monitoring for high-performance systems",
      features: ["Cloud Migration", "Auto-scaling Infrastructure", "CI/CD Pipelines", "Container Orchestration", "Monitoring & Alerting", "Disaster Recovery"],
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "Security Shield: Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and ensure regulatory compliance",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Identity & Access Management", "Threat Detection", "Incident Response"],
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP", "SOC 2", "GDPR Compliance"]
    },
    {
      title: "Data Arena: Analytics & AI",
      description: "Advanced analytics, machine learning, and AI solutions to unlock insights and drive intelligent automation",
      features: ["Data Pipeline Development", "Machine Learning Models", "Business Intelligence", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Tableau", "Power BI"]
    },
    {
      title: "Maintenance & Upgrades",
      description: "Ongoing support, optimization, and evolution of your digital solutions to ensure peak performance",
      features: ["24/7 Monitoring", "Performance Optimization", "Security Updates", "Feature Enhancements", "Bug Fixes", "Technical Support"],
      technologies: ["Monitoring Tools", "Analytics", "Version Control", "Testing Frameworks", "Documentation", "Support Systems"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and enhance your competitive advantage in the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      <Services />

      {/* Detailed Service Breakdown */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Detailed Service Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive breakdown of what each service includes and the cutting-edge technologies we leverage
            </p>
          </motion.div>

          <div className="space-y-8">
            {serviceDetails.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-3">What's Included:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">Technologies & Tools:</h4>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="bg-muted p-3 rounded border border-border text-center text-sm group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Get Started with {service.title}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">Our Proven Process</h2>
            <p className="text-muted-foreground text-lg mb-12 text-center max-w-2xl mx-auto">
              We follow a systematic approach that ensures successful project delivery and exceeds client expectations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "Discovery", description: "Understanding your needs, goals, and technical requirements" },
                { step: "Strategy", description: "Developing a comprehensive plan and technical architecture" },
                { step: "Design & Development", description: "Creating and building your solution with regular feedback" },
                { step: "Launch & Support", description: "Deployment, training, and ongoing maintenance support" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-medium text-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="font-medium mb-2">{phase.step}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss which services align with your goals and create a custom solution that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transition-transform duration-200">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}