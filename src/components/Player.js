import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleLeft, faPlay, faAngleRight} from "@fortawesome/free-solid-svg-icons"

const Player = ({ currentSong }) => {
//Ref
  const audioRef = useRef(null)
  const playSongHandler =()=>{
    console.log(audioRef.current)
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="play" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="skip-back" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio} controls></audio>
    </div>
  );
};

export default Player;
