import React from "react";

const mobilebtn = ({ onClickNext, onClickPrev, page }) => {
  return (
    <footer className={`m-footer ${page === 1 && "m-footer-start"}`}>
      {page > 1 && (
        <button
          className='m-btn-prev m-1 ms-0'
          onClick={onClickPrev}
          style={backBtn}
        >
          <h6 className='mt-0 mb-0' style={{ color: "#184a89" }}>
            Go back
          </h6>
        </button>
      )}
      {page !== 4 ? (
        <button
          className='m-btn-next m-1 me-2'
          onClick={onClickNext}
          style={btnWidth}
        >
          <h6 className='mt-0 mb-0'>Next Step</h6>
        </button>
      ) : (
        <button
          className='m-btn-confirm m-1 me-2'
          onClick={onClickNext}
          style={btnWidth}
        >
          <h6 className='mt-0 mb-0'>Confirm</h6>
        </button>
      )}
    </footer>
  );
};

const btnWidth = {
  width: "auto",
};

const backBtn = {
  textAlign: "start",
};

export default mobilebtn;
