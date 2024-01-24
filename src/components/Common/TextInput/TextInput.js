import LabelInput from "../LabelInput/LabelInput";

const TextInput = ({
  type="text",
  label,
  tag,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  className = "",
  white,
  icon: Icon,
}) => {
  return (
    <div>
      <LabelInput label={label} white={white} />
      <div className={`flex items-center mt-2 border border-gray-300 rounded"`}>
        {Icon && (
          <div className="text-gray-600 px-4 border-r py-3">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          maxLength={maxLength}
          name={name}
          className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full py-3 pl-2 text-sm border-gray-300 rounded ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
