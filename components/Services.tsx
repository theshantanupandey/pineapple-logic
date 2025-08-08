import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms",
      icon: "📱"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that convert visitors into customers through intuitive interfaces and seamless experiences",
      icon: "🎨"
    },
    {
      title: "Consulting & Product Strategy",
      description: "Strategic guidance and expert consultation to define your digital roadmap and accelerate product development",
      icon: "💡"
    },
    {
      title: "Cloud Tower: Infrastructure & DevOps",
      description: "Scalable cloud infrastructure, deployment automation, and DevOps practices for reliable, high-performance systems",
      icon: "☁️"
    },
    {
      title: "Security Shield: Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and ensure compliance with industry standards",
      icon: "🛡️"
    },
    {
      title: "Data Arena: Analytics & AI",
      description: "Advanced analytics, machine learning, and AI solutions to unlock insights and drive intelligent decision-making",
      icon: "🤖"
    },
    {
      title: "Maintenance & Upgrades",
      description: "Ongoing support, performance optimization, and system upgrades to keep your solutions running at peak efficiency",
      icon: "🔧"
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
    <section className="py-20 px-6 bg-muted/30" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-6 border-2 border-dashed border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="space-y-4">
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 text-2xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                    <div className="pt-2">
                      <motion.div 
                        className="h-2 bg-border rounded w-full group-hover:bg-primary/30 transition-colors duration-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}