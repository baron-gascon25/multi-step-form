import React, { useEffect, useState } from "react";
import InputCard from "./InputCard";

const INPUT_NAME = "Name";
const INPUT_NAME_PLACEHOLDER = "e.g. Stephen King";

const INPUT_EMAIL = "Email";
const INPUT_EMAIL_PLACEHOLDER = "e.g. stephenking@lorem.com";

const INPUT_CONTACT = "Contact";
const INPUT_CONTACT_PLACEHOLDER = "e.g. +1 234 567 890";

const Info = ({ onInfoChange, userInfo, noInputSubmit }) => {
  const [userName, setUserName] = useState(userInfo.name);
  const [userEmail, setUserEmail] = useState(userInfo.email);
  const [userContact, setUserContact] = useState(userInfo.contact);
  const [error, setError] = useState({
    type: "",
    class: "",
    msg: "",
  });

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
    if (noInputSubmit !== "") {
      if (noInputSubmit === "name" && userName === "") {
        setError({
          type: noInputSubmit,
          class: "input-invalid",
          msg: "This field is required",
        });
      } else if (noInputSubmit === "email" && userEmail === "") {
        setError({
          type: noInputSubmit,
          class: "input-invalid",
          msg: "This field is required",
        });
      } else if (noInputSubmit === "contact" && userContact === "") {
        setError({
          type: noInputSubmit,
          class: "input-invalid",
          msg: "This field is required",
        });
      }
    }
    // eslint-disable-next-line
  }, [userName, userEmail, userContact, noInputSubmit]);

  return (
    <div className='m-1 mt-2 info container-2'>
      <h1 className='mb-0'>Personal info</h1>
      <p className='mt-1'>
        Please provide your name, email address, and phone number.
      </p>
      <form className='form-class'>
        <InputCard
          error={error}
          user={userName}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          inputName={INPUT_NAME}
          inputPlaceholder={INPUT_NAME_PLACEHOLDER}
        />
        <InputCard
          error={error}
          user={userEmail}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          inputName={INPUT_EMAIL}
          inputPlaceholder={INPUT_EMAIL_PLACEHOLDER}
        />
        <InputCard
          error={error}
          user={userContact}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          inputName={INPUT_CONTACT}
          inputPlaceholder={INPUT_CONTACT_PLACEHOLDER}
        />
      </form>
    </div>
  );
};

export default Info;
