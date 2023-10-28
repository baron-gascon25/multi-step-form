import React from "react";

const PlanCard = ({
  billing,
  arcadePlan,
  plan,
  onClickPlan,
  yearlySub,
  planImg,
  planName,
  planPrice,
}) => {
  return (
    <div
      className={`me-1 ${
        billing === "Monthly" ? "card-monthly" : "card-yearly"
      } ${arcadePlan()}`}
      onClick={() =>
        plan !== planName ? onClickPlan(planName) : onClickPlan("")
      }
    >
      <img src={planImg} alt='arcade' className='m-1' />
      <div className='card-text'>
        <h6 className='h-plan' style={hColor}>
          {planName}
        </h6>
        <p className='m-1 p-plan' style={pSize}>
          {billing === "Monthly" ? `$${planPrice}/mo` : `$${planPrice}0/yr`}
        </p>
        {billing === "Yearly" && <p className='mt-0-5 sub'>{yearlySub}</p>}
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

export default PlanCard;
