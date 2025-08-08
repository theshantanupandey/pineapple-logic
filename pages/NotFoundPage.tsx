import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export function NotFoundPage({ navigate }: NotFoundPageProps) {
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          setTimeout(() => navigate("/"), 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    setIsRedirecting(true);
    setTimeout(() => navigate("/"), 300);
  };

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <Card className="p-12 md:p-16 border-2 border-dashed border-border hover:border-primary/30 transition-all duration-500 bg-background/80 backdrop-blur-sm relative overflow-hidden group">
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ rotate: -45, scale: 0 }}
              whileHover={{ rotate: 0, scale: 1.5 }}
              transition={{ duration: 0.8 }}
            />
            
            <div className="relative z-10">
              {/* 404 Number with animations */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-8xl md:text-9xl font-medium bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4"
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 100%"
                  }}
                >
                  404
                </motion.h1>
                
                {/* Animated pineapple emoji */}
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🍍
                </motion.div>
              </motion.div>

              {/* Error message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                  Oops! Page Not Found
                </h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto leading-relaxed">
                  Looks like this page took a vacation to a tropical island. 
                  Don't worry, we'll help you find your way back to the logical path!
                </p>
              </motion.div>

              {/* Interactive elements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      onClick={handleGoHome}
                      disabled={isRedirecting}
                      className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <motion.span className="relative z-10 flex items-center gap-3">
                        {isRedirecting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Redirecting...
                          </>
                        ) : (
                          <>
                            🏠 Take Me Home
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={() => navigate("/contact")}
                      className="text-lg px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group"
                    >
                      <motion.span className="flex items-center gap-2">
                        📞 Contact Support
                        <motion.span
                          className="group-hover:rotate-12 transition-transform duration-300"
                        >
                          ↗
                        </motion.span>
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>

                {/* Auto-redirect countdown */}
                <motion.div
                  className="bg-muted/50 rounded-lg p-4 border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-sm text-muted-foreground">
                    Don't want to wait? 
                    <motion.span 
                      className="inline-block ml-2 text-primary font-medium"
                      key={countdown}
                      initial={{ scale: 1.2, color: "var(--primary)" }}
                      animate={{ scale: 1, color: "var(--muted-foreground)" }}
                      transition={{ duration: 0.3 }}
                    >
                      Auto-redirecting in {countdown}s
                    </motion.span>
                  </p>
                  
                  {/* Progress bar */}
                  <motion.div 
                    className="w-full h-1 bg-border rounded-full mt-3 overflow-hidden"
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                      initial={{ width: "100%" }}
                      animate={{ width: `${(countdown / 10) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>

                {/* Quick links */}
                <motion.div
                  className="mt-8 pt-6 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <p className="text-sm text-muted-foreground mb-4">
                    Or explore these popular pages:
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      { label: "Services", path: "/services", icon: "⚡" },
                      { label: "Portfolio", path: "/portfolio", icon: "🎨" },
                      { label: "About", path: "/about", icon: "🍍" },
                      { label: "Contact", path: "/contact", icon: "📞" }
                    ].map((link, index) => (
                      <motion.button
                        key={index}
                        onClick={() => navigate(link.path)}
                        className="text-sm px-4 py-2 bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-300 flex items-center gap-2 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </span>
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}