import { Contact } from "../components/Contact";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";

export function ContactPage() {
  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      phone: "+1 (555) 123-4567",
      email: "sf@pineapplelogic.com",
      timezone: "PST"
    },
    {
      city: "New York",
      address: "456 Innovation Ave, Floor 20",
      phone: "+1 (555) 987-6543",
      email: "ny@pineapplelogic.com",
      timezone: "EST"
    },
    {
      city: "London",
      address: "789 Digital Lane, Building C",
      phone: "+44 20 1234 5678",
      email: "london@pineapplelogic.com",
      timezone: "GMT"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity, typically ranging from 4-16 weeks."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes! We work with businesses of all sizes, from early-stage startups to enterprise companies."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile methodology with regular check-ins, transparent communication, and iterative development."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely. We offer maintenance packages and ongoing support to ensure your solution continues to perform optimally."
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
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear about your vision and discuss how Pineapple Logic can help bring it to life through logical, innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />

      {/* Office Locations */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With locations across the globe, Pineapple Logic is always close to our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="p-6 border-2 border-dashed border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="text-center mb-4">
                      <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {office.city}
                      </h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {office.timezone}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <span>📍</span>
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📞</span>
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📧</span>
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 group">
                  <h3 className="font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}