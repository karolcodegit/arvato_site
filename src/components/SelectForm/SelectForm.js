import React from 'react';

const SelectForm = ({ value, onChange, options, label }) => {
  return (
    <>
    {
      label && <label>{label}</label>
    }
    <select className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md" value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.title} value={option.title}>{option.title}</option>
      ))}
    </select>
    </>
  );
};

export default SelectForm;