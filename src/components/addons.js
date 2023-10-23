import React from "react";

const addons = () => {
  return (
    <div className='m-1 mt-2 plan container-2 container-adons'>
      <h1 className='mb-0'>Pick add-ons</h1>
      <p className='mt-1'>Add-ons help enhance your gaming experience.</p>
      <div className='card-adons d-flex-col'>
        <div className='card-adons-monthly d-flex mt-1 mb-1 me-1 ms-0'>
          <input type='checkbox' className='m-1' />
          <div className='card-text row-1'>
            <h6 className='h-plan' style={hColor}>
              Online service
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              Access to multiplayer games
            </p>
          </div>
          <p className='m-2'>+$1/mo</p>
        </div>
        <div className='card-adons-monthly d-flex me-1 ms-0'>
          <input type='checkbox' className='m-1' />
          <div className='card-text row-1'>
            <h6 className='h-plan' style={hColor}>
              Larger storage
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              Extra 1TB of cloud save
            </p>
          </div>
          <p className='m-2'>+$2/mo</p>
        </div>
        <div className='card-adons-monthly d-flex mt-1 mb-1 me-1 ms-0'>
          <input type='checkbox' className='m-1' />
          <div className='card-text row-1'>
            <h6 className='h-plan' style={hColor}>
              Customizable Profile
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              Custom theme on your profile
            </p>
          </div>
          <p className='m-2'>+$2/mo</p>
        </div>
      </div>
    </div>
  );
};

const hColor = {
  color: "hsl(213, 96%, 18%)",
};

const pSize = {
  fontSize: "14px",
};

export default addons;
