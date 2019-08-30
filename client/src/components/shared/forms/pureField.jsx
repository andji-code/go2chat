import React from 'react'

const pureField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) => (
    <div>
  
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
  
    </div>
)

export default pureField; 