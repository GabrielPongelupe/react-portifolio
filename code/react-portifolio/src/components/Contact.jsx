import { useState, useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { CONTACT } from "../constants"
import { motion } from "framer-motion";



const Contact = () => {

  const {portuguese, togglePortuguese} = useContext(LanguageContext)

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{opacity: 1, y: 0}}
      initial= {{y: -100, opacity: 0}}
      transition={{duration: 0.5}}
      className="my-12 text-center text-4xl">{portuguese ? "Entre em contato" : "Get in Touch"}</motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial= {{x: 100, opacity: 0}}
        transition={{duration: 1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>

        <a href="#" className="my-4 underline ">
          <motion.p
           whileInView={{opacity: 1, x: 0}}
           initial= {{x: -100, opacity: 0}}
           transition={{duration: 1}}
          >
            {CONTACT.email}
            
          </motion.p>
        </a>
      </div>
    </div>
  )
}

export default Contact