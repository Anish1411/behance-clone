import React, { useState } from 'react'
import SearchBar from '../SearchBar'
import Card from '../Card';

export default function MainPage() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (term) => {
        setSearchTerm(term);

    }



    return (
        <section className="mt-16 relative" >
            <SearchBar onSearchChange={handleSearchChange} />
            <Card searchTerm={searchTerm} />
        </section>
    )
}
