import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './Components/AllPlayers';
import SinglePlayer from './Components/SinglePlayer';
import NavBar from './Components/NavBar';
import TeamsList from './Components/TeamsList';
import PlayersDetails from './Components/PlayersDetails';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/all-players" component={AllPlayers} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
