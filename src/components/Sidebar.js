import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";
const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("playlists.....", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeOutlinedIcon} title="Home"></SidebarOption>
      <SidebarOption Icon={SearchOutlinedIcon} title="Search"></SidebarOption>
      <SidebarOption
        Icon={LibraryMusicIcon}
        title="Your Library"
      ></SidebarOption>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name}></SidebarOption>
      ))}
    </div>
  );
};

export default Sidebar;
