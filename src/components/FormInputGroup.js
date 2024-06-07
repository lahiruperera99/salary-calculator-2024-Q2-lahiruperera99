import React from 'react'

function FormInputGroup({text ,placeholder, value, onInput, onkeyup, readOnly= false}) {
  return (
    <div className='input-group mb-3'>

    <span className='input-group-text'>{text}</span>
    <input type="number" 
    className='form-control' 
    placeholder={placeholder} 
    value={value} 
    onInput={onInput}
    onKeyUp={onkeyup}    
    readOnly={readOnly}
    />
      
    </div>
  )
}

export default FormInputGroup;
