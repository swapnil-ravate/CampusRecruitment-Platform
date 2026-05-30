import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { useSelector } from 'react-redux'
const Hero = () => {
    const { user } = useSelector(state => state.user)



    return <>
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Grab Your Placement
                        <Typewriter
                            options={{
                                strings: [' As a Full Stack Developer', 'As Data Analyst', 'As a Data Scientist', 'As a Java Developer', 'As a PHP Developer',],
                                autoStart: true,
                                loop: true,
                                delay: 90,        // Time between each keystroke
                                deleteSpeed: 20,  // Speed of deleting characters
                                cursor: '|',      // Cursor character
                            }}
                        />

                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Explore tailored job opportunities from top companies. Your dream career awaits—start your journey now!</p>
                    {
                        user ?
                            <><Link to='/jobSection'> <button className='btn btn-primary'>Explore More</button></Link> </>
                            : <><a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Get started
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                                <Link to='/userLogin' className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    Login
                                </Link> </>
                    }
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-full h-full p-0 m-0">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Students on campus" className='h-full w-full object-cover rounded-3xl shadow-lg' />
                </div>
            </div>
        </section>
    </>
}

export default Hero