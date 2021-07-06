import React from "react";
import SongList from "./components/SongList";

function App({childern}) {
  return (
      <div className="App">
        <div className="childern">
          <SongList />
        </div>
      </div>
  );
}

export default App;
