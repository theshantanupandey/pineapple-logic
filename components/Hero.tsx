import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { 
      title: "⚡ Lightning Fast", 
      desc: "Optimized performance",
      delay: 0.2
    },
    { 
      title: "🎨 Beautiful Design", 
      desc: "Pixel-perfect interfaces",
      delay: 0.4
    },
    { 
      title: "🔒 Secure by Default", 
      desc: "Enterprise-grade security",
      delay: 0.6
    },
    { 
      title: "📱 Mobile First", 
      desc: "Responsive everywhere",
      delay: 0.8
    }
  ];

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
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
        
        {/* Interactive gradient that follows mouse */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{
            left: "-50%",
            top: "-50%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(120, 119, 198, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                ✨ Welcome to the Future of Digital Innovation
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span 
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Transforming
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 100%"
                }}
              >
                Ideas into
              </motion.span>
              <motion.span 
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Digital Reality
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We create cutting-edge digital solutions that combine logical thinking with 
              creative innovation to drive your business forward in the digital age.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
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
                  className="text-lg px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group"
                >
                  <motion.span className="flex items-center gap-2">
                    View Our Work
                    <motion.span
                      className="group-hover:rotate-45 transition-transform duration-300"
                    >
                      ↗
                    </motion.span>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center lg:text-left"
                >
                  <Card className="p-4 border-dashed hover:border-primary/30 hover:shadow-lg transition-all duration-300 group bg-background/50 backdrop-blur-sm">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Interactive Visual */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative w-96 h-96 mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              {/* Central element */}
              <motion.div
                className="absolute inset-16 bg-gradient-to-br from-primary to-primary/60 rounded-3xl shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                animate={{ 
                  boxShadow: [
                    "0 20px 40px rgba(0,0,0,0.1)",
                    "0 25px 50px rgba(120, 119, 198, 0.3)",
                    "0 20px 40px rgba(0,0,0,0.1)"
                  ]
                }}
              >
                <motion.span 
                  className="text-6xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🍍
                </motion.span>
              </motion.div>
              
              {/* Orbiting elements */}
              {[
                { icon: "💡", angle: 0, radius: 120, color: "from-yellow-400 to-orange-400" },
                { icon: "🎨", angle: 90, radius: 120, color: "from-pink-400 to-purple-400" },
                { icon: "⚡", angle: 180, radius: 120, color: "from-blue-400 to-cyan-400" },
                { icon: "🚀", angle: 270, radius: 120, color: "from-green-400 to-teal-400" },
              ].map((element, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-16 h-16 bg-gradient-to-br ${element.color} rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm`}
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: -32,
                    marginTop: -32,
                  }}
                  animate={{
                    rotate: [-element.angle, -element.angle + 360],
                    x: [
                      Math.cos((element.angle * Math.PI) / 180) * element.radius,
                      Math.cos(((element.angle + 360) * Math.PI) / 180) * element.radius,
                    ],
                    y: [
                      Math.sin((element.angle * Math.PI) / 180) * element.radius,
                      Math.sin(((element.angle + 360) * Math.PI) / 180) * element.radius,
                    ],
                  }}
                  transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                >
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [element.angle, element.angle - 360] }}
                    transition={{
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {element.icon}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}