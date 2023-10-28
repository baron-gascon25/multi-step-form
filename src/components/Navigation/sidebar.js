import React from "react";
import SidebarCard from "./SidebarCard";

const STEP_NO_1 = "STEP 1";
const STEP_NAME_1 = "YOUR INFO";

const STEP_NO_2 = "STEP 2";
const STEP_NAME_2 = "SELECT PLAN";

const STEP_NO_3 = "STEP 3";
const STEP_NAME_3 = "ADD-ONS";

const STEP_NO_4 = "STEP 4";
const STEP_NAME_4 = "SUMMARY";

const Sidebar = ({ page }) => {
  const findActivePage = () => {
    if (page === 1) {
      return "circle-active";
    } else if (page === 2) {
      return "circle-active";
    } else if (page === 3) {
      return "circle-active";
    } else if (page === 4 || 5) {
      return "circle-active";
    }
  };

  return (
    <div className={`m-1 d-sidebar ${page === 5 && "d-sidebar-5"}`}>
      <SidebarCard
        stepNum={STEP_NO_1}
        stepName={STEP_NAME_1}
        marginTop={"mt-2-5"}
        active={page === 1 ? findActivePage() : "circle"}
      />
      <SidebarCard
        stepNum={STEP_NO_2}
        stepName={STEP_NAME_2}
        marginTop={"mt-0"}
        active={page === 2 ? findActivePage() : "circle"}
      />
      <SidebarCard
        stepNum={STEP_NO_3}
        stepName={STEP_NAME_3}
        marginTop={"mt-0"}
        active={page === 3 ? findActivePage() : "circle"}
      />
      <SidebarCard
        stepNum={STEP_NO_4}
        stepName={STEP_NAME_4}
        marginTop={"mt-0"}
        active={page > 3 ? findActivePage() : "circle"}
      />
    </div>
  );
};

export default Sidebar;
