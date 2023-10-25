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

const App = () => {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("");
  const [plan, setPlan] = useState("");
  const [billing, setBilling] = useState("Monthly");
  const [adons, setAdons] = useState([]);
  const [summary, setSummary] = useState({ billing: "", plan: "", adons: "" });

  useEffect(() => {
    if (page === 1) {
      setView(<Info className='row-1' />);
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
    } else if (page === 4) {
      summaryHandler();
      setView(<Summary className='row-1 container-plan' summary={summary} />);
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
    if (page === 4) {
      return page;
    }
    setPage(page + 1);
  };

  const onClickPrevHandler = () => {
    setPage(page - 1);
  };

  const onClickPlanHandler = (plan) => {
    setPlan(plan);
  };

  const onClickBillingHandler = (billing) => {
    setBilling(billing);
  };

  const onClickAdonsHandler = (thing) => {
    setAdons(thing);
    adons.filter((ad) => ad === thing);
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
      <div className={`${page > 1 ? "container-plan" : "container"} d-flex`}>
        <Sidebar page={page} />
        <div className='d-flex-col'>
          {view}
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
