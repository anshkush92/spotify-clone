import { useState, useContext } from "react";

import Left from "./SideBar/Left/Left";
import Middle from "./SideBar/Middle/Middle";

const Dashboard = () => {
  const [userPlaylist, setUserPlaylist] = useState([]);
  console.log(`User Playlist`, userPlaylist);

  return (
    <main>
      <Left></Left>
      <Middle></Middle>
    </main>
  );
};

export default Dashboard;
