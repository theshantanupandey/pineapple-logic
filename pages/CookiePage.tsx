import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { useState } from "react";

interface CookiePageProps {
  navigate: (path: string) => void;
}

export function CookiePage({ navigate }: CookiePageProps) {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: true,
    marketing: false,
    functional: true
  });

  const handlePreferenceChange = (type: keyof typeof cookiePreferences, value: boolean) => {
    if (type !== 'essential') {
      setCookiePreferences(prev => ({ ...prev, [type]: value }));
    }
  };

  const cookieTypes = [
    {
      name: "Essential Cookies",
      key: "essential" as const,
      description: "These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.",
      examples: ["Session management", "Security tokens", "Load balancing"],
      required: true
    },
    {
      name: "Analytics Cookies", 
      key: "analytics" as const,
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: ["Google Analytics", "Page views", "User behavior patterns"],
      required: false
    },
    {
      name: "Functional Cookies",
      key: "functional" as const, 
      description: "These cookies enable enhanced functionality and personalization features that improve your user experience.",
      examples: ["Language preferences", "Region settings", "Accessibility options"],
      required: false
    },
    {
      name: "Marketing Cookies",
      key: "marketing" as const,
      description: "These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.",
      examples: ["Ad targeting", "Conversion tracking", "Social media pixels"],
      required: false
    }
  ];

  const sections = [
    {
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files that are stored on your device when you visit a website.",
        "They help websites remember information about your visit, which can make your next visit easier and more useful.",
        "Cookies can be 'first-party' (set by our website) or 'third-party' (set by other websites through our site).",
        "Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer."
      ]
    },
    {
      title: "How We Use Cookies",
      content: [
        "Essential functionality: To provide basic website features and ensure security.",
        "Performance analysis: To understand how visitors use our website and identify areas for improvement.",
        "Personalization: To remember your preferences and provide a customized experience.",
        "Marketing: To deliver relevant advertisements and measure their effectiveness (with your consent)."
      ]
    },
    {
      title: "Cookie Duration",
      content: [
        "Session Cookies: These are temporary and are deleted when you close your browser.",
        "Persistent Cookies: These remain on your device for a set period or until you delete them.",
        "First-party Cookies: Set by our website domain and typically persist for 1-2 years.",
        "Third-party Cookies: Set by our partners and have varying durations based on their policies."
      ]
    },
    {
      title: "Managing Your Cookie Preferences",
      content: [
        "You can control cookie settings through your browser preferences.",
        "Most browsers allow you to view, delete, and block cookies on a site-by-site basis.",
        "Disabling certain cookies may affect website functionality and your user experience.",
        "You can also use our cookie preference center below to customize your settings."
      ]
    },
    {
      title: "Third-Party Cookies",
      content: [
        "We may use third-party services that set their own cookies, such as Google Analytics.",
        "These services have their own privacy policies and cookie practices.",
        "We do not control third-party cookies and recommend reviewing their privacy policies.",
        "Third-party cookies can be managed through their respective opt-out mechanisms."
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
              🍪 Cookie Information
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how Pineapple Logic uses cookies to improve your browsing experience and provide personalized services.
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

      {/* Cookie Preferences */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 border-2 border-dashed border-border hover:border-primary/30 transition-all duration-500 bg-background/80 backdrop-blur-sm">
              <h2 className="text-2xl font-medium mb-6">Cookie Preference Center</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Customize your cookie preferences below. You can enable or disable different categories of cookies to control your privacy settings.
              </p>
              
              <div className="space-y-6">
                {cookieTypes.map((cookie, index) => (
                  <motion.div
                    key={index}
                    className="border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-medium mb-2 flex items-center gap-2">
                          {cookie.name}
                          {cookie.required && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              Required
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {cookie.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cookie.examples.map((example, exampleIndex) => (
                            <span
                              key={exampleIndex}
                              className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      <motion.div
                        className="ml-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Switch
                          checked={cookiePreferences[cookie.key]}
                          onCheckedChange={(checked: boolean) => handlePreferenceChange(cookie.key, checked)}
                          disabled={cookie.required}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                  onClick={() => {
                    // Save preferences logic would go here
                    console.log('Cookie preferences saved:', cookiePreferences);
                  }}
                >
                  Save Preferences
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setCookiePreferences({
                      essential: true,
                      analytics: false,
                      marketing: false,
                      functional: false
                    });
                  }}
                >
                  Accept Essential Only
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setCookiePreferences({
                      essential: true,
                      analytics: true,
                      marketing: true,
                      functional: true
                    });
                  }}
                >
                  Accept All
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          {/* Content Sections */}
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
              <h3 className="text-2xl font-medium mb-4">Questions About Cookies?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or need help managing your preferences, 
                our team is here to assist you.
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
                    Contact Support
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => navigate("/privacy")}
                    className="hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                  >
                    View Privacy Policy
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