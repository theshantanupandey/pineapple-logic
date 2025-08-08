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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be enhanced with Supabase integration
    console.log("Consultation form submitted:", formData);
  };

  const contactMethods = [
    {
      title: "Email Us",
      value: "hello@pineapplelogic.com",
      icon: "📧"
    },
    {
      title: "Call Us",
      value: "+1 (555) 123-4567",
      icon: "📞"
    },
    {
      title: "Visit Us",
      value: "San Francisco, CA",
      icon: "📍"
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
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Start Your Digital Transformation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project in detail. The more information you provide, the better we can understand your needs and provide a tailored solution.
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
                <Card className="p-6 text-center border-2 border-dashed border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 text-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {method.icon}
                  </motion.div>
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{method.value}</p>
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
          <Card className="p-8 border-2 border-dashed border-border hover:border-primary/30 transition-colors duration-500">
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-2">Free Consultation Request</h3>
                <p className="text-muted-foreground">Tell us about your vision and we'll help make it reality</p>
              </div>
              
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-lg border-b border-border pb-2">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    animate={{ scale: focusedField === 'firstName' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: focusedField === 'lastName' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    animate={{ scale: focusedField === 'company' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      placeholder="Your Company Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: focusedField === 'website' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label htmlFor="website">Current Website (if any)</Label>
                    <Input
                      id="website"
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      onFocus={() => setFocusedField('website')}
                      onBlur={() => setFocusedField(null)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-lg border-b border-border pb-2">Project Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger>
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

                  <div>
                    <Label>Budget Range *</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
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

                <div>
                  <Label>Timeline *</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Services Needed * (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={service} className="text-sm cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{ scale: focusedField === 'projectDescription' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Describe your project in detail. What are you looking to build or improve?"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    onFocus={() => setFocusedField('projectDescription')}
                    onBlur={() => setFocusedField(null)}
                    className="min-h-[120px] transition-all duration-300 focus:scale-105 resize-none"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button type="submit" className="w-full" size="lg">
                  Submit Consultation Request
                </Button>
              </motion.div>
              
              <motion.div 
                className="text-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xs text-muted-foreground">
                  We'll review your request and get back to you within 24 hours
                </p>
                <p className="text-xs text-muted-foreground">
                  All consultations are confidential and there's no obligation to proceed
                </p>
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}