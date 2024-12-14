"use client";
import React from "react";

const Input = ({
  name = "",
  type = "",
  label = "",
  value = "",
  handleChange = () => {},
  placeHolder = "",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
        name={name}
        type={type}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
