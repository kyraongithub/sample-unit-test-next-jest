import React from 'react';

const Input = (props) => {
  const { value, onChange, placeholder, type, label } = props;
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      {label && <br />}
      {type === 'textarea' ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default Input;
