import React from "react";

const info = () => {
  return (
    <div className='m-1 mt-2 info container-2'>
      <h1 className='mb-0'>Personal info</h1>
      <p className='mt-1'>
        Please provide your name, email address, and phone number.
      </p>
      <form className='me-2'>
        <h6 className='info-p mb-0-5'>Name</h6>
        <input type='text' placeholder='e.g. Stephen King' className='input' />
        <h6 className='info-p mb-0-5 mt-1-5'>Email</h6>
        <input
          type='text'
          placeholder='e.g. stephenking@lorem.com'
          className='input'
        />
        <h6 className='info-p mb-0-5 mt-1-5'>Phone Number</h6>
        <input
          type='text'
          placeholder='e.g. +1 234 567 890'
          className='input'
        />
      </form>
    </div>
  );
};

export default info;
