import React from "react";

const button = ({ onClickNext, onClickPrev, page }) => {
  return (
    <footer className={`footer ${page === 1 && "footer-start"}`}>
      {page > 1 && (
        <button className='d-btn-prev' onClick={onClickPrev} style={btnWidth}>
          <h6 className='mt-0 mb-0' style={{ color: "#184a89" }}>
            Go back
          </h6>
        </button>
      )}
      <button className='d-btn-next' onClick={onClickNext} style={btnWidth}>
        <h6 className='mt-0 mb-0'>Next Step</h6>
      </button>
    </footer>
  );
};

const btnWidth = {
  width: "auto",
};

export default button;
