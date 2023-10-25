import React, { useEffect, useState } from "react";

const Summary = ({ summary: { billing, plan, adons } }) => {
  const [prices, setPrices] = useState();

  const pricesMonthly = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
    "Online service": 1,
    "Larger storage": 2,
    "Customizable profile": 2,
  };

  const pricesYearly = {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
    "Online service": 10,
    "Larger storage": 20,
    "Customizable profile": 20,
  };

  useEffect(() => {
    setPrice();
    //eslint-disable-next-line
  }, [adons, billing, plan]);

  const setPrice = () => {
    if (billing === "Monthly") {
      setPrices(pricesMonthly);
    } else if (billing === "Yearly") {
      setPrices(pricesYearly);
    }
  };

  const getPrice = (item) => {
    let itemKey = "";
    let itemKeyArray = [];
    try {
      itemKey = Object.entries(prices).filter(([key]) => key === item);
      itemKeyArray = itemKey[0];
      return itemKeyArray.splice(1, 1);
    } catch (error) {}
  };

  return (
    <div className='m-1 mt-2 plan container-2'>
      <h1 className='mb-0'>Finishing up</h1>
      <p className='mt-1'>
        Double-check everything looks OK before confirming.
      </p>
      <div className='m-1'>
        <div className='d-flex align-items-center'>
          <div className='d-flex-col row-1'>
            <h6 className='mb-0' style={hColor}>
              {`${plan} (${billing})`}
            </h6>
            <p className='mb-1 mt-0-5' style={pSize}>
              Change
            </p>
          </div>
          <h6 className='mt-2 mb-1 me-1' style={hColor}>
            {`$${getPrice(plan)}${billing === "Monthly" ? "/mo" : "/yr"}`}
          </h6>
        </div>
        <hr className='mt-1 me-1' />
        {Array.isArray(adons) &&
          adons.map((ad) => (
            <div
              className='d-flex'
              key={`esdw${Math.floor(Math.random() * 100)}`}
            >
              <p className='mt-1 mb-1 row-1' style={pSize} key={ad}>
                {ad}
              </p>
              {billing === "Monthly" ? (
                <p
                  className='mt-1 me-1 mb-1'
                  style={hColor1}
                  key={`axdw${Math.floor(Math.random() * 100)}`}
                >
                  {`+$${getPrice(ad)}${billing === "Monthly" ? "/mo" : "/yr"}`}
                </p>
              ) : (
                <p
                  className='mt-1 me-1 mb-1'
                  style={hColor1}
                  key={`adewdw${Math.floor(Math.random() * 100)}`}
                >
                  {`+$${getPrice(ad)}${billing === "Monthly" ? "/mo" : "/yr"}`}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

const hColor = {
  color: "hsl(213, 96%, 18%)",
  fontWeight: "600",
  fontSize: "15px",
};

const hColor1 = {
  color: "hsl(213, 96%, 18%)",
  fontWeight: "500",
  fontSize: "13.5px",
};

const pSize = {
  fontSize: "13.5px",
};

export default Summary;
