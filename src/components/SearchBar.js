import React, { useState, useEffect } from "react";
import { searchOptions, tagName, AllItems } from "../Data";
import { MdArrowDropDown } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
import Card from "./Card";
import Autosuggest from "react-autosuggest";

export default function SearchBar({ selectedCategory }) {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // Fetch filtered items based on the input length
        const fetchFilteredItems = () => {
            const inputValue = value.trim().toLowerCase();
            const inputLength = inputValue.length;
            if (selectedCategory === "All") {
                if (inputLength === 0) {
                    setFilteredItems(AllItems);
                }
                else {
                    const filteredItems = AllItems.filter((item) =>
                        item.feSearch.toLowerCase().includes(inputValue)
                    );
                    setFilteredItems(filteredItems);
                }

            }
            else if (inputLength === 0) {
                // If input is empty, show all items
                const categoryFilteredItems = AllItems.filter(item => item.feCategory === selectedCategory);
                setFilteredItems(categoryFilteredItems);
            }

            else {
                const filteredItems = AllItems.filter((item) =>
                    item.feSearch.toLowerCase().includes(inputValue) && item.feCategory === selectedCategory
                );
                setFilteredItems(filteredItems);
            }
            console.log("filteredItems", filteredItems)
        };

        fetchFilteredItems();
    }, [value, selectedCategory]);

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(() => getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: "Search the Creative World At Work",
        value,
        onChange: onChange,
    };

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        if (inputLength === 0) {
            return AllItems.map((item) => ({ feSearch: item.feSearch }));
        }

        const uniqueFeSearchValues = [
            ...new Set(AllItems.map((item) => item.feSearch.toLowerCase())),
        ];

        return uniqueFeSearchValues
            .filter(
                (feSearch) =>
                    feSearch.slice(0, inputLength) === inputValue ||
                    feSearch.startsWith(value.toLowerCase())
            )
            .map((feSearch) => ({ feSearch }));
    };

    const getSuggestionValue = (suggestion) => suggestion.feSearch;

    const renderSuggestion = (suggestion) => (
        <div
            className="p-1 cursor-pointer flex items-center justify-between px-10 transition duration-300 hover:bg-gray-100 hover:border-b-2 hover:border-[#333]"
            onClick={() => handleSuggestionClick(suggestion)}
        >
            <span className="text-md lg:text-lg text-[#222]">{suggestion.feSearch}</span>
        </div>
    );


    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion.feSearch);
        setSuggestions([]);
    };

    return (
        <>
            <div className="search-area p-5 relative">
                <div className="search-area flex items-center">

                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={{
                            ...inputProps,
                            className: "w-full lg:w-full outline-none border-2 rounded-full  truncate pl-5 py-2 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]",
                        }}
                        theme={{
                            container: "m-2 relative w-full",
                            input: "bg-transparent",
                        }}
                    />

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
            </div>

            <div className="hidden lg:block">
                <div className="behance-toools flex items-center justify-between pb-5 px-5">
                    <div className='flex items-center'>
                        {tagName.map((tools, index) => (
                            <div key={index} className="tools-item flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                                <div className="t-icon">
                                    {tools.tagsIcon}
                                </div>
                                <div className="tname px-2">
                                    <p className='text-sm font-bold'> {tools.tags}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Card items={filteredItems} />
        </>
    );
}
