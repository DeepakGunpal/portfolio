"use client"
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import React, { useState } from 'react'

const Experience = () => {
    const [hide, setHide] = useState(false)
    return (
        <PageWrapper>
            <div className='h-screen w-screen flex flex-col justify-center gap-8 mb-4' id="aboutme">
                <div className='flex justify-center mt-16'><h1 className='font-bold text-3xl tracking-wide'>About Me</h1></div>
                <div className={`flex sm:flex-row flex-col h-full sm:h-3/5 items-center justify-center p-2 sm:px-12 gap-6`}>
                    {/* aboutme */}
                    <div className={`card w-11/12 sm:w-full h-full sm:h-full flex flex-col gap-8 p-8 overflow-y-scroll bg-gradient-to-br from-pink-300 via-violet-400 to-blue-300`}>
                        <div className='flex flex-col gap-4 h-fit'>
                            <h2 className='text-2xl font-semibold'>From Commerce to Code: My Unconventional Journey into Tech</h2>
                            <h2 className='text-2xl font-semibold'>My Unique Path to Tech</h2>
                            <p className='text-lg'>
                                Hello, I&apos;m Deepak Gunpal, a software developer with a unique journey into the world of technology. While my academic background lies in commerce, my passion for innovation led me to embark on a captivating adventure.
                            </p>

                            <h2 className='text-2xl font-semibold'>Leaving Academics for Entrepreneurship</h2>
                            <p className='text-lg'>
                                In a bold move, I decided to leave college during my final year and abandoned my pursuit of a Chartered Accountancy degree to follow my entrepreneurial spirit. In 2021, I embarked on the challenging journey of starting a startup in the construction industry, with a vision to revolutionize the Indian residential construction space. However, as we delved deeper into the project, we realized that it demanded more resources than we had initially anticipated. Despite the challenges, this experience allowed me to gain invaluable insights into the behavior, motivation, and intricacies of contractors and laborers.
                            </p>

                            <h2 className='text-2xl font-semibold'>Pioneering Tech in Unexpected Places</h2>
                            <p className='text-lg'>
                                During this transformative year, I took on the role of managing our website, cavecreator.com, which was built using WordPress. This exposure to the tech world sparked a profound interest within me. In March 2022, I made a pivotal career shift by enrolling in a backend development bootcamp. Since then, I&apos;ve been on an exhilarating journey, finding immense satisfaction in coding and problem-solving. I&apos;m dedicated to honing my skills and contributing to the ever-evolving tech landscape.
                            </p>
                        </div>
                    </div>

                    {/* experience */}
                    <div className={`card w-11/12 sm:w-full h-full sm:h-full flex flex-col gap-4 p-8 overflow-y-scroll bg-gradient-to-br from-pink-300 via-violet-400 to-blue-300`}>
                        <h2 className='text-2xl font-semibold mb-4'>Experience</h2>
                        <div>
                            <p className='font-bold'>Jan 2023 - Present</p>
                            <h1 className='font-bold text-lg'>Software Developer @ MentorStudents.org</h1>
                            <p className='text-lg ml-4'>
                                Tech: JavaScript, React, Redux, Nodejs, Express, MongoDb, Nextjs, Chrome Extension, GitLab, Bootstrap, Prompt Engineering, Web Scrapping
                            </p>
                        </div>
                        <div>
                            <p className='font-bold'>Oct 2022 - Dec 2022</p>
                            <h1 className='font-bold text-lg'>Backend Development Freelance</h1>
                            <p className='text-lg ml-4'>
                                Tech: JavaScript, Nodejs, Express, MongoDb, Cloudinary, RazorPay Payment Integration, Digital Ocean
                            </p>
                        </div>
                        <div>
                            <p className='font-bold'>Mar 2022 - Sept 2022</p>
                            <h1 className='font-bold text-lg'>Backend Development Bootcamp</h1>
                            <p className='text-lg ml-4'>
                                Tech: JavaScript, React, Redux, Nodejs, Express, MongoDb, HTML, CSS, AWS S3
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}

export default Experience