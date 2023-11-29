import React from "react";
import './Home.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function App() {

    return (
        <div>
            <div className=" relative scroll-smooth select-none">
                <div className=" fixed flex items-center justify-center px-6 bottom-4 right-4 m-4 md:m-10 cursor-pointer p-3 text-xl rounded-3xl font-bold bg-blue-500 z-[20] ">
                    <span></span>
                    <p>🍦 Hire Me</p>
                </div>
                <header className="text-black mx-auto  md: lg:px-10 flex  justify-between z-10 px-6 h-[5rem] items-center relative top-0 bg-[#fff] sticky ">
                    <a href="/"><div className="">
                        <h2 className=" font-bold text-2xl uppercase tracking-wider ">Mickerl👋</h2>
                    </div></a>
                    <div className="flex items-center  gap-10 ">
                        <nav className="hidden lg:flex gap-x-10 text-[18px] font-semibold ">
                            <div className="navlink">
                                <a href="/"><p className="py-2">Home</p></a>
                            </div>
                            <div className="link">
                                <p className="py-2">
                                    <a href="/#About">About</a>
                                </p>
                            </div>
                            <div className="link">
                                <p className="py-2">
                                    <a href="/#Project">Project</a>
                                </p>
                            </div>
                            <div className="link">
                                <p className="py-2">
                                <a href="/#About">Blog</a>
                                </p>
                            </div>
                        </nav>
                        <a href="/" className="border border-blue-500 py-2 px-3"> Download CV</a>
                    </div>
                </header>
                <section className="max-w-7xl px-6 lg:px-4 mx-auto">
                    <section className="overflow-hidden lg:h-[100vh] flex flex-col lg:flex-row gap-4 mb-20 py-10 justify-evenly items-center ">
                        <div className="">
                            <img src="me.jpg" alt="" className="p-6 sm:w-[30rem] overflow-x-hidden rounded-full " />
                        </div>
                        <section className="w-full lg:w-[650px] flex flex-col gap-3 ">
                            <p className="font-semibold text-lg lg:text-xl opacity-60 ">Frontend Developer|Designer|Content Creator</p>
                            <h3 className="text-blue-500 text-4xl lg:text-5xl font-bold tracking-wider">Michael Owusu</h3>
                            <h3 className="md:text-xl text-[18px] font-medium">I am a prolific frontend developer and a designer with experience in the web development industry. I specialize in creating visually appealing and intuitive websites and mobile applications to deliver exceptional user experiences. I have a sharp eye for detail and am dedicated to turning your web vision into reality. </h3>
                            <div className=""></div>
                            <div className="flex gap-4 text-[16px] md:text-xl">
                                <a className=" border border-[#000] py-2 px-3 " href="/">Download CV</a>
                                <a href="/" className=" bg-[rgba(169,169,169,0.8)] py-[10px] px-6 hero-link" >Get In Touch</a>
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
                                        I have expertise in building engaging user interfaces and interactive experiences using HTML, CSS, and JavaScript. I am skilled in popular front-end frameworks like React and Next.js. I also have experience using Tailwind CSS and TypeScript. Additionally, I have a strong grasp of responsive design principles and ensuring compatibility across different browsers.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaLaptopCode /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Web Development</h2>
                                    <p className="md:text-lg">
                                        I have expertise in building engaging user interfaces and interactive experiences using HTML, CSS, and JavaScript. I am skilled in popular front-end frameworks like React and Next.js. I also have experience using Tailwind CSS and TypeScript. Additionally, I have a strong grasp of responsive design principles and ensuring compatibility across different browsers.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaLaptopCode /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Web Development</h2>
                                    <p className="md:text-lg">
                                        I have expertise in building engaging user interfaces and interactive experiences using HTML, CSS, and JavaScript. I am skilled in popular front-end frameworks like React and Next.js. I also have experience using Tailwind CSS and TypeScript. Additionally, I have a strong grasp of responsive design principles and ensuring compatibility across different browsers.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaLaptopCode /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Web Development</h2>
                                    <p className="md:text-lg">
                                        I have expertise in building engaging user interfaces and interactive experiences using HTML, CSS, and JavaScript. I am skilled in popular front-end frameworks like React and Next.js. I also have experience using Tailwind CSS and TypeScript. Additionally, I have a strong grasp of responsive design principles and ensuring compatibility across different browsers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="About" className=" w-full mb-20 py-10 snap-y scroll-mt-[6rem] ">
                        <h2 className="title relative w-max px-2 mb-3 font-semibold text-4xl ">About Me</h2>
                        <p className="align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ">
                            Tech is one thing I'm very passionate about,I love to learn new stuff. I was a bit late to programming tho buh I'm doing my best and I try to document my progress everyday by building new stuff. I craft stunning, intuitive websites and mobile apps that deliver exceptional user experiences. Turning your vision into reality on the web, one pixel at a time.
                            <br />
                            Tech is one thing I'm very passionate about,I love to learn new stuff. I was a bit late to programming tho buh I'm doing my best and I try to document my progress everyday by building new stuff. I craft stunning, intuitive websites and mobile apps that deliver exceptional user experiences. Turning your vision into reality on the web, one pixel at a time.
                            <br />
                            Tech is one thing I'm very passionate about,I love to learn new stuff. I was a bit late to programming tho buh I'm doing my best and I try to document my progress everyday by building new stuff. I craft stunning, intuitive websites and mobile apps that deliver exceptional user experiences. Turning your vision into reality on the web, one pixel at a time.
                        </p>
                    </section>
                    <section id="Project" className=" py-10 pb-20 snap-y scroll-mt-[6rem] ">
                        <h2 className="title relative w-max px-2 mb-3 font-semibold text-4xl">
                            Projects
                        </h2>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-20  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">
                                
                                <div className="w-full lg:w-[50%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px] ">The Movie Trailer Home</h3>
                                    <p>Movie App with Trailers:</p>
                                    <p className="mb-2 md:text-[17px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus quasi expedita totam alias molestiae incidunt eum reiciendis quia repellendus, delectus modi dicta maiores non sequi velit! Numquam, suscipit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum tempora, sit quae laudantium, explicabo quis eligendi commodi ut ducimus non atque numquam enim vero nesciunt, temporibus incidunt officiis perspiciatis?</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">ReactJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Firebase</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TmdbAPI</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                    </div>
                                    <div className="text-lg py-2 text-center bg-blue-500 rounded w-[150px] mt-2 text-white font-semibold ">Explore Project</div>
                                </div>
                                <div>
                                    <img className="rounded opacity-90 object-cover bg-contain w-full lg:w-[550px] h-[350px] lg:h-[420px] " src="tapflix.PNG" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-20  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[50%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">McKuleGraphics</h3>
                                    <p>Digital Agency:</p>
                                    <p className="mb-2 md:text-[17px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus quasi expedita totam alias molestiae incidunt eum reiciendis quia repellendus, delectus modi dicta maiores non sequi velit! Numquam, suscipit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum tempora, sit quae laudantium, explicabo quis eligendi commodi ut ducimus non atque numquam enim vero nesciunt, temporibus incidunt officiis perspiciatis?</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">NextJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Photoshop</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Nodemailer</p>
                                    </div>
                                    <div className="text-lg py-2 text-center bg-blue-500 rounded w-[150px] mt-2 text-white font-semibold ">Explore Project</div>
                                </div>
                                <div>
                                    <img className="rounded object-cover bg-contain w-full lg:w-[550px] h-[350px] lg:h-[420px] " src="tapflix.PNG" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-20  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[50%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Getlinked Landingpage</h3>
                                    <p>Getlinked Hackathon Project:</p>
                                    <p className="mb-2 md:text-[17px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus quasi expedita totam alias molestiae incidunt eum reiciendis quia repellendus, delectus modi dicta maiores non sequi velit! Numquam, suscipit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum tempora, sit quae laudantium, explicabo quis eligendi commodi ut ducimus non atque numquam enim vero nesciunt, temporibus incidunt officiis perspiciatis?</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">NextJs</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                    </div>
                                    <div className="text-lg py-2 text-center bg-blue-500 rounded w-[150px] mt-2 text-white font-semibold ">Explore Project</div>
                                </div>
                                <div>
                                    <img className="rounded object-cover bg-contain w-full lg:w-[550px] h-[350px] lg:h-[420px] " src="getlinked.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-20  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[50%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Pookie</h3>
                                    <p>The pet paradise:</p>
                                    <p className="mb-2 md:text-[17px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus quasi expedita totam alias molestiae incidunt eum reiciendis quia repellendus, delectus modi dicta maiores non sequi velit! Numquam, suscipit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum tempora, sit quae laudantium, explicabo quis eligendi commodi ut ducimus non atque numquam enim vero nesciunt, temporibus incidunt officiis perspiciatis?</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">ReactJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TheDogAPI</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TheCatAPI</p>
                                    </div>
                                    <div className="text-lg py-2 text-center bg-blue-500 rounded w-[150px] mt-2 text-white font-semibold ">Explore Project</div>
                                </div>
                                <div>
                                    <img className="rounded  object-cover bg-contain w-full lg:w-[550px] h-[350px] lg:h-[420px] " src="pookie.PNG" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-20  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[50%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Netflix Clone</h3>
                                    <p>Netflix Landingpage:</p>
                                    <p className="mb-2 xl:mb-5 md:text-[17px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus quasi expedita totam alias molestiae incidunt eum reiciendis quia repellendus, delectus modi dicta maiores non sequi velit! Numquam, suscipit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum tempora, sit quae laudantium,</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">NextJS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">TailwindCSS</p>
                                    </div>
                                    <div className="text-lg py-2 text-center bg-blue-500 rounded w-[150px] mt-2 xl:mt-5 text-white font-semibold ">Explore Project</div>
                                </div>
                                <div>
                                    <img className="rounded  object-cover bg-contain w-full lg:w-[550px] h-[350px] lg:h-[420px] " src="netflix.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-20  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">

                                <div className="w-full lg:w-[50%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">FB Clone</h3>
                                    <p>Frontend Application:</p>
                                    <p className="mb-2 xl:mb-5 md:text-[17px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptatibus quasi expedita totam alias molestiae incidunt eum reiciendis quia repellendus, delectus modi dicta maiores non sequi velit! Numquam, suscipit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum tempora,</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">HTML5</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">PureCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Javascript</p>
                                    </div>
                                    <a href="/" className="text-lg py-2 text-center bg-blue-500 rounded w-[150px] mt-2 xl:mt-5 text-white font-semibold ">Explore Project</a>
                                </div>
                                <div>
                                    <img className="rounded  object-cover bg-contain w-full lg:w-[550px] h-[350px] lg:h-[420px] " src="fb.png" alt="" />
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
                        </section>
                    </section>
                    <div className="mx-auto pt-20   flex text-center  gap-4 items-center justify-center flex-col">
                        <h2 className="text-[2.5rem] md:text-[5rem] font-semibold md:leading-[80px] ">
                            <div className="container mx-auto">
                                <div className=" flex flex-col  w-full">
                                    <h1 className=" masked  relative  font-bold bg-clip-text text-transparent ">
                                         I{" "}
                                        <span className=" relative element">
                                            <span className=" cursor-pointer">design</span>
                                            <span className="absolute z-[9999] custom-hover">
                                                adobe creative suite
                                            </span>
                                            <span className="absolute z-[9999] custom-hover">
                                                Photoshop
                                            </span>
                                            <span className="absolute z-[9999] text-white custom-hover">
                                                Branding,Web design
                                            </span>
                                        </span>{" "}
                                        and I{" "}
                                        <span className=" element">
                                            <span className="cursor-pointer">code</span>
                                            <span className="absolute z-[9999] text-white custom-hover">
                                                ReactJS/NextJS
                                            </span>
                                            <span className="absolute z-[9999] text-white custom-hover">
                                                web development
                                            </span>
                                            <span className="absolute z-[9999] text-white custom-hover">
                                                Frontend Development
                                            </span>
                                        </span>{" "}
                                        It here.
                                    </h1>
                                  <p className="text-sm opacity-[0.5] ">Hover over text for something nice.</p>
                                </div>
                            </div>
                        </h2>
                    </div>
                    
                </section>
                <footer >
                    <div className="py-36 flex flex-col items-center justify-center">
                    <div className='flex gap-6 pb-4'>
                        <a href='https://twitter.com/Mickerl_Codes' className=' text-2xl md:text-4xl  '><FaXTwitter /></a>
                        <a href='https://www.instagram.com/mickerl_codes/' className='text-2xl md:text-4xl  '><FaInstagram /></a>
                        <a href='mailto:nanayawwiafe007@gmail.com' className='text-2xl md:text-4xl '><MdOutlineMailOutline /></a>
                        <a href='https://www.linkedin.com/in/mickerl-codes/' className='text-2xl md:text-4xl'><FaLinkedinIn /></a>
                            <a href='mailto:nanayawwiafe007@gmail.com' className='text-2xl md:text-4xl '><FaGithub /></a>
                            <a href='https://www.linkedin.com/in/mickerl-codes/' className='text-2xl md:text-4xl '><FaYoutube /></a>
                    </div>
                    <a href='mailto:nanayawwiafe007@gmail.com'>nanayawwiafe007@gmail.com</a>
                    </div>
                    <div className='sm:text-md mx-auto mt-10 flex h-20 items-center justify-between border-t text-sm md:text-lg lg:text-xl px-1 '>
                        <p>Copyright @ 2023 |
                            <span className='text-brand font-bold text-red-600'>PORTFOLIO</span>
                        </p>
                        <p>Designed By:
                            <a href='https://twitter.com/Mickerl_Codes'>Mickerl_Codes</a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;