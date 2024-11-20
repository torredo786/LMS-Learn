import Navbar from "../../components/Navbar"
import CardUi from "./CardUi"
import { useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";

const StudentViewCommonLayout = () => {

  return (
    <>
      <Navbar/>
      <div>
      <LeftPanel/>
      <CardUi/>
      </div>
      
    </>
  );
};

export default StudentViewCommonLayout