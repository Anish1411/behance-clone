import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

export default function SearchPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div >
            <SearchBar selectedCategory={selectedCategory} />
            <Button onCategoryChange={handleCategoryChange} />
        </div>
    );
}
