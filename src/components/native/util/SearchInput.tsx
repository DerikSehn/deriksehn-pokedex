/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { JSX } from "react/jsx-runtime";

const SearchInput = (inputProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {



    return (
        <div className="flex items-center border rounded-md">
            <span className="absolute material-icons px-4 text-slate-900">
                search
            </span>
            <input type="text"
                placeholder="Pesquisar"

                {...inputProps}
            />
        </div>
    );
};

export default SearchInput;

