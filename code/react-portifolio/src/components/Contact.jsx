import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const { portuguese } = useContext(LanguageContext);
  const [copied, setCopied] = useState(false);
  
  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  
  // Copy email to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  // Animation variants for consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="contact" className="border-b border-neutral-900 py-16 px-4 sm:px-6 md:px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <motion.h1 
          variants={fadeInUp}
          className="mb-8 text-center text-4xl md:text-5xl font-bold tracking-tight"
        >
          {portuguese ? "Entre em contato" : "Get in Touch"}
        </motion.h1>
        
        <motion.div 
          className="bg-neutral-900 bg-opacity-10 rounded-xl p-8 shadow-lg backdrop-blur-sm"
          variants={fadeInUp}
        >
          <motion.div className="flex flex-col space-y-6 items-center">
            {/* Phone Number */}
            <motion.div 
              className="flex items-center justify-center group w-full"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-neutral-900 hover:bg-opacity-5 transition-all duration-300 w-full max-w-md">
                <div className="bg-neutral-900 bg-opacity-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-sm opacity-70">{portuguese ? "Telefone" : "Phone"}</p>
                  <p className="font-medium tracking-tighter">{CONTACT.phoneNo}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Email */}
            <motion.div 
              className="flex items-center justify-center group w-full"
              variants={fadeInUp}
            >
              <div 
                onClick={() => copyToClipboard(CONTACT.email)}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-neutral-900 hover:bg-opacity-5 transition-all duration-300 cursor-pointer w-full max-w-md"
              >
                <div className="bg-neutral-900 bg-opacity-10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-sm opacity-70">Email</p>
                  <p className="font-medium tracking-tighter underline decoration-dotted">{CONTACT.email}</p>
                </div>
                <div className="transition-all duration-300">
                  {copied ? (
                    <span className="text-sm font-medium bg-green-500 text-white px-2 py-1 rounded">
                      {portuguese ? "Copiado!" : "Copied!"}
                    </span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-60 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
            
            {/* Call to action */}
            <motion.div 
              className="mt-6 w-full max-w-md text-center"
              variants={fadeInUp}
            >
              <p className="text-sm opacity-70 mb-4">
                {portuguese 
                  ? "Gostaria de uma resposta rápida?" 
                  : "Would you like a quick response?"}
              </p>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-opacity-80 transition-all duration-300"
              >
                {portuguese ? "Enviar email agora" : "Send email now"}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        
      
      </motion.div>
    </section>
  );
};

export default Contact;