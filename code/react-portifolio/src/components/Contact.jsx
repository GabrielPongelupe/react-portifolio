import { useState, useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { CONTACT } from "../constants"



const Contact = () => {

  const {portuguese, togglePortuguese} = useContext(LanguageContext)

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-12 text-center text-4xl">{portuguese ? "Entre em contato" : "Get in Touch"}</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="my-4 underline ">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact