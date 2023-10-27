import React, { useEffect, useState } from "react";

import "./App.css";

import Sidebar from "./components/sidebar";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Plan from "./components/plan";
import Mobilebtn from "./components/mobilebtn";
import Addons from "./components/addons";
import Summary from "./components/summary";
import EndMessage from "./components/endMessage";

const App = () => {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [plan, setPlan] = useState("");
  const [billing, setBilling] = useState("Monthly");
  const [adons, setAdons] = useState([]);
  const [summary, setSummary] = useState({ billing: "", plan: "", adons: "" });

  useEffect(() => {
    if (page === 1) {
      setView(
        <Info
          className='row-1'
          onInfoChange={onInfoChangeHandler}
          userInfo={userInfo}
        />
      );
    } else if (page === 2) {
      setView(
        <Plan
          className='row-1 container-plan'
          onClickPlan={onClickPlanHandler}
          onClickBilling={onClickBillingHandler}
          billing={billing}
          plan={plan}
        />
      );
    } else if (page === 3) {
      setView(
        <Addons
          className='row-1 container-plan'
          billing={billing}
          onClickAdons={onClickAdonsHandler}
          adOns={adons}
        />
      );
      summaryHandler();
    } else if (page === 4) {
      setView(
        <Summary
          className='row-1 container-plan'
          billing={summary.billing}
          adons={summary.adons}
          plan={summary.plan}
          onClickChangeBtn={onClickChangeBtnHandler}
        />
      );
    } else if (page === 5) {
      setView(<EndMessage className='row-1 container-plan' />);
    }
    //eslint-disable-next-line
  }, [
    page,
    plan,
    billing,
    adons,
    summary.billing,
    summary.adons,
    summary.plan,
  ]);

  const onClickNextHandler = () => {
    if (page === 1) {
      if (
        userInfo.name === "" ||
        userInfo.email === "" ||
        userInfo.contact === ""
      ) {
        return page;
      }
      setPage(page + 1);
    }
    if (page === 2) {
      if (plan === "") {
        return page;
      }
      setPage(page + 1);
    }
    if (page === 3) {
      if (adons.length === 0) {
        return page;
      }
      setPage(page + 1);
    }
    if (page === 4) {
      setPage(page + 1);
    }
  };

  const onInfoChangeHandler = (uname, uemail, ucontact) => {
    setUserInfo({
      name: uname,
      email: uemail,
      contact: ucontact,
    });
  };

  const onClickPrevHandler = () => {
    setPage(page - 1);
  };

  const onClickChangeBtnHandler = () => {
    setPage(2);
  };

  const onClickPlanHandler = (plan) => {
    setPlan(plan);
  };

  const onClickBillingHandler = (billing) => {
    setBilling(billing);
  };

  const onClickAdonsHandler = (thing) => {
    setAdons(thing);
  };

  const summaryHandler = () => {
    setSummary({
      plan: plan,
      billing: billing,
      adons: adons,
    });
  };

  return (
    <div className='center-item'>
      <Navbar page={page} />
      <div
        className={`${
          page > 1 && page < 5 ? "container-plan" : "container"
        } d-flex`}
      >
        <Sidebar page={page} />
        <div className='d-flex-col'>
          {view}
          {page !== 5 && (
            <>
              <Button
                onClickNext={onClickNextHandler}
                onClickPrev={onClickPrevHandler}
                page={page}
                className='footer-pos'
              />
              <Mobilebtn
                onClickNext={onClickNextHandler}
                onClickPrev={onClickPrevHandler}
                page={page}
              />
            </>
          )}
        </div>
      </div>
      <div className='attribution'>
        Challenge by{" "}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href='https://www.frontendmentor.io/profile/baron-gascon25'>Baron</a>
        .
      </div>
    </div>
  );
};

export default App;
