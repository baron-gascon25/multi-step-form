import React from "react";

import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

const plan = () => {
  return (
    <div className='m-1 mt-2 plan container-2'>
      <h1 className='mb-0'>Select your plan</h1>
      <p className='mt-1'>You have the option of monthly or yearly billing.</p>
      <div className='mt-3 cards'>
        <div className='me-1 card'>
          <img src={arcade} alt='arcade' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Arcade
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $9/mo
            </p>
          </div>
        </div>
        <div className='me-1 card card-middle'>
          <img src={advanced} alt='advanced' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Advanced
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $12/mo
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={pro} alt='pro' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Pro
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $15/mo
            </p>
          </div>
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

export default plan;
