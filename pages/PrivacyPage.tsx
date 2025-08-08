import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface PrivacyPageProps {
  navigate: (path: string) => void;
}

export function PrivacyPage({ navigate }: PrivacyPageProps) {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you contact us or request our services, we may collect your name, email address, phone number, and company information.",
        "Usage Data: We collect information about how you interact with our website, including IP addresses, browser type, and pages visited.",
        "Communication Records: We maintain records of our communications with you, including emails and consultation notes."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Service Delivery: To provide, maintain, and improve our services and communicate with you about your projects.",
        "Business Operations: To manage our business operations, including invoicing, project management, and customer support.",
        "Marketing: To send you updates about our services, industry insights, and promotional materials (with your consent).",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes."
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "Service Providers: We may share your information with trusted third-party service providers who assist us in operating our business.",
        "Legal Requirements: We may disclose your information if required by law or to protect our rights and safety.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred.",
        "Consent: We may share your information with your explicit consent for specific purposes."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use encryption, secure servers, and access controls to safeguard your data.",
        "Regular security assessments are conducted to ensure our protective measures remain effective.",
        "We limit access to your personal information to employees and contractors who need it to perform their duties."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access: You have the right to request access to the personal information we hold about you.",
        "Correction: You can request that we correct any inaccurate or incomplete personal information.",
        "Deletion: You may request that we delete your personal information, subject to certain exceptions.",
        "Portability: You have the right to receive your personal information in a structured, machine-readable format.",
        "Opt-out: You can unsubscribe from our marketing communications at any time."
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience and analyze website performance.",
        "Essential cookies are necessary for the website to function properly.",
        "Analytics cookies help us understand how visitors interact with our website.",
        "You can control cookie preferences through your browser settings."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected.",
        "Project-related information is typically retained for 7 years for business and legal purposes.",
        "Marketing communications data is retained until you unsubscribe or we determine it's no longer necessary.",
        "We regularly review and delete outdated information in accordance with our data retention policy."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us:",
        "Email: privacy@pineapplelogic.com",
        "Phone: +1 (555) 123-4567",
        "Address: 123 Tech Street, Suite 100, San Francisco, CA 94105"
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
              🔒 Legal Information
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Pineapple Logic collects, uses, and protects your personal information.
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
              <h2 className="text-2xl font-medium mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Pineapple Logic, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services. By using our services, you consent to the data practices described in this policy.
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
              <h3 className="text-2xl font-medium mb-4">Questions About Your Privacy?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, 
                we're here to help. Contact our privacy team for assistance.
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
                    Contact Privacy Team
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => navigate("/")}
                    className="hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                  >
                    Back to Home
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