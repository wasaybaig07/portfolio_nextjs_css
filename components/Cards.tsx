import React from 'react'

function Cards() {
  return (
    <div>
      <div>
        <section className='md:h-3/5 flex items-center text-gray-600'>
           <div className='container px-5 py-24 mx-auto'>
             <div className='text-center md-12'>
               <h1 className='text-4xl md:text-6xl text-gray-700 font-semibold'>
                  A few projects of mine! 
               </h1>
               <div data-aos="zoom-in" className='flex flex-wrap m-4'>
                  <div  className='p-4 sm:w-1/2 lg:w-1/3'>
                     <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src="https://picsum.photos/id/188/720/400" alt="image" className='lg:h-72 md:h-48 w-full object-cover object-center' />
                        <div className='p-6 hover:bg-purple-600 hover:text-white transition duration-300  ease-in'>
                             <h2 className='text-base font-medium text-indigo-300 mb-1'>Published on October 2024</h2>
                             <h1 className='text-2xl font-semibold mb-3'>Weather app</h1>
                             <p className='leading-relaxed mb-3'>Weather App made by using Next.js ,<br /> TypeScript , HTML and Tailwind CSS <br />
                             Enter your city name and <br /> get the weather update!</p>
                             <div className='flex items-center flex-wrap'>
                                 <a href="#" className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
                                    Read More
                                </a> 
                             </div>
                        </div>
                     </div>
                  </div>  
                  <div data-aos="zoom-in" className='p-4 sm:w-1/2 lg:w-1/3' >
                     <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src="https://picsum.photos/id/188/720/400" alt="image" className='lg:h-72 md:h-48 w-full object-cover object-center' />
                        <div className='p-6 hover:bg-purple-600 hover:text-white transition duration-300  ease-in'>
                             <h2 className='text-base font-medium text-indigo-300 mb-1'>Published on October 2024</h2>
                             <h1 className='text-2xl font-semibold mb-3'>Simple Calculator</h1>
                             <p className='leading-relaxed mb-3'>Simple Calculator App made by using Next.js ,<br /> TypeScript , HTML and Tailwind CSS <br />
                             Enter two numbers and <br /> get an output for different operations!</p>
                             <div className='flex items-center flex-wrap'>
                                <a href="#" className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
                                    Read More
                                </a>
                             </div>
                        </div>
                     </div>
                  </div>  
                  <div data-aos="zoom-in" className='p-4 sm:w-1/2 lg:w-1/3' >
                     <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src="https://picsum.photos/id/188/720/400" alt="image" className='lg:h-72 md:h-48 w-full object-cover object-center' />
                        <div className='p-6 hover:bg-purple-600 hover:text-white transition duration-300  ease-in'>
                             <h2 className='text-base font-medium text-indigo-300 mb-1'>Published on October 2024</h2>
                             <h1 className='text-2xl font-semibold mb-3'>Birthday wish app</h1>
                             <p className='leading-relaxed mb-3'>Birthday wish App made by using Next.js ,<br /> TypeScript , HTML and Tailwind CSS <br />
                              Enter your age and <br /> get a wish for your age!
                             </p>
                             <div className='flex items-center flex-wrap'>
                                <a href="#" className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
                                    Read More
                                </a>
                             </div>
                        </div>
                     </div>
                  </div>  
               </div>
                </div>
              </div>
           </section>
       </div>   
    </div>
  )
}

export default Cards