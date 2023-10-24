import React, { useState } from "react";

const Addons = ({ billing, onClickAdons, adOns }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const setAdons = (adons) => {
    onClickAdons([...adOns, adons]);
  };

  const isCheckedHandler = (bool, ad) => {
    if (bool === false) {
      setAdons(ad);
      setIsChecked(true);
    } else {
      const index = adOns.findIndex((a) => a === ad);
      adOns.splice(index, 1);
      setIsChecked(false);
    }
  };

  const isCheckedHandler2 = (bool, ad) => {
    if (bool === false) {
      setAdons(ad);
      setIsChecked2(true);
    } else {
      const index = adOns.findIndex((a) => a === ad);
      adOns.splice(index, 1);
      setIsChecked2(false);
    }
  };

  const isCheckedHandler3 = (bool, ad) => {
    if (bool === false) {
      setAdons(ad);
      setIsChecked3(true);
    } else {
      const index = adOns.findIndex((a) => a === ad);
      adOns.splice(index, 1);
      setIsChecked3(false);
    }
  };

  console.log(adOns);

  return (
    <div className='m-1 mt-2 plan container-2 container-adons'>
      <h1 className='mb-0'>Pick add-ons</h1>
      <p className='mt-1'>Add-ons help enhance your gaming experience.</p>
      <div className='card-adons d-flex-col'>
        <div className='card-adons-monthly d-flex mt-1 mb-1 me-1 ms-0'>
          <input
            type='checkbox'
            className='m-1'
            onClick={() =>
              isChecked === false
                ? isCheckedHandler(false, "Online service")
                : isCheckedHandler(true, "")
            }
          />
          <div className='card-text row-1'>
            <h6 className='h-plan' style={hColor}>
              Online service
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              Access to multiplayer games
            </p>
          </div>
          <p className='m-2'>{`${
            billing === "Monthly" ? "+$1/mo" : "+$10/yr"
          }`}</p>
        </div>
        <div className='card-adons-monthly d-flex me-1 ms-0'>
          <input
            type='checkbox'
            className='m-1'
            onClick={() =>
              isChecked2 === false
                ? isCheckedHandler2(false, "Larger storage")
                : isCheckedHandler2(true, "")
            }
          />
          <div className='card-text row-1'>
            <h6 className='h-plan' style={hColor}>
              Larger storage
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              Extra 1TB of cloud save
            </p>
          </div>
          <p className='m-2'>{`${
            billing === "Monthly" ? "+$1/mo" : "+$10/yr"
          }`}</p>
        </div>
        <div className='card-adons-monthly d-flex mt-1 mb-1 me-1 ms-0'>
          <input
            type='checkbox'
            className='m-1'
            onClick={() =>
              isChecked3 === false
                ? isCheckedHandler3(false, "Customizable profile")
                : isCheckedHandler3(true, "")
            }
          />
          <div className='card-text row-1'>
            <h6 className='h-plan' style={hColor}>
              Customizable profile
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              Custom theme on your profile
            </p>
          </div>
          <p className='m-2'>{`${
            billing === "Monthly" ? "+$2/mo" : "+$20/yr"
          }`}</p>
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

export default Addons;
