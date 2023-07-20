import React from "react";

export default function SeqInput({value, placeholder="", onChange, label, type="text", className}) {
    
  return (
    <div className="mb-4 mx-5">
      <label
        className="absolute pb-6 text-base px-2 font-medium text-emerald-900"
      >
        {label}
      </label>
      <input
        type={type}
        className={className?
            className:
            "mt-5 bg-slate-50 border py-3 px-2  min-w-full mx-2 uppercase border border-emerald-800"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
