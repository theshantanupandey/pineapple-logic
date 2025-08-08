import { About } from "../components/About";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";

export function AboutPage() {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", emoji: "👩‍💼" },
    { name: "Mike Chen", role: "CTO", emoji: "👨‍💻" },
    { name: "Alex Rivera", role: "Design Director", emoji: "🎨" },
    { name: "Emma Davis", role: "Project Manager", emoji: "📋" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results",
      icon: "🎯"
    },
    {
      title: "Quality Focus",
      description: "Every line of code, every design element is crafted with precision",
      icon: "⭐"
    },
    {
      title: "Transparency",
      description: "Open communication and honest feedback throughout every project",
      icon: "🤝"
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
            <h1 className="text-4xl md:text-6xl font-medium mb-6">About Pineapple Logic</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and strategists dedicated to transforming digital experiences through logical, innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      <About />

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded in 2014, Pineapple Logic started as a small team of developers with a unique philosophy: 
                combining the sweet creativity of innovation with the logical precision of technology. What began as a 
                passion project has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p>
                Over the years, we've helped hundreds of companies transform their digital presence, 
                from startups launching their first product to Fortune 500 companies modernizing their 
                technology stack. Our approach combines technical expertise with creative problem-solving 
                to deliver solutions that drive real business results.
              </p>
              <p>
                Today, our team spans multiple time zones and brings together diverse perspectives and 
                specialized skills. We're united by a shared commitment to innovation, quality, and 
                client success. Our name reflects our core belief: the best solutions come from balancing 
                creative thinking with logical execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Pineapple Logic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                      {value.icon}
                    </motion.div>
                    <h3 className="font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals driving our vision forward at Pineapple Logic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
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
                  <Card className="p-6 text-center border-2 border-dashed border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                    <motion.div 
                      className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center text-3xl group-hover:bg-primary/10 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.emoji}
                    </motion.div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}