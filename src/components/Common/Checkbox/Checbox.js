const Checkbox = ({ label, name, checked, onChange, className = "", white }) => {
    return (
      <input
        type="checkbox"
        name={name}
        className={`rounded border-gray-300 focus:ring-0 checked:bg-dark-900 ${className}`}
        checked={checked}
        onChange={onChange}
      />
    );
  };

  export default Checkbox;