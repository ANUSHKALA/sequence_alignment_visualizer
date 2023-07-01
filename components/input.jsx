import React, {useState} from "react";


const Input = (props) => {

    const {handleKeyword} = props;

    return (
        <div>
            <input
                className="text-3xl font-bold border border-black"
                type="text"
                onChange={(e)=> handleKeyword(e.target.value)}
            />
        </div>
    );
}

export default Input;