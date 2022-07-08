import React, {useEffect, useState} from "react";
import axios from 'axios';
import DisplayPlatform from "./Components/DisplayPlatform";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  
  useEffect(()=>{
    GetVideoGames();
  }, [])



async function GetVideoGames(){
  let response = await axios.get('http://localhost:8080/getAll');
  setVideoGames(response.data);
  console.log("List of Games ", response.data)
}



  const [gameId, setGameId] = useState([]);
  
  useEffect(()=>{
    GetGameId();
  }, [])

async function GetGameId(){
  let response = await axios.get('http://localhost:8080/GetId/10');
  setGameId(response.data);
  console.log("Game with ID ", response.data)
}


return (
  <div>
    <h1>"Hello World"</h1>
    <DisplayPlatform videoGames={videoGames}/>
  </div>
);



}

export default App;
