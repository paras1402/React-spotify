import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
const Header = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  console.log(user);
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <SearchIcon></SearchIcon>
          <input
            type="text"
            placeholder="Search for Artists, Songs or Podcasts"
          />
        </div>
        <div className="header__right">
          <Avatar src={user?.images[0]?.url}></Avatar>
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
