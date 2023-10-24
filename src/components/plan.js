import React, { useState } from "react";

import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

const Plan = ({ onClickPlan, plan, onClickBilling, billing }) => {
  const [sub, setSub] = useState(billing === "Monthly" ? false : true);
  const yearlySub = "2 months free";

  const arcadePlan = () => {
    if (plan === "Arcade" && sub === false) {
      return "card-monthly-active";
    } else if (plan === "Arcade" && sub === true) {
      return "card-yearly-active";
    } else if (plan !== "Arcade" && sub === false) {
      return "";
    } else if (plan !== "Arcade" && sub === true) {
      return "";
    }
  };

  const advancedPlan = () => {
    if (plan === "Advanced" && sub === false) {
      return "card-monthly-active";
    } else if (plan === "Advanced" && sub === true) {
      return "card-yearly-active";
    } else if (plan !== "Advanced" && sub === false) {
      return "";
    } else if (plan !== "Advanced" && sub === true) {
      return "";
    }
  };

  const proPlan = () => {
    if (plan === "Pro" && sub === false) {
      return "card-monthly-active";
    } else if (plan === "Pro" && sub === true) {
      return "card-yearly-active";
    } else if (plan !== "Pro" && sub === false) {
      return "";
    }
  };

  const setBilling = (bool) => {
    if (bool === false) {
      setSub(true);
      onClickBilling("Yearly");
    } else if (bool === true) {
      setSub(false);
      onClickBilling("Monthly");
    }
  };

  return (
    <div className='m-1 mt-2 plan container-2'>
      <h1 className='mb-0'>Select your plan</h1>
      <p className='mt-1'>You have the option of monthly or yearly billing.</p>
      <div className='cards'>
        <div
          className={`me-1 ${
            billing === "Monthly" ? "card-monthly" : "card-yearly"
          } ${arcadePlan()}`}
          onClick={() =>
            plan !== "Arcade" ? onClickPlan("Arcade") : onClickPlan("")
          }
        >
          <img src={arcade} alt='arcade' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Arcade
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $9/mo
            </p>
            {billing === "Yearly" && <p className='mt-0-5 sub'>{yearlySub}</p>}
          </div>
        </div>
        <div
          className={`me-1 ${
            billing === "Monthly" ? "card-monthly" : "card-yearly"
          } card-middle ${advancedPlan()}`}
          onClick={() =>
            plan !== "Advanced" ? onClickPlan("Advanced") : onClickPlan("")
          }
        >
          <img src={advanced} alt='advanced' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Advanced
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $12/mo
            </p>
            {billing === "Yearly" && <p className='mt-0-5 sub'>{yearlySub}</p>}
          </div>
        </div>
        <div
          className={`me-1 ${
            billing === "Monthly" ? "card-monthly" : "card-yearly"
          } ${proPlan()}`}
          onClick={() =>
            plan !== "Pro" ? onClickPlan("Pro") : onClickPlan("")
          }
        >
          <img src={pro} alt='pro' className='m-1' />
          <div className='card-text'>
            <h6 className='h-plan' style={hColor}>
              Pro
            </h6>
            <p className='m-1 p-plan' style={pSize}>
              $15/mo
            </p>
            {billing === "Yearly" && <p className='mt-0-5 sub'>{yearlySub}</p>}
          </div>
        </div>
      </div>
      <div className='switch m-1 mt-2'>
        <span className={`monthly ${billing === "Monthly" ? "active" : ""}`}>
          Monthly
        </span>
        <input
          type='checkbox'
          id='toggle'
          onClick={() =>
            billing === "Monthly" ? setBilling(false) : setBilling(true)
          }
          defaultChecked={billing === "Monthly" ? false : true}
        />
        <label htmlFor='toggle' />
        <span className={`yearly ${billing === "Yearly" ? "active" : ""}`}>
          Yearly
        </span>
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
