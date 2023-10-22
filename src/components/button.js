import React from "react";

const button = ({ onClickNext, onClickPrev, page }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const btnWidth = {
  width: "auto",
};

export default button;
