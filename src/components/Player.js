import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
export const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* body */}
      </div>
      {/* footer */}
    </div>
  );
};
