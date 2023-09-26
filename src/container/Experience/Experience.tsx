"use client"
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import React, { useState } from 'react'
import Projects from '@/container/Projects/Projects'

const Experience = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <PageWrapper>
            <div className='h-screen w-screen flex flex-col justify-center gap-8' id="experience">
                <div className='flex justify-center mt-16'><h1 className='font-bold text-3xl tracking-wide'>{isOpen ? "Projects" : "Experience"}</h1></div>
                <div className={`flex sm:flex-row flex-col-reverse h-3/5 items-center ${isOpen ? "justify-center" : "justify-around"} p-2 gap-6`}>
                    <div className={`card w-1/3 h-full flex flex-col gap-4 p-8 overflow-y-scroll ${isOpen ? "hidden" : ""}`}>
                        <div>
                            <p className='font-bold'>Jan 2023 - Present</p>
                            <h1 className='font-bold text-lg'>Software Developer @ MentorStudents.org</h1>
                            <p className='text-lg ml-4'>Tech : JavaScript, React, Redux, Nodejs, Express, MongoDb, Nextjs, Chrome Extension, GitLab, Bootstrap, Prompt Engineering, Web Scrapping</p>
                        </div>
                        <div>
                            <p className='font-bold'>Oct 2022 - Dec 2022</p>
                            <h1 className='font-bold text-lg'>Backend Developement Freelance</h1>
                            <p className='text-lg ml-4'>Tech : JavaScript, Nodejs, Express, MongoDb, Cloudinary, RazorPay Payment Integration, Digital Ocean</p>
                        </div>
                        <div>
                            <p className='font-bold'>Mar 2022 - Sept 2022</p>
                            <h1 className='font-bold text-lg'>Backend Development Bootcamp</h1>
                            <p className='text-lg ml-4'>Tech : JavaScript, React, Redux, Nodejs, Express, MongoDb, HTML, CSS, AWS S3</p>
                        </div>
                    </div>
                    <Projects isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Experience