import React, { useContext, useEffect } from "react";
import { UserPlus, Eye, FileText } from "lucide-react";
import "./styles/CardGrid.css";
import { cards } from "../../components/constant";
import { useDispatch, useSelector } from "react-redux";
import { getCardDataRequest } from "../../redux/actions/studentAction";
import { Radio } from 'antd';
const CardGrid = () => {
  const dispatch = useDispatch();
  const { cardData, loading, error } = useSelector((state) => state.student);
  useEffect(() => {
    dispatch(getCardDataRequest());
  }, []);

  return (
    <div className="svl-main">
      {cards?.map((item, index) => (
        <div className="container">
          {console.log("card", item)}
          <div className="header">
            <div className="header-content">
              <div className="short-code">
                <img src={item?.logoUrl} alt={item?.shortcode} />
              </div>
              <p>{item?.title}</p>
            </div>
          </div>
          <div className="body">
            <div className="body-content">
              {/* <p className="title">Instruction Block</p> */}
              <p className="description">{item?.description}</p>
            </div>
            <div className="icon-container">
              <div className="icon">
                <FileText
                  style={{ fontSize: "1rem", color: "rgb(165 162 162)" }}
                />
                <span className="text">Document</span>
              </div>

              <div className="icon" id="view-button-icon">
                <Eye style={{ fontSize: "1rem", color: "rgb(165 162 162)" }} />
                <span className="text">View</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
