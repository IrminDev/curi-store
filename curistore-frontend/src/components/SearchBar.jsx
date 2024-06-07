import React from 'react'

const SearchBar = ({handleChange}) => {
    return (
        <div className="px mx-auto mb-4 w-full">
            <div className="relative">
                <input 
                type="text" 
                onChange={handleChange}
                placeholder="Buscar productos..." 
                className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:border-green-400 text-sm"
                aria-label="Buscar productos"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z"></path>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar