import Navbar from "../../../components/Navbar";
import CardUi from "../../../containers/student-view/CardUi";
import { useState } from "react";
import LeftPanel from "../../../containers/student-view/leftPanel/LeftPanel";
import VideoPlayer from "../../../containers/videoPlayer/videoPlayer";
import FilterUI from "../../../containers/student-view/FilterUI";
import DsaMainPage from "../../../containers/student-view/DSA/DsaMainPage";
import DsaMainPageNew from "../../../containers/student-view/DSA/DsaMainPageNew";
import DsaMainPage2 from "../../../containers/student-view/DSA/DsaMainPage2";
const StudentHomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("DSA");

  const Filters = [
    { id: "Development", label: "Development" },
    { id: "DSA", label: "DSA" },
    { id: "college", label: "College" },
    { id: "high", label: "High School" },
    { id: "middle", label: "Middle School" },
    { id: "elementary", label: "Elementary" },
    { id: "kindergarten", label: "Kindergarten" },
  ];
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    localStorage.setItem("filter", e.target.value);
  };
  const filter = localStorage.getItem("filter");
  console.log(filter, "filter", selectedFilter);
  return (
    <>
      <Navbar />
      <FilterUI
        handleFilterChange={handleFilterChange}
        selectedFilter={selectedFilter}
        Filters={Filters}
      />
      {(filter === "Development" || selectedFilter === "Development") && (
        <CardUi />
      )}
      {(filter === "DSA" && selectedFilter === "DSA") && (
        <DsaMainPage />
        // <DsaMainPage2 />
        // <DsaMainPageNew />
      )}
    </>
  );
};

export default StudentHomePage;
