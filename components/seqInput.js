import React from "react";

export default function SeqInput({value, placeholder="", onChange, label, type="text", className}) {
    
  return (
    <div className="mb-2 mx-5">
      <label
        htmlFor="success"
        className="absolute pb-5 text-sm font-medium text-green-700 dark:text-green-500"
      >
        {label}
      </label>
      <input
        type={type}
        className={className?
            className:
            "mt-5 bg-slate-50 border py-3 px-2  min-w-full mx-2 uppercase border-blue-500 focus:border-blue-500 focus:ring-0"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
