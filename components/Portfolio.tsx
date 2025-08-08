import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced analytics",
      tech: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      description: "Patient management system with real-time updates",
      tech: ["React Native", "Firebase", "WebRTC"]
    },
    {
      title: "FinTech Dashboard",
      category: "UI/UX Design",
      description: "Comprehensive financial data visualization platform",
      tech: ["Next.js", "D3.js", "PostgreSQL"]
    },
    {
      title: "Logistics Platform",
      category: "Cloud Solutions",
      description: "Scalable logistics management with real-time tracking",
      tech: ["AWS", "Microservices", "Docker"]
    },
    {
      title: "EdTech Platform",
      category: "Full Stack",
      description: "Interactive learning platform with video streaming",
      tech: ["Vue.js", "Python", "Redis"]
    },
    {
      title: "IoT Dashboard",
      category: "Data Analytics",
      description: "Real-time IoT device monitoring and control",
      tech: ["Angular", "IoT Core", "InfluxDB"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful projects that have transformed businesses across industries
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="p-6 border-2 border-dashed border-border bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  {/* Project Image Placeholder */}
                  <motion.div 
                    className="h-40 bg-muted rounded mb-4 relative overflow-hidden group-hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-4 border-2 border-dashed border-border group-hover:border-primary/50 transition-colors duration-300 rounded">
                      <div className="flex items-center justify-center h-full">
                        <motion.div 
                          className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 1 }}
                        >
                          <div className="w-8 h-8 bg-primary rounded-full"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="mb-3">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="text-xs bg-muted px-2 py-1 rounded border border-border group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      View Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="hover:scale-105 transition-transform duration-200">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}