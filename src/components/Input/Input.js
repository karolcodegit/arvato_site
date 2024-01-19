import React from "react";

const Input = ({
  tag = "input",
  label,
  type,
  name,
  value,
  onChange,
  checked,
  placeholder,
  icon: Icon,
  options,
  maxLength,
  className = "",
  white
}) => {
  const Tag = tag;

  let style =
    "h-10 w-full font-normal text-sm text-grayLight mt-2 mb-5 flex items-center pl-3 rounded border border-grayLight outline-none transition-all focus:border-blue-500 focus:outline-none";
  if (type === "checkbox") {
    style = "rounded border-gray-300 focus:ring-0 checked:bg-dark-900";
  }
  const handleSelectChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <>
    <div>
      <label
        htmlFor={label}
        className={`text-sm leading-6 tracking-normal font-medium ${white ? 'text-white' : 'text-gray-500'}`}
      >
        {label}
      </label>
      <div
        className={`flex items-center mt-2 ${
          type !== "checkbox"
            ? "border border-gray-300 rounded"
            : ""
        } w-full bg-white shadow-sm`}
      >
        {Icon && (
          <div className="text-gray-600 px-4 border-r py-3">
            <Icon className="w-4 h-4" />
          </div>
        )}
        {type === "select" ? (
          <select
            name={name}
            className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full py-3 pl-2 text-sm border-gray-300 rounded ${className}`}
            value={value}
            onChange={handleSelectChange}
          
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <Tag
            type={type}
            maxLength={maxLength}
            name={name}
            className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full py-3 pl-2 text-sm border-gray-300 rounded ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            checked={checked}
            
          />
        )}
      </div>
      </div>
    </>
  );
};

export default Input;
