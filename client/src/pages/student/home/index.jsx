import Navbar from "../../../components/Navbar";
import CardUi from "../../../containers/student-view/CardUi";
import { useState } from "react";
import LeftPanel from "../../../containers/student-view/leftPanel/LeftPanel";

const StudentHomePage = () => {
  return (
    <>
      <Navbar />
      <LeftPanel />
      <CardUi />
    </>
  );
};

export default StudentHomePage;
