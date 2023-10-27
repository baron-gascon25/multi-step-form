import React from "react";

import thankyou from "../images/icon-thank-you.svg";

const endMessage = () => {
  return (
    <div className='container-3 end-msg center-item justify-content-center'>
      <img
        src={thankyou}
        height={80}
        width={80}
        alt='thank you message'
        className='m-0 mb-1 i-mob'
      />
      <h1 className='mb-0-5 mt-0-5 p-center h-mob'>Thank you!</h1>
      <p className='me-1 ms-1 mt-0-5 p-center p-mob' style={pStyling}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

const pStyling = {
  lineHeight: "1.6",
};

export default endMessage;
