import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

export default function SearchPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="relative" >
            <SearchBar selectedCategory={selectedCategory} />
            <div className="absolute lg:top-28 lg:right-20 md:top-16 md:right-10 sm:top-16 sm:right-10 top-14 right-12">
                <Button onCategoryChange={handleCategoryChange} />
            </div>

        </div>
    );
}
