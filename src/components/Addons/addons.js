import React, { useEffect, useState } from "react";
import AddonCard from "./AddonCard";

const ADON_1_NAME = "Online service";
const ADON_1_DESC = "Access to multiplayer games";
const ADON_1_PRICE = 1;

const ADON_2_NAME = "Larger storage";
const ADON_2_DESC = "Extra 1TB of cloud save";
const ADON_2_PRICE = 2;

const ADON_3_NAME = "Customizable profile";
const ADON_3_DESC = "Custom theme on your profile";
const ADON_3_PRICE = 2;

const Addons = ({ billing, onClickAdons, adOns }) => {
  const [isChecked, setIsChecked] = useState();
  const [isChecked2, setIsChecked2] = useState();
  const [isChecked3, setIsChecked3] = useState();

  useEffect(() => {
    const index1 = adOns.findIndex((a) => a === "Online service");
    const index2 = adOns.findIndex((a) => a === "Larger storage");
    const index3 = adOns.findIndex((a) => a === "Customizable profile");
    if (index1 === -1) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    if (index2 === -1) {
      setIsChecked2(false);
    } else {
      setIsChecked2(true);
    }
    if (index3 === -1) {
      setIsChecked3(false);
    } else {
      setIsChecked3(true);
    }
  }, [adOns]);

  const isCheckedHandler = (bool, ad) => {
    if (bool === false) {
      onClickAdons([...adOns, ad]);
      setIsChecked(true);
    } else {
      onClickAdons(adOns.filter((ads) => ad !== ads));
      setIsChecked(false);
    }
  };

  const isCheckedHandler2 = (bool, ad) => {
    if (bool === false) {
      onClickAdons([...adOns, ad]);
      setIsChecked2(true);
    } else {
      onClickAdons(adOns.filter((ads) => ad !== ads));
      setIsChecked2(false);
    }
  };

  const isCheckedHandler3 = (bool, ad) => {
    if (bool === false) {
      onClickAdons([...adOns, ad]);
      setIsChecked3(true);
    } else {
      onClickAdons(adOns.filter((ads) => ad !== ads));
      setIsChecked3(false);
    }
  };

  return (
    <div className='mt-2 mb-1 plan container-2 container-adons'>
      <h1 className='mb-0'>Pick add-ons</h1>
      <p className='mt-1'>Add-ons help enhance your gaming experience.</p>
      <div className='card-adons d-flex-col'>
        <AddonCard
          isChecked={isChecked}
          isCheckedHandler={isCheckedHandler}
          hColor={hColor}
          pSize={pSize}
          priceStyle={priceStyle}
          billing={billing}
          adonName={ADON_1_NAME}
          adonDesc={ADON_1_DESC}
          adonPrice={ADON_1_PRICE}
        />
        <AddonCard
          isChecked={isChecked2}
          isCheckedHandler={isCheckedHandler2}
          hColor={hColor}
          pSize={pSize}
          priceStyle={priceStyle}
          billing={billing}
          adonName={ADON_2_NAME}
          adonDesc={ADON_2_DESC}
          adonPrice={ADON_2_PRICE}
        />
        <AddonCard
          isChecked={isChecked3}
          isCheckedHandler={isCheckedHandler3}
          hColor={hColor}
          pSize={pSize}
          priceStyle={priceStyle}
          billing={billing}
          adonName={ADON_3_NAME}
          adonDesc={ADON_3_DESC}
          adonPrice={ADON_3_PRICE}
        />
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

const priceStyle = {
  color: "hsl(243, 100%, 62%)",
};

export default Addons;
