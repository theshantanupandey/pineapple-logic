import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    projectType: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    projectDescription: ""
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Mobile App Development",
    "UI/UX Design & Prototyping", 
    "Consulting & Product Strategy",
    "Cloud Tower: Infrastructure & DevOps",
    "Security Shield: Cybersecurity services",
    "Data Arena: Analytics & AI",
    "Maintenance & Upgrades"
  ];

  const budgetRanges = [
    "Under $10k",
    "$10k - $25k",
    "$25k - $50k", 
    "$50k - $100k",
    "$100k - $250k",
    "$250k+"
  ];

  const timelineOptions = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Just exploring"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Consultation form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form or show success message
    // setFormData(initialState);
  };

  const contactMethods = [
    {
      title: "Email Us",
      value: "hello@pineapplelogic.com",
      icon: "📧",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Call Us",
      value: "+1 (555) 123-4567",
      icon: "📞",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Visit Us",
      value: "San Francisco, CA",
      icon: "📍",
      gradient: "from-purple-500 to-pink-500"
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
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            🚀 Let's Work Together
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Start Your Digital Transformation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your vision and we'll help make it reality through logical innovation and creative excellence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-6 text-center border-2 border-dashed border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1.5, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {method.icon}
                    </motion.div>
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{method.value}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 md:p-12 border-2 border-dashed border-border hover:border-primary/30 transition-colors duration-500 bg-background/80 backdrop-blur-sm relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
              initial={{ rotate: -45, scale: 0 }}
              whileHover={{ rotate: 0, scale: 1.5 }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-medium mb-3">Free Consultation Request</h3>
                <p className="text-muted-foreground">Tell us about your vision and we'll help make it reality</p>
              </div>
              
              {/* Personal Information */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-sm">👤</span>
                  </div>
                  <h4 className="text-lg font-medium">Contact Information</h4>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    animate={{ scale: focusedField === 'firstName' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg border-2 focus:border-primary/50"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: focusedField === 'lastName' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg border-2 focus:border-primary/50"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg border-2 focus:border-primary/50"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg border-2 focus:border-primary/50"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    animate={{ scale: focusedField === 'company' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg border-2 focus:border-primary/50"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: focusedField === 'website' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="website" className="text-sm font-medium">
                      Current Website (if any)
                    </Label>
                    <Input
                      id="website"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      onFocus={() => setFocusedField('website')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105 focus:shadow-lg border-2 focus:border-primary/50"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Information */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-sm">💼</span>
                  </div>
                  <h4 className="text-lg font-medium">Project Information</h4>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value: string) => handleInputChange('projectType', value)}>
                      <SelectTrigger className="border-2 focus:border-primary/50 transition-all duration-300">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-project">New Project</SelectItem>
                        <SelectItem value="redesign">Redesign/Rebuild</SelectItem>
                        <SelectItem value="enhancement">Feature Enhancement</SelectItem>
                        <SelectItem value="maintenance">Ongoing Maintenance</SelectItem>
                        <SelectItem value="consultation">Strategy Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Budget Range *</Label>
                    <Select value={formData.budget} onValueChange={(value: string) => handleInputChange('budget', value)}>
                      <SelectTrigger className="border-2 focus:border-primary/50 transition-all duration-300">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium">Timeline *</Label>
                  <Select value={formData.timeline} onValueChange={(value: string) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="border-2 focus:border-primary/50 transition-all duration-300">
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-medium">Services Needed * (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <motion.div 
                        key={service} 
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                        onClick={() => handleServiceToggle(service)}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Checkbox 
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="transition-all duration-300"
                        />
                        <Label 
                          htmlFor={service} 
                          className="text-sm cursor-pointer group-hover:text-primary transition-colors duration-300 flex-1"
                        >
                          {service}
                        </Label>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ scale: focusedField === 'projectDescription' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <Label htmlFor="projectDescription" className="text-sm font-medium">
                    Project Description *
                  </Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Describe your project in detail. What are you looking to build or improve? What are your main goals and challenges?"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    onFocus={() => setFocusedField('projectDescription')}
                    onBlur={() => setFocusedField(null)}
                    className="min-h-[140px] transition-all duration-300 focus:scale-105 focus:shadow-lg resize-none border-2 focus:border-primary/50"
                    required
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-6"
              >
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  size="lg"
                >
                  <motion.span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Consultation Request
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div 
                className="text-center space-y-3 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  We'll review your request and get back to you within 24 hours
                </div>
                <p className="text-xs text-muted-foreground">
                  🔒 All consultations are confidential and there's no obligation to proceed
                </p>
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}