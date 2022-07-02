import React, { useState } from "react";
/*Adding Components*/
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
/**Adding Styles */
import "./styles/app.scss";
import data from "./util";

function App() {
  const [songs, setSongs]=useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
