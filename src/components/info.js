import React, { useEffect, useState } from "react";

const Info = ({ onInfoChange, userInfo }) => {
  const [userName, setUserName] = useState(userInfo.name);
  const [userEmail, setUserEmail] = useState(userInfo.email);
  const [userContact, setUserContact] = useState(userInfo.contact);
  const [error, setError] = useState({ class: "", msg: "" });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setUserName(value);
    } else if (name === "email") {
      setUserEmail(value);
    } else if (name === "contact") {
      setUserContact(value);
    }
  };

  const onBlurHandler = (event) => {
    const emailRegEx =
      /^[a-zA-Z0-9.a-zA-Z0-9/]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegEx = /^(\+)?(?:[0-9]|\s){6,14}$/;

    if (event.target.name === "name" && event.target.value === "") {
      setError({
        type: event.target.name,
        class: "input-invalid",
        msg: "This field is required",
      });
    } else if (event.target.name === "email") {
      if (event.target.value === "") {
        setError({
          type: event.target.name,
          class: "input-invalid",
          msg: "This field is required",
        });
      } else if (emailRegEx.test(event.target.value) === false) {
        setError({
          type: event.target.name,
          class: "input-invalid",
          msg: "Invalid input",
        });
      } else if (emailRegEx.test(event.target.value) === true) {
        setError({ class: "", msg: "" });
      }
    } else if (event.target.name === "contact") {
      if (event.target.value === "") {
        setError({
          type: event.target.name,
          class: "input-invalid",
          msg: "This field is required",
        });
      } else if (phoneRegEx.test(event.target.value) === false) {
        setError({
          type: event.target.name,
          class: "input-invalid",
          msg: "Invalid input",
        });
      } else if (phoneRegEx.test(event.target.value) === true) {
        setError({ class: "", msg: "" });
      }
    } else {
      setError({ class: "", msg: "" });
    }
  };

  useEffect(() => {
    onInfoChange(userName, userEmail, userContact);
    // eslint-disable-next-line
  }, [userName, userEmail, userContact]);

  return (
    <div className='m-1 mt-2 info container-2'>
      <h1 className='mb-0'>Personal info</h1>
      <p className='mt-1'>
        Please provide your name, email address, and phone number.
      </p>
      <form className='form-class'>
        <div className='d-flex-col'>
          <div className='d-flex space-between'>
            <h6 className='info-p mb-0-5 mt-1-5'>Name</h6>
            <h6 className='info-p mb-0-5 mt-1-5' style={errorMsg}>
              {error.type === "name" && error.msg}
            </h6>
          </div>
          <input
            type='text'
            name='name'
            placeholder='e.g. Stephen King'
            className={`input ${error.type === "name" && error.class}`}
            value={userName}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
        <div className='d-flex-col'>
          <div className='d-flex space-between'>
            <h6 className='info-p mb-0-5 mt-1-5'>Email</h6>
            <h6 className='info-p mb-0-5 mt-1-5' style={errorMsg}>
              {error.type === "email" && error.msg}
            </h6>
          </div>
          <input
            type='email'
            name='email'
            placeholder='e.g. stephenking@lorem.com'
            className={`input ${error.type === "email" && error.class}`}
            value={userEmail}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
        <div className='d-flex-col'>
          <div className='d-flex space-between'>
            <h6 className='info-p mb-0-5 mt-1-5'>Phone Number</h6>
            <h6 className='info-p mb-0-5 mt-1-5' style={errorMsg}>
              {error.type === "contact" && error.msg}
            </h6>
          </div>
          <input
            type='text'
            name='contact'
            placeholder='e.g. +1 234 567 890'
            className={`input ${error.type === "contact" && error.class}`}
            value={userContact}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
        </div>
      </form>
    </div>
  );
};

const errorMsg = {
  color: "hsl(354, 84%, 57%)",
};

export default Info;
