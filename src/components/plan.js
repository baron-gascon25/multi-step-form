import React, { useState } from "react";

import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

const Plan = () => {
  const [sub, setSub] = useState(false);
  const yearlySub = "2 months free";

  return (
    <div className='m-1 mt-2 plan container-2'>
      <h1 className='mb-0'>Select your plan</h1>
      <p className='mt-1'>You have the option of monthly or yearly billing.</p>
      <div className='cards'>
        <div
          className={`me-1 ${sub === false ? "card-monthly" : "card-yearly"}`}
        >
          <img src={arcade} alt='arcade' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Arcade
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $9/mo
            </p>
            {sub === true && <p className='mt-0-5 sub'>{yearlySub}</p>}
          </div>
        </div>
        <div
          className={`me-1 ${
            sub === false ? "card-monthly" : "card-yearly"
          } card-middle`}
        >
          <img src={advanced} alt='advanced' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Advanced
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $12/mo
            </p>
            {sub === true && <p className='mt-0-5 sub'>{yearlySub}</p>}
          </div>
        </div>
        <div
          className={`me-1 ${sub === false ? "card-monthly" : "card-yearly"}`}
        >
          <img src={pro} alt='pro' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Pro
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $15/mo
            </p>
            {sub === true && <p className='mt-0-5 sub'>{yearlySub}</p>}
          </div>
        </div>
      </div>
      <div className='switch m-1 mt-2'>
        <span className={`monthly ${sub === false && "active"}`}>Monthly</span>
        <input
          type='checkbox'
          id='toggle'
          onClick={() => (sub === false ? setSub(true) : setSub(false))}
        />
        <label htmlFor='toggle' />
        <span className={`yearly ${sub === true && "active"}`}>Yearly</span>
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

export default Plan;
