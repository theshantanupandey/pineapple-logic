import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-medium tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Digital Solutions for Modern Businesses
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We craft innovative digital experiences that drive growth and transform your business vision into reality.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="hover:scale-105 transition-transform duration-200">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-200">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className="bg-muted rounded-lg p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div className="grid grid-cols-3 gap-4 mb-6">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="h-4 bg-border rounded group-hover:bg-primary/30 transition-colors duration-300"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  />
                ))}
              </motion.div>
              <div className="space-y-3">
                <motion.div 
                  className="h-6 bg-border rounded w-3/4 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                <motion.div 
                  className="h-4 bg-border rounded w-1/2 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
                <motion.div 
                  className="h-4 bg-border rounded w-2/3 mx-auto group-hover:bg-primary/30 transition-colors duration-300"
                  initial={{ width: 0 }}
                  animate={{ width: "66%" }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[...Array(2)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="h-20 bg-border rounded group-hover:bg-primary/30 transition-colors duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}