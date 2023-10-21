import React from "react";

const sidebar = () => {
  return (
    <div className='m-1 row-1 d-sidebar'>
      <div className='ms-2 d-flex'>
        <h6 className='circle mt-2'>1</h6>
        <div className='d-flex-col'>
          <p
            className='ms-1 mt-2'
            style={{ fontSize: "14px", marginBottom: "0.25rem" }}
          >
            STEP 1
          </p>
          <h6 className='ms-1 mt-0'>YOUR INFO</h6>
        </div>
      </div>
      <div className='ms-2 mt-0 d-flex'>
        <h6 className='circle mt-0'>2</h6>
        <div className='d-flex-col'>
          <p
            className='ms-1 mt-0'
            style={{ fontSize: "14px", marginBottom: "0.25rem" }}
          >
            STEP 2
          </p>
          <h6 className='ms-1 mt-0'>SELECT PLAN</h6>
        </div>
      </div>
      <div className='ms-2 mt-0 d-flex'>
        <h6 className='circle mt-0'>3</h6>
        <div className='d-flex-col'>
          <p
            className='ms-1 mt-0'
            style={{ fontSize: "14px", marginBottom: "0.25rem" }}
          >
            STEP 3
          </p>
          <h6 className='ms-1 mt-0'>ADD-ONS</h6>
        </div>
      </div>
      <div className='ms-2 mt-0 d-flex'>
        <h6 className='circle mt-0'>4</h6>
        <div className='d-flex-col'>
          <p
            className='ms-1 mt-0'
            style={{ fontSize: "14px", marginBottom: "0.25rem" }}
          >
            STEP 4
          </p>
          <h6 className='ms-1 mt-0'>SUMMARY</h6>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
