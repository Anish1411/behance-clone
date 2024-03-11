import React, { useState } from "react";
import { searchOptions, tagName, AllItems } from "../Data";
import { MdArrowDropDown } from 'react-icons/md';
import { IoSearchSharp } from 'react-icons/io5';
import Button from './Button';

export default function SearchBar({ onSearchChange }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter suggestions based on the input value
        const filteredItems = AllItems.filter(option =>
            option.feUser.toLowerCase().includes(value.toLowerCase()) ||
            option.feUser.toLowerCase().startsWith(value.toLowerCase())
        );


        setSuggestions(filteredItems);
        onSearchChange(value)
    };

    // const handleSuggestionClick = (suggestion) => {
    //     console.log("Selected suggestion:", suggestion);

    //     setSearchTerm(suggestion.feSearch);
    //     setSuggestions([]);
    //     onSearchChange(suggestion.feSearch);
    // };

    return (
        <>
            <div className="search-area p-5">
                <div className="search-area flex items-center">
                    <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                        <div className="input-box relative lg:w-full">
                            <input
                                type="text"
                                name=""
                                placeholder='Search the creative world at work'
                                className='bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#565555]'
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <div className="search-icon text-2xl text-[#1d1d1d] absolute top-[2px] left-4">
                                <IoSearchSharp />
                            </div>
                        </div>

                        <div className="tags-search bg-white px-4 py-3 border-l-2 ">
                            <ul className='flex items-center'>
                                <li className=' text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm'><a href="">Projects</a></li>
                                <div className="dt-arrow block lg:hidden">
                                    <MdArrowDropDown />
                                </div>
                                {
                                    searchOptions.map((tags) => (
                                        <li className='mx-1 font-medium text-sm py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]'><a href="">{tags.sItems}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* {suggestions.length > 0 && (
                        <div className="absolute top-full left-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg w-full z-10">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion.feSearch}
                                </div>
                            ))}
                        </div>
                    )} */}
                </div>

            </div>

            <div className="hidden lg:block">
                <div className="behance-toools flex items-center justify-between pb-5 px-5   ">
                    <div className='flex items-center'>
                        {tagName.map((tools) => (
                            <div className="tools-item flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                                <div className="t-icon">
                                    {tools.tagsIcon}
                                </div>
                                <div className="tname px-2">
                                    <p className='text-sm font-bold'> {tools.tags}</p>
                                </div>

                            </div>
                        ))}
                    </div>


                    <Button />



                </div>
            </div>

        </>
    )
}