import React from 'react'
import { adobeLogo } from '../../Data'
import { behance_logo } from '../../Data'

export function Footer() {
    return (
        <section className=' py-3 w-full bottom-0 bg-gray-500 text-white mt-2'>
            <div className="container mx-auto ">
                {/* left side */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-3 ">
                    <div className="px-5 lg:col-span-1 py-4">
                        <img src={behance_logo} className="w-25 h-14"></img>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:col-span-2 px-4 mt-3">

                        {/* Column 1 */}
                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-4">Built For Creatives</h2>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Find Inspiration
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Get Hired
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Sell Creative Assets
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Sell Freelance Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-4">Find Talent</h2>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Post a job
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Graphic Designers
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Photographers
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Video Editors
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-4">Behance</h2>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        About Behance
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Portfolio
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Carrer
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-4">Social</h2>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm hover:text-gray-500">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-black pt-4">
                    <div className="adobe-btn mx-4 flex items-center justify-between hover:opacity-70">
                        <div className='flex'>
                            <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                            <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                        </div>

                        <p className="text-sm ">
                            &copy; 2024 Your Company. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </section >
    )
}


