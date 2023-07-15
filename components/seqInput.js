import React from "react";

export default function SeqInput({value, placeholder="", onChange, label, type="text"}) {
    
  return (
    <div class="mb-2">
      <label
        htmlFor="success"
        className="text-sm font-medium text-green-700 dark:text-green-500"
      >
        {label}
      </label>
      <input
        type={type}
        className="bg-slate-50 border py-3 px-2 min-w-full mx-2 uppercase border-blue-500 focus:border-blue-500 focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500">
        <span class="font-medium">Well done!</span> Invalid DNA Sequence
      </p> */}
    </div>
  );
}
