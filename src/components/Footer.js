import React from "react";
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { Slider, Grid } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/e/e8/Chris_brown_4ever.jpg"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Forever</h4>
          <p>Chris Brown</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"> </SkipPreviousIcon>
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        ></PlayCircleOutlineOutlinedIcon>
        <SkipNextIcon className="footer__icon"></SkipNextIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
