"use client"
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation'
import React from 'react'
import sendMessage from "@/assets/LottieJSON/sendMessage.json"
import ContactForm from '@/components/ContactForm/ContactForm'

const Contact = () => {
    return (
        <div className="flex sm:flex-row flex-col-reverse min-h-screen w-screen items-center justify-around p-2" id="contact">
            <LottieAnimation animation={sendMessage} animationName={"sendMessage"} />
            <ContactForm />
        </div>
    )
}

export default Contact