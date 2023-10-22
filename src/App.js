import React, { useEffect, useState } from "react";

import "./App.css";

import Sidebar from "./components/sidebar";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Button from "./components/button";
import Plan from "./components/plan";
import Mobilebtn from "./components/mobilebtn";

function App() {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("");

  useEffect(() => {
    if (page === 1) {
      setView(<Info className='row-2' />);
    } else if (page === 2) {
      setView(<Plan className='row-2 container-plan' />);
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
      <div className={`container ${page === 2 && "container-plan"} d-flex`}>
        <Sidebar className='row-1' />
        <div className='d-flex-col'>
          {view}
          <footer
            className={`footer ${page === 1 && "footer-start"} m-1 me-1-5`}
          >
            <Button
              onClickNext={onClickNextHandler}
              onClickPrev={onClickPrevHandler}
              page={page}
              className='footer-pos'
            />
          </footer>
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
