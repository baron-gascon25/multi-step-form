import React from "react";

const AddonCard = ({
  isChecked,
  isCheckedHandler,
  hColor,
  pSize,
  priceStyle,
  billing,
  adonName,
  adonDesc,
  adonPrice,
}) => {
  return (
    <div
      className={`card-adons-monthly ${
        isChecked && "card-adons-monthly-active"
      } d-flex`}
    >
      <input
        type='checkbox'
        className='m-1'
        onClick={() =>
          isChecked === false
            ? isCheckedHandler(false, adonName)
            : isCheckedHandler(true, adonName)
        }
        defaultChecked={isChecked}
      />
      <div className='card-text row-1'>
        <h6 className='h-plan' style={hColor}>
          {adonName}
        </h6>
        <p className='m-1 p-plan' style={pSize}>
          {adonDesc}
        </p>
      </div>
      <p className='m-2' style={priceStyle}>{`${
        billing === "Monthly" ? `+$${adonPrice}/mo` : `+$${adonPrice}0/yr`
      }`}</p>
    </div>
  );
};

export default AddonCard;
