import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion, easeOut } from "framer-motion";
import { useState } from "react";

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
      features: ["iOS & Android", "React Native", "Performance Optimized"],
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions that convert visitors into customers through intuitive interfaces and seamless experiences",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      features: ["User Research", "Figma Prototypes", "Design Systems"],
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)"
    },
    {
      title: "Consulting & Product Strategy",
      description: "Strategic guidance and expert consultation to define your digital roadmap and accelerate product development",
      icon: "💡",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Digital Strategy", "Market Analysis", "Technical Roadmap"],
      bgPattern: "radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)"
    },
    {
      title: "Cloud Tower: Infrastructure & DevOps",
      description: "Scalable cloud infrastructure, deployment automation, and DevOps practices for reliable, high-performance systems",
      icon: "☁️",
      gradient: "from-cyan-500 to-teal-500",
      features: ["AWS/Azure", "CI/CD Pipelines", "Auto-scaling"],
      bgPattern: "radial-gradient(circle at 60% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
    },
    {
      title: "Security Shield: Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and ensure compliance with industry standards",
      icon: "🛡️",
      gradient: "from-red-500 to-rose-500",
      features: ["Security Audits", "Compliance", "Threat Detection"],
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)"
    },
    {
      title: "Data Arena: Analytics & AI",
      description: "Advanced analytics, machine learning, and AI solutions to unlock insights and drive intelligent decision-making",
      icon: "🤖",
      gradient: "from-indigo-500 to-blue-500",
      features: ["Machine Learning", "Data Pipelines", "AI Integration"],
      bgPattern: "radial-gradient(circle at 70% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)"
    },
    {
      title: "Maintenance & Upgrades",
      description: "Ongoing support, performance optimization, and system upgrades to keep your solutions running at peak efficiency",
      icon: "🔧",
      gradient: "from-emerald-500 to-green-500",
      features: ["24/7 Monitoring", "Updates", "Optimization"],
      bgPattern: "radial-gradient(circle at 50% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Define variants without transition in the target state
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };
  
  // Define transition separately
  const itemTransition = {
    duration: 0.6,
    ease: easeOut
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            🚀 Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Digital Solutions
            </motion.span>
          </h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            From concept to deployment, we provide end-to-end services that transform your vision into powerful digital experiences
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              transition={itemTransition}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                className="h-full"
              >
                <Card 
                  className="relative p-8 border-2 border-dashed border-border bg-background/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group h-full overflow-hidden"
                  style={{
                    backgroundImage: hoveredIndex === index ? service.bgPattern : undefined
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1.5, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                    }}
                  />
                  
                  <div className="relative z-10 space-y-6">
                    <motion.div 
                      className="flex items-start justify-between"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ 
                          rotate: 360, 
                          scale: 1.1,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                        }}
                        transition={{ duration: 0.6 }}
                        animate={hoveredIndex === index ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0]
                        } : {}}
                      >
                        {service.icon}
                      </motion.div>
                      
                      <motion.div
                        className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: 20 }}
                        whileHover={{ x: 0 }}
                      >
                        ✨ Featured
                      </motion.div>
                    </motion.div>
                    
                    <div>
                      <motion.h3 
                        className="font-medium mb-3 group-hover:text-primary transition-colors duration-300 text-lg"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground text-sm leading-relaxed mb-4"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      {/* Feature tags */}
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Progress bar animation */}
                    <div className="pt-2">
                      <motion.div 
                        className="h-1 bg-border rounded-full overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`}
                          initial={{ width: 0, opacity: 0.5 }}
                          whileInView={{ width: "100%", opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
                            scale: 1.02
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 mt-4"
                      >
                        <motion.span 
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          Learn More
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.span className="flex items-center gap-2">
                Explore All Services
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.span>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}