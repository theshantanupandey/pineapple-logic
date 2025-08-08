import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface FooterProps {
  navigate: (path: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    "Mobile App Development",
    "UI/UX Design & Prototyping",
    "Cloud Infrastructure",
    "Cybersecurity Services",
    "Data Analytics & AI",
  ];

  const socialLinks = [
    { platform: "LinkedIn", icon: "💼", href: "#" },
    { platform: "Twitter", icon: "🐦", href: "#" },
    { platform: "GitHub", icon: "🐱", href: "#" },
    { platform: "Dribbble", icon: "🏀", href: "#" },
  ];

  const offices = [
    { city: "San Francisco", timezone: "PST" },
    { city: "New York", timezone: "EST" },
    { city: "London", timezone: "GMT" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-background border-t border-border overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-b from-accent/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.section
          className="py-16 px-6 border-b border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 md:p-12 border-2 border-dashed border-border hover:border-primary/30 transition-all duration-500 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm relative overflow-hidden group">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5 }}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.h3
                      className="text-2xl md:text-3xl font-medium mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Stay Updated with
                      <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        {" "}
                        Innovation
                      </span>
                    </motion.h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Get the latest insights on digital
                      transformation, technology trends, and
                      industry best practices delivered to your
                      inbox.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
                      whileFocus={{
                        scale: 1.02,
                        borderColor: "var(--primary)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="px-6 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                        <motion.span className="flex items-center gap-2">
                          Subscribe
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          >
                            →
                          </motion.span>
                        </motion.span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Footer Content */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="flex items-center space-x-3 mb-6 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => navigate("/")}
                >
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-primary-foreground text-lg">
                      🍍
                    </span>
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-lg">
                      Pineapple Logic
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Logical Innovation
                    </p>
                  </div>
                </motion.div>
                <motion.p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Transforming ideas into digital reality
                  through logical innovation and creative
                  excellence. We build the future, one project
                  at a time.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  className="flex space-x-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                    >
                      <motion.span
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {social.icon}
                      </motion.span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-medium mb-6 text-lg">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                    >
                      <motion.button
                        onClick={() => navigate(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                        {link.label}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-medium mb-6 text-lg">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      onClick={() => navigate("/services")}
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-medium mb-6 text-lg">
                  Global Presence
                </h4>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {office.city}
                        </span>
                        <motion.span
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          {office.timezone}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 pt-6 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    Contact Us
                  </p>
                  <motion.a
                    href="mailto:hello@pineapplelogic.com"
                    className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    hello@pineapplelogic.com
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border/50 px-6 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-muted-foreground text-sm"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Pineapple Logic. All rights
              reserved.
            </motion.p>

            <motion.div
              className="flex items-center space-x-6 text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {legalLinks.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => navigate(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}