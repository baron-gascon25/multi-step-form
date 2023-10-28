import React from "react";

const InputCard = ({
  error,
  user,
  onChangeHandler,
  onBlurHandler,
  inputName,
  inputPlaceholder,
}) => {
  const name = inputName.charAt(0).toLowerCase() + inputName.slice(1);

  return (
    <div className='d-flex-col'>
      <div className='d-flex space-between'>
        <h6 className='info-p mb-0-5 mt-1-5'>{inputName}</h6>
        <h6 className='info-p mb-0-5 mt-1-5' style={errorMsg}>
          {error.type === name && error.msg}
        </h6>
      </div>
      <input
        type='text'
        name={name}
        placeholder={inputPlaceholder}
        className={`input ${error.type === name && error.class}`}
        value={user}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </div>
  );
};

const errorMsg = {
  color: "hsl(354, 84%, 57%)",
};

export default InputCard;
