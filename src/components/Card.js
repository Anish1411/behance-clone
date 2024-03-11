import React from "react";
import { AllItems } from '../Data'
import { AiFillFolderOpen } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai';
import { AiTwotoneEye } from 'react-icons/ai';

export default function Card({ searchTerm }) {
    // console.log("searchTerm", searchTerm + " ");
    return (
        <>
            <div className="container-fluid px-6">

                <div className="grid md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 gap-5 py-5">
                    {
                        AllItems.map((item, index) => {

                            const matchesSearch =
                                item.feSearch.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.feSearch.toLowerCase().startsWith(searchTerm.toLowerCase());

                            // console.log("matchesSearch ", matchesSearch + " ")

                            // Check if the item matches the selected category (feCategory)
                            const matchesCategory =
                                item.feCategory.toLowerCase() === searchTerm.toLowerCase();

                            // console.log(" matchesCategory", matchesCategory + " ")

                            if (matchesSearch || matchesCategory) {
                                return (
                                    <div key={index} className="category-item cursor-pointer">
                                        <div className="cat-img relative overflow-hidden rounded-md">
                                            <img src={item.featureImg} alt={item.featureImg} />
                                            <div className="save-file flex items-center absolute cursor-pointer top-2 left-2 py-2 px-3 bg-black/50 rounded-full">
                                                <div className="s-icon text-white text-sm pr-1">
                                                    <AiFillFolderOpen />
                                                </div>
                                                <span className='text-white text-xs font-medium'>Save</span>
                                            </div>
                                        </div>
                                        <div className="cat-info flex justify-between py-3">
                                            <div className="cat-name  cursor-pointer">
                                                <h4 className='font-medium text-sm hover:underline leading-[15px] text-ellipsis'>{item.featureTxt}</h4>
                                                <span className='text-sm hover:underline'>{item.feUser}</span>
                                            </div>
                                            <div className="be-time flex">
                                                <div className="be-like flex mr-2">
                                                    <div className="li-icon text-[#959595] mr-1 mt-[2px]">
                                                        <AiFillLike />
                                                    </div>
                                                    <span className='text-sm font-medium text-[#959595]'>{item.feLike}</span>
                                                </div>
                                                <div className="be-watch flex mr-2">
                                                    <div className="wa-icon text-[#959595] mr-1 mt-[2px]">
                                                        <AiTwotoneEye />
                                                    </div>
                                                    <span className='text-sm font-medium text-[#959595]'>{item.feWatch}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return null;
                            }



                        }
                        )}
                </div>

            </div>
        </>
    )
}