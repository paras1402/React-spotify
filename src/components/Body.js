import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify}></Header>
      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          // src="https://newjams-images.scdn.co/v3/discover-weekly/rbdplDM0atqIkK6HuwMNETssngt8Ncnv0ddkTtrVOx8iZYJNIUFbODUO74e4hV0BbliXObOyYxIlyO4AGV5L53xuYzURW_vvL3mDIn81y5PinV93oG6fSj7pBTHHhqkVe1bNq_n58O78MMQThpeZSHNR5SAI0qf1sVeMb8dCUF9ealj4bllbj0Fru6twI7AVk_3M_S0ZJ_-NHxIPULMNm5O7czLGfOtUcgi350tYq08I47LoduA0rnaZnx0F52AzPtcRmYQFmkJliCfM4cFYZu9sSEqN1tb9nSVf2P2xuatTxypc1HTB9j1E6XozcdTu9UmLiSmZ150zcmoGLDZa-Sohnmc99ZmwAhgmjAoc1_k=/NzA6NTQ6MTJUMTMtMzAtMQ==/default"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
          <FavoriteIcon fontSize="large"></FavoriteIcon>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
