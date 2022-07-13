import React, {useEffect, useState} from "react";
import axios from 'axios';
import DisplayPlatform from "./Components/DisplayPlatform";
import DisplayQGraph from "./Components/DisplayQGraph";
import SearchBar from "./Components/SearchBar";
import DisplayGames from "./Components/DisplayGames";
import "./App.css";
import GetIdBar from "./Components/GetId";


function App() {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(()=>{
    GetVideoGames();
  }, [])

  async function GetVideoGames(){
    try{
    let response = await axios.get('http://localhost:8080/getAll');
    setVideoGames(response.data);
  } catch(ex){
    console.log(`ERROR in getVideoGames': ${ex}`)
  }
  }


  async function GetById(){
    try{
      let response = await axios.get('http://localhost:8080/GetId/{}');
      setVideoGames(response.data);
  } catch(ex){
      console.log(`ERROR in GetById: ${ex}`)
  }
  }
  
  const searchId = (searchTerm) =>{
    let results = videoGames.filter((videoGames)=>{
      if(videoGames.id === (searchTerm)){
        return true;
      }
    }
    ); setVideoGames(results)
  }

const searchGames = (searchTerm) =>{
  let results = videoGames.filter((videoGames)=>{
    if(videoGames.name.includes(searchTerm) || videoGames.id === (searchTerm) || videoGames.publisher === (searchTerm)){
      return true;
    }
  }
  );setVideoGames(results)
}







return (
  <><div>
    <header className="header">DATA VISUALIZATION</header>
    <div className="searchbar">
    <SearchBar searchGames ={searchGames}/>
    </div>
      <DisplayPlatform className="graph" videoGames={videoGames} />
      <DisplayQGraph videoGames={videoGames} />
      <GetIdBar searchId={searchId}/>
  </div>
    <DisplayGames videoGames={videoGames}/>
  <div>
    </div></>
);



}

export default App;
