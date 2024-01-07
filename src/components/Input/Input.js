import React from "react";

const Input = ({
  tag = "input",
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  options,
  className = "" // nowa prop
}) => {
  const Tag = tag;

  let style =
    "h-10 w-full font-normal text-sm text-grayLight mt-2 mb-5 flex items-center pl-3 rounded border border-grayLight outline-none transition-all  focus:border-blue-500 focus:outline-none";
  if (type === "checkbox") {
    style = " rounded border-gray-300 focus:ring-0 checked:bg-dark-900";
  }
  const handleSelectChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <>
      <label  
        htmlFor={label}
        className="text-sm font-bold leading-tight tracking-normal text-gray-700 dark:text-white mb-2 py-4" // Dodano margines
      >
        {label}
      </label>
      <div className="flex items-center border border-gray-300 rounded w-full bg-white "> 
        {Icon && 
          <div className="text-gray-600 px-4 border-r py-3">
            <Icon className="w-4 h-4" />
          </div>
        }
        {type === 'select' ? (
          <select
          name={name}
          className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full py-3 pl-2 text-sm border-gray-300 rounded ${className}`} // usunięto pl-16
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
          name={name}
          className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full py-3 pl-2 text-sm border-gray-300 rounded ${className}`} // usunięto pl-16
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        )}
      </div>
    </>
  );
};

export default Input;
