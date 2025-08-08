import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface TermsPageProps {
  navigate: (path: string) => void;
}

export function TermsPage({ navigate }: TermsPageProps) {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Pineapple Logic's website and services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services.",
        "We may update these terms from time to time, and continued use constitutes acceptance of any changes.",
        "These terms apply to all users, including clients, visitors, and other users of our services."
      ]
    },
    {
      title: "Services Description",
      content: [
        "Pineapple Logic provides digital transformation services including web development, mobile app development, UI/UX design, cloud infrastructure, cybersecurity, and consulting services.",
        "Service specifications, timelines, and deliverables will be detailed in separate project agreements or statements of work.",
        "We reserve the right to modify or discontinue services with reasonable notice.",
        "Service availability may be subject to maintenance windows and technical limitations."
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        "Provide accurate and complete information necessary for service delivery.",
        "Respond to requests for feedback, approvals, and information in a timely manner.",
        "Ensure you have the rights to any content, materials, or data provided to us.",
        "Comply with all applicable laws and regulations in your use of our services.",
        "Maintain the confidentiality of any access credentials or sensitive information.",
        "Pay all fees and charges according to the agreed terms and schedule."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "Upon full payment, clients receive ownership of custom-developed work product as specified in the project agreement.",
        "Pineapple Logic retains ownership of proprietary methodologies, frameworks, and pre-existing intellectual property.",
        "Clients grant us permission to use project details as case studies and portfolio examples, unless otherwise agreed.",
        "We respect third-party intellectual property rights and expect clients to do the same.",
        "Any open-source components used will be clearly identified and subject to their respective licenses."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms will be specified in individual project agreements or invoices.",
        "Late payments may be subject to interest charges and service suspension.",
        "All fees are non-refundable unless otherwise specified in writing.",
        "Clients are responsible for any taxes, duties, or other charges related to the services.",
        "Disputed charges must be reported within 30 days of invoice date."
      ]
    },
    {
      title: "Confidentiality",
      content: [
        "We maintain strict confidentiality regarding client information and project details.",
        "Both parties agree to protect confidential information shared during the course of our relationship.",
        "Confidentiality obligations survive the termination of our service agreement.",
        "We may disclose confidential information only when required by law or with explicit client consent."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the total amount paid for the specific services in question.",
        "We are not liable for indirect, incidental, consequential, or punitive damages.",
        "We do not guarantee uninterrupted or error-free service operation.",
        "Clients are responsible for backing up their data and maintaining appropriate security measures.",
        "Our liability does not extend to third-party services, software, or platforms."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate services with written notice as specified in the project agreement.",
        "We reserve the right to terminate services immediately for breach of these terms.",
        "Upon termination, clients remain responsible for payment of services rendered.",
        "We will provide reasonable assistance in transitioning services, subject to additional fees.",
        "Termination does not affect rights and obligations that accrued before termination."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of California, United States.",
        "Any disputes will be resolved through binding arbitration in San Francisco, California.",
        "Both parties waive the right to trial by jury for any disputes related to these terms.",
        "If any provision is found unenforceable, the remainder of these terms remain in effect."
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 px-6 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              📋 Legal Agreement
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These terms govern your use of Pineapple Logic's services. Please read them carefully before engaging our services.
            </p>
            <motion.p 
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Last updated: January 8, 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-8 border-2 border-dashed border-border hover:border-primary/30 transition-all duration-500 bg-background/80 backdrop-blur-sm">
              <h2 className="text-2xl font-medium mb-4">Agreement Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legal agreement between you and Pineapple Logic regarding your use of our services. 
                By engaging our services or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                These Terms apply to all projects, consultations, and interactions with our company.
              </p>
            </Card>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-dashed border-border hover:border-primary/30 transition-all duration-500 group">
                  <h3 className="text-xl font-medium mb-6 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2 border-dashed border-border hover:border-primary/30 transition-all duration-500 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm">
              <h3 className="text-2xl font-medium mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you agree to these terms and are ready to begin your digital transformation journey, 
                let's discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={() => navigate("/contact")}
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Project
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => navigate("/services")}
                    className="hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                  >
                    View Our Services
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}