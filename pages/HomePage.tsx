import { Hero } from "../components/Hero";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function HomePage() {
  const highlights = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform applications that deliver exceptional user experiences",
      icon: "📱"
    },
    {
      title: "UI/UX Design & Prototyping", 
      description: "User-centered design solutions that convert visitors into loyal customers",
      icon: "🎨"
    },
    {
      title: "Cloud Tower: Infrastructure & DevOps",
      description: "Scalable cloud infrastructure with automated deployment and monitoring",
      icon: "☁️"
    },
    {
      title: "Security Shield: Cybersecurity",
      description: "Comprehensive cybersecurity solutions to protect your digital assets",
      icon: "🛡️"
    },
    {
      title: "Data Arena: Analytics & AI",
      description: "Advanced analytics and AI solutions to unlock insights and drive growth",
      icon: "🤖"
    },
    {
      title: "Consulting & Product Strategy",
      description: "Strategic guidance to define your digital roadmap and accelerate development",
      icon: "💡"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Featured Services Preview */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">What We Do Best</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating comprehensive digital solutions that drive measurable business results through logical innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="p-6 text-center border-2 border-dashed border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group h-full">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {highlight.icon}
                    </motion.div>
                    <h3 className="font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="hover:scale-105 transition-transform duration-200">
              Explore All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Why Choose Pineapple Logic?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with strategic thinking to deliver solutions that drive real business impact through logical innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Stack Expertise",
                description: "End-to-end capabilities from strategy to implementation and ongoing support",
                icon: "🔄"
              },
              {
                title: "Proven Track Record",
                description: "150+ successful projects across industries with 98% client satisfaction rate",
                icon: "🏆"
              },
              {
                title: "Logical Innovation",
                description: "We blend creative thinking with logical execution to ensure future-ready solutions",
                icon: "🍍"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-3xl mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="font-medium mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how Pineapple Logic's comprehensive services can help accelerate your business growth through logical innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transition-transform duration-200">
                Start Your Project
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