import React, { useState } from "react";
import PlanCard from "./PlanCard";

import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";

const PLAN_1_NAME = "Arcade";
const PLAN_1_PRICE = 9;

const PLAN_2_NAME = "Advanced";
const PLAN_2_PRICE = 12;

const PLAN_3_NAME = "Pro";
const PLAN_3_PRICE = 15;

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
        <PlanCard
          billing={billing}
          arcadePlan={arcadePlan}
          plan={plan}
          onClickPlan={onClickPlan}
          yearlySub={yearlySub}
          planImg={arcade}
          planName={PLAN_1_NAME}
          planPrice={PLAN_1_PRICE}
        />
        <PlanCard
          billing={billing}
          arcadePlan={advancedPlan}
          plan={plan}
          onClickPlan={onClickPlan}
          yearlySub={yearlySub}
          planImg={advanced}
          planName={PLAN_2_NAME}
          planPrice={PLAN_2_PRICE}
        />
        <PlanCard
          billing={billing}
          arcadePlan={proPlan}
          plan={plan}
          onClickPlan={onClickPlan}
          yearlySub={yearlySub}
          planImg={pro}
          planName={PLAN_3_NAME}
          planPrice={PLAN_3_PRICE}
        />
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

export default Plan;
