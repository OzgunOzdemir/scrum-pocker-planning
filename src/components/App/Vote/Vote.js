import React from "react";
import "./Vote.css";

import { points } from "../../../assets/index";

const Vote = ({ onClick, footerScore }) => {
  return (
    <div className="vote-container">
      <div className="row colum-container">
        {points.map((item, i) => (
          <div key={i} className="col-3">
            <div className="vote-container-point" onClick={() => onClick(item.point)}>{item.point}</div>
          </div>
        ))}
        <div className="col-3">
          <div className="vote-container-point">?</div>
        </div>
      </div>
      {
        footerScore ?  <div className="vote-footer-active">{footerScore} Voted</div> :  <div className="vote-footer">Please Vote!!!</div>
      }
    </div>
  );
};

export { Vote };
