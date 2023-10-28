import React from "react";

const button = ({ onClickNext, onClickPrev, page }) => {
  return (
    <footer className={`footer ${page === 1 && "footer-start"}`}>
      {page > 1 && (
        <button className='d-btn-prev' onClick={onClickPrev} style={backBtn}>
          <h6 className='mt-0 mb-0' style={{ color: "hsl(231, 11%, 63%)" }}>
            Go back
          </h6>
        </button>
      )}
      {page !== 4 ? (
        <button className='d-btn-next' onClick={onClickNext} style={btnWidth}>
          <h6 className='mt-0 mb-0'>Next Step</h6>
        </button>
      ) : (
        <button
          className='d-btn-confirm'
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
  width: "8rem",
};

const backBtn = {
  textAlign: "start",
};

export default button;
