"use client";
import React from "react";

const Input = ({
    name = '',
    type = '',
    label = '',
    value='',
    handleChange=()=>{ },
    placeHolder = ''

}) => {



    return (
        <div>
            <label>{label}</label>
            <input
                className="bg-zinc-100"
                name={name}
                type={type}
                value={value}
                onChange={(event)=>handleChange(event.target.value)}
                placeholder={placeHolder}
            />
        </div>
    )
}

export default Input;