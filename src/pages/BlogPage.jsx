import React from 'react'

function BlogPage() {
  return (
    <div>
    <div className='overflow-x-hidden'>
      <article className='max-w-6xl p-5 m-auto leading-9 text-xl font-normal mt-20'>
        <a href="/" className=' text-blue-700 underline text-2xl'><span></span>Home</a>
        <h1 className=' lg:leading-[60px] text-4xl lg:text-6xl my-3'>
          The writings that comes right from the heart to the people. Enjoy! 
        </h1>
        <div className=' border-b border-b-slate-400 mb-10'>
          <div className='items-center justify-between md:flex '>
            <p>I am Michael👋, You are welcome.</p>
            <ul className='py-7 flex items-center'>
              <li className=' w-max px-2 py-1'>My Blog Space📚💼</li>
            </ul>
          </div>
        </div>
        <h3 className='text-2xl md:text-3xl'>
          <br/>
          Rescent Articles
        </h3>
        </article>
        <section className='max-w-6xl m-auto pt-10'>
        <ul className='grid grid-cols-1 sm:grid-cols-3'>
            <a href="https://mickerlcodes.hashnode.dev/the-web-and-how-it-works">
                <div className='mb-10 max-w-[400px] m-5 cursor-pointer '>
                    <img className='w-full rounded-md' src="Blog1.png" alt="" />
                    <h2 className='text-2xl my-3 font-medium mt-5'>The Web And How It Works🕸&zwj;👨‍💻</h2>
                    <p className=''>Here is what you need to kick start your web developer career today.</p>
                    <ul className='flex items-center flex-wrap mt-3'>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>web developer</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>interview</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>theweb</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>Frontend developer</span>
                    </ul>
                </div>
            </a>
            <a href="https://mickerlcodes.hashnode.dev/software-development-life-cyclesdlc">
                <div className='mb-10 max-w-[400px] m-5 cursor-pointer '>
                    <img className='w-full rounded-md' src="blog.png" alt="" />
                    <h2 className='text-2xl my-3 font-medium mt-5'>The software development life cycle 👨‍💻</h2>
                    <p className=''>Let's delve into problem-solving and the Software Development Life Cycle.</p>
                    <ul className='flex items-center flex-wrap mt-3'>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>webdev</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>software development</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>software engineering</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>devs operation</span>
                    </ul>
                </div>
            </a>
            {/*
            <a href="/">
                <div className='mb-10 max-w-[400px] m-5 cursor-pointer '>
                    <img className='w-full rounded-md' src="blog3.png" alt="" />
                    <h2 className='text-2xl my-3 font-medium mt-5'>If I Did It You Can Also Do It Too🥺&zwj;❤</h2>
                    <p className=''>Motivate yourself with my story here.You can do it.</p>
                    <ul className='flex items-center flex-wrap mt-3'>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>consistency</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>motivation</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>web development</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>Goddid</span>
                    </ul>
                </div>
            </a>
            <a href="/">
                <div className='mb-10 max-w-[400px] m-5 cursor-pointer '>
                    <img className='w-full rounded-md' src="blog4.png" alt="" />
                    <h2 className='text-2xl my-3 font-medium mt-5'>All You Need to Know About Documentation✍&zwj;📝</h2>
                    <p className=''>Did you know 70% of your work as a developer on the job is documentation?</p>
                    <ul className='flex items-center flex-wrap mt-3'>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>team work</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>technical writing</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>content creation</span>
                        <span className='tag text-[13px] rounded-md border m-2 ml-0 p-1 px-2 bg-[#dcdbe1] '>documentation</span>
                    </ul>
                </div>
            </a> */}
        </ul>
        </section>
        </div>
    </div>
  )
}

export default BlogPage