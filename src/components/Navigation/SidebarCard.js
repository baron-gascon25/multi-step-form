import React from "react";

const SidebarCard = ({ stepNum, stepName, marginTop, active }) => {
  const pageNum = stepNum.replace(/[^\d]/g, "");

  return (
    <div className='ms-2 me-2 d-flex'>
      <h6
        className={`${active} ${marginTop}
        }`}
      >
        {pageNum}
      </h6>
      <div className='d-flex-col'>
        <p className={`ms-1 ${marginTop}`} style={pStyle}>
          {stepNum}
        </p>
        <h6 className='ms-1 mt-0 mb-0'>{stepName}</h6>
      </div>
    </div>
  );
};

const pStyle = { fontSize: "14px", marginBottom: "0.25rem" };

export default SidebarCard;
