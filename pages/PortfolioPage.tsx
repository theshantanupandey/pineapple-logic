import { Portfolio } from "../components/Portfolio";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function PortfolioPage() {
  const featuredProjects = [
    {
      title: "E-commerce Revolution",
      client: "RetailCorp",
      year: "2024",
      category: "Web Development",
      description: "Complete e-commerce platform overhaul resulting in 300% increase in conversions",
      results: ["300% conversion increase", "50% faster load times", "99.9% uptime"],
      image: "🛒"
    },
    {
      title: "HealthTech Innovation",
      client: "MediCare Solutions",
      year: "2023",
      category: "Mobile App",
      description: "Patient management system connecting doctors and patients seamlessly",
      results: ["10k+ active users", "98% user satisfaction", "24/7 availability"],
      image: "🏥"
    },
    {
      title: "FinTech Dashboard",
      client: "InvestPro",
      year: "2024",
      category: "UI/UX Design",
      description: "Comprehensive financial analytics dashboard for investment professionals",
      results: ["Real-time data viz", "40% time savings", "Award-winning design"],
      image: "📊"
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
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing successful projects that have transformed businesses and delivered measurable results across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In-depth look at some of our most successful projects and their impact
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="space-y-2 mb-4">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">{project.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{project.client}</p>
                      <p className="mb-6">{project.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-medium">Key Results:</h4>
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        View Full Case Study
                      </Button>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <motion.div 
                        className="bg-muted rounded-lg p-12 border-2 border-dashed border-border group-hover:border-primary/50 transition-all duration-300 text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-6xl mb-4">{project.image}</div>
                        <div className="space-y-3">
                          <div className="h-4 bg-border rounded group-hover:bg-primary/30 transition-colors duration-300"></div>
                          <div className="h-3 bg-border rounded w-3/4 mx-auto group-hover:bg-primary/30 transition-colors duration-300"></div>
                          <div className="h-3 bg-border rounded w-1/2 mx-auto group-hover:bg-primary/30 transition-colors duration-300"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-12">Our Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "Team Members" },
                { value: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-medium mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}