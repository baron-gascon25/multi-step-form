import React, { useEffect, useState } from "react";

import "./App.css";

import Sidebar from "./components/sidebar";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Plan from "./components/plan";
import Mobilebtn from "./components/mobilebtn";
import Addons from "./components/addons";

function App() {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("");
  const [summary, setSummary] = useState({});

  useEffect(() => {
    if (page === 1) {
      setView(<Info className='row-2' />);
    } else if (page === 2) {
      setView(<Plan className='row-2 container-plan' />);
    } else if (page === 3) {
      setView(<Addons className='row-2 container-plan' />);
    }
  }, [page]);

  const onClickNextHandler = () => {
    if (page === 4) {
      return page;
    }
    setPage(page + 1);
  };

  const onClickPrevHandler = () => {
    setPage(page - 1);
  };

  return (
    <div className='center-item'>
      <Navbar />
      <div className={`${page > 1 ? "container-plan" : "container"} d-flex`}>
        <Sidebar className='row-1' />
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
}

export default App;
