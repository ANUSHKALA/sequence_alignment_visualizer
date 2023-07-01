import React, {useState} from "react";


const Input = (props) => {

    const {handleKeyword} = props;

    return (
        <div>
            <label className="text-gray-400 text-sm">{props.label}</label>
            <input
                type='text'
                className="flex h-10 text-2xl w-full uppercase font-bold rounded-md border border-input bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e)=> handleKeyword(e.target.value)}
            />
        </div>
    );
}

export default Input;