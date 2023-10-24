import React from "react";

const navbar = ({ page }) => {
  return (
    <div className='navbar d-flex justify-content-center'>
      <div className='mx-1'>
        <h6 className={`${page === 1 ? "circle-active" : "circle"}`}>1</h6>
      </div>
      <div className='mx-1'>
        <h6 className={`${page === 2 ? "circle-active" : "circle"}`}>2</h6>
      </div>
      <div className='mx-1'>
        <h6 className={`${page === 3 ? "circle-active" : "circle"}`}>3</h6>
      </div>
      <div className='mx-1'>
        <h6 className={`${page === 4 ? "circle-active" : "circle"}`}>4</h6>
      </div>
    </div>
  );
};

export default navbar;
