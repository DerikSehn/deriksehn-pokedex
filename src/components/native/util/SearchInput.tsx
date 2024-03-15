import { Button } from "@/components/ui/button";
import React from "react";
import { JSX } from "react/jsx-runtime";

const SearchInput = ({ onSearch, ...inputProps }: { onSearch?: () => any } & JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {

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
                placeholder="Search"
                className="w-full px-10 py-2 transition-all font-mont rounded-2xl focus:outline-none focus:ring-1 shadow-gunmetal-300 focus:shadow-gunmetal-700 shadow-2xl"
                {...inputProps}
            />
            <Button
                onClick={onSearch}
                className="absolute z-10 right-0 top-0 px-10 h-full rounded-r-xl bg-gunmetal-600 hover:bg-gunmetal-700 "
                type="submit" color="black" variant="destructive">
                <i className="material-icons text-white scale-150">search</i>
            </Button>
        </div>
    );
};

export default SearchInput;

