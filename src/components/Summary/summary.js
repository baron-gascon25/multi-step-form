import React, { useEffect, useState } from "react";

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

const Summary = ({ billing, plan, adons, onClickChangeBtn }) => {
  const [prices, setPrices] = useState();
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    setPrice();
    let result = 0;
    const getPriceItem = (item) => {
      let itemKey = "";
      let itemKeyArray = [];
      try {
        itemKey = Object.entries(prices).filter(([key]) => key === item);
        itemKeyArray = itemKey[0];
        return itemKeyArray[1];
      } catch (error) {}
    };
    result += getPriceItem(plan);
    Array.isArray(adons) &&
      adons.map((ad) => {
        return (result = result + getPriceItem(ad));
      });
    setFinalPrice(result);
    //eslint-disable-next-line
  }, [adons, billing, plan, finalPrice]);

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
      return itemKeyArray[1];
    } catch (error) {}
  };

  return (
    <div className='ms-1 me-1 mb-0 mt-2 plan container-2'>
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
            <p
              className='mb-1 mt-0-5 p-change-style'
              onClick={onClickChangeBtn}
            >
              Change
            </p>
          </div>
          <h6 className='mt-2 mb-1 me-1' style={hColor}>
            {`$${getPrice(plan)}${billing === "Monthly" ? "/mo" : "/yr"}`}
          </h6>
        </div>
        <hr className='mt-1 me-1 mb-1' />
        {Array.isArray(adons) &&
          adons.map((ad) => (
            <div
              className='d-flex'
              key={`esdw${Math.floor(Math.random() * 100)}`}
            >
              <p className='mt-0-5 mb-0-5 row-1' style={pSize} key={ad}>
                {ad}
              </p>
              {billing === "Monthly" ? (
                <p
                  className='mt-0-5 me-1 mb-0-5'
                  style={hColor1}
                  key={`axdw${Math.floor(Math.random() * 100)}`}
                >
                  {`+$${getPrice(ad)}${billing === "Monthly" ? "/mo" : "/yr"}`}
                </p>
              ) : (
                <p
                  className='mt-0-5 me-1 mb-0-5'
                  style={hColor1}
                  key={`adewdw${Math.floor(Math.random() * 100)}`}
                >
                  {`+$${getPrice(ad)}${billing === "Monthly" ? "/mo" : "/yr"}`}
                </p>
              )}
            </div>
          ))}
        <div className='d-flex align-items-center '>
          <p className='row-1' style={pSize}>
            {`Total (${billing === "Monthly" ? "per month" : "per year"})`}
          </p>
          <h6 className='m-0 me-1' style={hColorTotal}>
            {`+$${finalPrice.toString()}/${
              billing === "Monthly" ? "mo" : "yr"
            }`}
          </h6>
        </div>
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
  fontWeight: "600",
  fontSize: "13.5px",
};

const hColorTotal = {
  color: "hsl(243, 100%, 62%)",
  fontWeight: "600",
  fontSize: "18px",
};

const pSize = {
  fontSize: "13.5px",
};

export default Summary;
