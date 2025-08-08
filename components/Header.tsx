import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useState } from "react";

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export function Header({ currentPath, navigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <motion.header 
      className="border-b border-border bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate("/")}
        >
          <motion.div 
            className="w-8 h-8 bg-primary rounded cursor-pointer flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-foreground text-sm">🍍</span>
          </motion.div>
          <span className="text-lg font-medium">Pineapple Logic</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className={`relative transition-colors ${
                currentPath === item.path 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
              {currentPath === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  layoutId="activeNav"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                whileHover={{ width: currentPath === item.path ? "0%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </Button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-foreground mb-1"
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-foreground mb-1"
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-foreground"
            />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        className="md:hidden border-t border-border bg-background"
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <motion.nav className="p-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className={`block w-full text-left transition-colors ${
                currentPath === item.path 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      </motion.div>
    </motion.header>
  );
}