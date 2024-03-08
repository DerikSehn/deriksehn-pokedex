import { Button } from "@/components/ui/button";
import React from "react";
import { JSX } from "react/jsx-runtime";

const SearchInput = (inputProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {

    const [searchValue, setSearchValue] = React.useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }


    return (
        <div className="relative">
        <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Pesquisar"
        className="w-full px-10 py-1 transition-all text-rich_black-700 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-coquelicot-500 focus:border-transparent"
        {...inputProps}
        />
        <Button 
        className="absolute z-10 right-0 top-0 px-10 h-full rounded-r-xl bg-gunmetal-500 hover:bg-rich_black-800"
            type="submit" color="black" variant="destructive">
            <i className="material-icons text-white scale-150">search</i>
            </Button>
    </div>
    );
};

export default SearchInput;

