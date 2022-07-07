import React, { useRef, useState } from "react";
/*Adding Components*/
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
/**Adding Styles */
import "./styles/app.scss";
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsplaying] = useState(false);

  //Ref
  const audioRef = useRef(null);

  const timeUpDateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };

  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="App">
      <Nav />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        timeUpDateHandler={timeUpDateHandler}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} />
    </div>
  );
}

export default App;
