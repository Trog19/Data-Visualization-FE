import React, {useEffect, useState} from "react";
import axios from 'axios';



function App() {
  const [game, setGame] = useState([]);
  
  useEffect(()=>{
    GetAllGames();
  }, [])
}


async function GetAllGames(){
  let response = await axios.get('http://localhost:8080/getAll');
  setGame(response.data);
  console.log("List of Games ", response.data)
}


function App() {
  const [gameId, setGameId] = useState([]);
  
  useEffect(()=>{
    GetGameId();
  }, [])
}


async function GetGameId(){
  let response = await axios.get('http://localhost:8080/GetId/10');
  setGame(response.data);
  console.log("Game with ID ", response.data)
}

export default App;
