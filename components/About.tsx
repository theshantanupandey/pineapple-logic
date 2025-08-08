import { motion } from "framer-motion";

export function About() {
  const stats = [
    { value: "150+", label: "Projects" },
    { value: "10+", label: "Years" },
    { value: "98%", label: "Satisfaction" }
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building the Future of Digital Innovation
            </motion.h2>
            <div className="space-y-4 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                With over a decade of experience, we've helped hundreds of businesses 
                transform their digital presence and achieve sustainable growth.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our team of experts combines technical excellence with creative vision 
                to deliver solutions that exceed expectations.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: 1 + index * 0.2 
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="text-2xl font-medium mb-1 group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-muted rounded-lg p-8 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  />
                  <div className="flex-1">
                    <motion.div 
                      className="h-4 bg-border rounded w-3/4 mb-2 group-hover:bg-primary/30 transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.div 
                      className="h-3 bg-border rounded w-1/2 group-hover:bg-primary/30 transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(2)].map((_, colIndex) => (
                    <div key={colIndex} className="space-y-3">
                      {[...Array(3)].map((_, rowIndex) => (
                        <motion.div 
                          key={rowIndex}
                          className="h-3 bg-border rounded group-hover:bg-primary/30 transition-colors duration-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1.2 + (colIndex * 3 + rowIndex) * 0.1 
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <div className="h-32 bg-border rounded group-hover:bg-primary/30 transition-colors duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}