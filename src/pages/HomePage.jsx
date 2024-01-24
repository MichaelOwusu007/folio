import React from "react";
import './Home.css'
import { FaLaptopCode } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbWriting } from "react-icons/tb";
import Footer from "../components/Footer"


function App() {

    return (
        <div>
            <div className=" relative scroll-smooth select-none">
                <div className=" fixed flex items-center justify-center px-6 bottom-4 right-4 m-4 md:m-10 cursor-pointer p-3 text-xl rounded-3xl font-bold bg-blue-500 z-[20] ">
                    <span></span>
                    <a href="mailto:michaelowusuwiafe007@gmail.com"><p>🍦 Hire Me</p></a>
                </div>
                <header className="text-black mx-auto  md: lg:px-10 flex  justify-between z-10 px-4 h-[5rem] items-center top-0 bg-[#fff] sticky ">
                    <a href="/"><div className="">
                        <h2 className=" font-bold text-2xl uppercase tracking-wider ">Mickerl👋</h2>
                    </div></a>
                    <div className="flex items-center  gap-8 sm:gap-10 ">
                        <nav className="flex gap-x-8 text-[18px] font-semibold ">
                            <div className="navlink hidden lg:flex">
                                <a href="/"><p className="py-2">Home</p></a>
                            </div>
                            <div className="link hidden lg:flex">
                                <p className="py-2">
                                    <a href="/#About">About</a>
                                </p>
                            </div>
                            <div className="link hidden lg:flex">
                                <p className="py-2">
                                    <a href="/#Project">Project</a>
                                </p>
                            </div>
                            <div className="link flex">
                                <p className="py-2 underline sm:no-underline">
                                    <a href="Blog">Blog</a>
                                </p>
                            </div>
                        </nav>
                        <a href="mickerl_codes.pdf" className="border border-blue-500 py-2 px-3"> Download CV</a>
                    </div>
                </header>
                <section className="max-w-7xl px-6 lg:px-4 mx-auto">
                    <section className="overflow-hidden lg:h-[100vh] flex flex-col lg:flex-row gap-4 mb-20 py-10 justify-evenly items-center ">
                        <div className="">
                            <img src="me2.jpg" alt="" className="p-6 sm:w-[30rem] overflow-x-hidden rounded-full " />
                        </div>
                        <section className="w-full lg:w-[650px] flex flex-col gap-3 ">
                            <p className="font-semibold text-lg lg:text-xl opacity-60 ">Frontend Developer | Designer </p>
                            <h3 className="text-blue-500 text-4xl lg:text-5xl font-bold tracking-wider">Michael Owusu</h3>
                            <h3 className="md:text-xl text-[18px] font-medium">As a dedicated front-end software developer. I specialize in creating websites and web applications, combining technical expertise with an aptitude for design. My proficiency extends to crafting user-friendly interfaces and ensuring seamless functionality.I have a sharp eye for detail and am dedicated to turning your web vision into reality.With a passion for innovation, I leverage my front-end skills to transform ideas into impactful digital
                            experiences. I thrive in collaborative environments and continuously seek opportunities to enhance my skills.</h3>
                            <div className=""></div>
                            <div className="flex gap-4 text-[16px] md:text-xl">
                            <a className=" border border-[#000] py-2 px-3 " href="mickerl_codes.pdf">Download CV</a>
                            <a href="mailto:michaelowusuwiafe007@gmail.com" className=" bg-[rgba(169,169,169,0.8)] py-[10px] px-6 hero-link" >Get In Touch</a>
                            </div>
                        </section>
                    </section>
                    <section className="mb-20">
                        <h2 className="title w-max px-2 mb-3 font-semibold relative text-4xl">My Work</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                        <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaLaptopCode /></i> </div>
                        <div>
                         <h2 className="text-xl font-semibold">Web Development</h2>
                                    <p className="md:text-lg">
                                        Dedicated to crafting compelling and user-friendly interfaces through expert use of HTML, CSS, and JavaScript. Specialized proficiency in developing visually appealing and responsive websites, with expertise in popular front-end frameworks such as React and Next.js. Adept in utilizing Tailwind CSS for streamlined styling. Committed to implementing responsive design principles and ensuring seamless compatibility across various browsers.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaCode /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Problem Solving</h2>
                                    <p className="md:text-lg">
                                        I approach challenges methodically, employing analytical thinking and a solutions-oriented mindset to deliver effective outcomes. Additionally, my effective communication skills extend beyond code, fostering open and collaborative dialogue with team members and stakeholders. This ensures a holistic approach to delivering exceptional user experiences while maintaining clear and transparent communication throughout the development process
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><MdOutlineDesignServices /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">UI/UX Design</h2>
                                    <p className="md:text-lg">
                                        Enhancing user satisfaction by improving the usability, accessibility, and overall visual appeal of digital interfaces. Integrating design principles into front-end development projects. While I may not be a professional designer, rest assured that I bring a strong design sensibility to the table. Allow me to contribute to your next project. I am confident in my ability to deliver impactful design solutions with dedication and skill.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><TbWriting /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Technical Writing</h2>
                                    <p className="md:text-lg">
                                        Proficient in translating intricate technical details into accessible and clear communication. Leveraging advanced writing skills to produce comprehensive documentation, user-friendly guides, and insightful articles that contribute to a deeper understanding of software development. Experienced in distilling complex concepts into digestible content for diverse audiences, fostering effective knowledge transfer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="About" className=" w-full mb-20 py-10 snap-y scroll-mt-[6rem] ">
                        <h2 className="title relative w-max px-2 mb-3 font-semibold text-4xl ">About Me</h2>
                        <p className="align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ">

                            I have a strong passion for technology and thrive on constantly learning new things. Every day, I make it a point to document my progress by creating and building new projects. My expertise lies in crafting visually appealing and user-friendly websites and web applications. I take pride in translating visions into web realities, paying attention to every pixel.
                            <br />
                            As a frontend developer, I am dedicated to creating seamless and intuitive user experiences. Design is not just a task for me; it's a form of problem-solving that I enjoy immensely. I believe in simplicity but strive for perfection in every project I undertake. My journey in the tech industry is driven by a love for building innovative solutions and solving problems.
                            <br />
                            Beyond coding, I find inspiration in music and in playing basketball. These are not just hobbies for me; they contribute to my creative thinking and problem-solving skills. The decision to join the tech industry was fueled by my passion for building new things and the joy I find in overcoming challenges. In essence, simplicity, perfection, and a love for problem-solving define my approach to both technology and life.
                        </p>
                    </section>
                    <section id="Project" className=" py-10 pb-20 snap-y scroll-mt-[6rem] ">
                        <h2 className="title relative w-max px-2 mb-3 font-semibold text-4xl">
                            Projects
                        </h2>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px] ">The Movie Trailer Home</h3>
                                    <p>Movie App with Trailers:</p>
                                    <p className="mb-2  md:text-[17px] ">A movie trailer application i built using React, TMDB API and firebase for user authentication and data storage. Implemented dynamic content fetching, displaying movie details, search movie functionality and streaming trailers.</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">ReactJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Firebase</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TmdbAPI</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                    </div>
                                    <a href="https://taptapflix.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded opacity-90 object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="tapflix.jpg" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">McKuleGraphics</h3>
                                    <p>Digital Agency:</p>
                                    <p className="mb-2 md:text-[17px] "> A freelancing project developed using Next.js and TypeScript, ensuring a performant and scalable web solution.Integrated Nodemailer for seamless user communication, allowing easy inquiries to the company. Applied Tailwind CSS for a responsive user interface.</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">NextJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">JavaScript</p>

                                    </div>
                                    <a href="https://mckulegraphix.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded object-cntain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="freelence.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Getlinked Landingpage</h3>
                                    <p>Getlinked Hackathon Project:</p>
                                    <p className="mb-2 md:text-[17px] ">Used Next.js and Tailwind CSS for a polished and visually appealing user interface. Seamlessly blended functionality with visuals to create an engaging and informative platform. The result was a visually compelling and user-friendly landing page.</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">NextJs</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                    </div>
                                    <a href="https://getlinked-liard.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] opacity-90 " src="getlinked.jpg" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Pookie</h3>
                                    <p>The pet paradise:</p>
                                    <p className="mb-2 md:text-[17px] "> Created an interactive ReactJS application, ”Pookie,” integrating Dog API and the Cat API.Implemented a unique temperament matching feature, providing users with personalized pet suggestions. </p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">ReactJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TheDogAPI</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TheCatAPI</p>
                                    </div>
                                    <a href="https://pookie-liard.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded  object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="pookie.jpg" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Netflix Clone</h3>
                                    <p>Netflix Landingpage:</p>
                                    <p className="mb-2 md:text-[17px] ">Demonstrated attention to detail in replicating visual elements, layout and proficiency in front-end development.As the sole contributor to this project, I undertook the challenge of building the Netflix landing page clone from scratch using Next.js and tailwind CSS.</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">NextJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                    </div>
                                    <a href="https://netflixreplica.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded  object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="netflix.jpg" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">FB Clone</h3>
                                    <p>Frontend Application:</p>
                                    <p className="mb-2  md:text-[17px] ">Built with html, pure CSS and vanilla JavaScript.Developed the front-end of Facebook web application. Applied design principles to create an interface that mirrors the look and feel of the Facebook platform.</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">HTML5</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">PureCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Javascript</p>
                                    </div>
                                    <a href="https://supbook.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded  object-cover bg-contain w-full lg:w-[600px]" src="fb.png" alt="fbclone" />
                                </div>
                            </section>
                        </div>
                    </section>

                    <section className=" w-full mb-20 py-10 snap-y scroll-mt-[7.5rem] ">
                        <h2 className=" title relative w-max px-2 mb-3 font-semibold text-4xl">Tech Stack</h2>
                        <section className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-xl mt-10">
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">HTML5</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">CSS</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">TailwindCSS</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">RectJS</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">NextJS</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Git git</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Redux</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Firebase</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Photoshop</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Javascript</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Typescript</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">AdobeXd</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Figma</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Flutter</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Express</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Phython</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">NodeJS</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">MangoDb</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">React Native</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'">
                                <p className="px-2">Sass</p>
                                <i></i>
                            </div>
                        </section>
                    </section>
                    <div className="mx-auto pt-20   flex text-center  gap-4 items-center justify-center flex-col">
                        <h2 className="text-[2.5rem] md:text-[5rem] font-semibold md:leading-[80px] ">
                            <p>I  <span className="hero-h1-gradient">DESIGN</span> AND I <span className="hero-h1-gradient">CODE</span> IT HERE</p>
                        </h2>
                    </div>
                </section>
               <Footer/>
            </div>
        </div>
    );
}

export default App;