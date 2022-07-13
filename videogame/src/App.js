import React, {useEffect, useState} from "react";
import axios from 'axios';
import DisplayPlatform from "./Components/DisplayPlatform";
import DisplayQGraph from "./Components/DisplayQGraph";
import SearchBar from "./Components/SearchBar";
import DisplayGames from "./Components/DisplayGames";
import "./App.css";


function App() {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(()=>{
    GetVideoGames();
  }, [])

const searchGames = (searchTerm) =>{
  let results = videoGames.filter((videoGames)=>{
    if(videoGames.name.includes(searchTerm) || videoGames.id === (searchTerm) || videoGames.publisher === (searchTerm)){
      return true;
    }
  }
  );setVideoGames(results)
}


async function GetVideoGames(){
  try{
  let response = await axios.get('http://localhost:8080/getAll');
  setVideoGames(response.data);
} catch(ex){
  console.log(`ERROR in getVideoGames': ${ex}`)
}
}


return (
  <><div>
    <header className="searchbar">
    <SearchBar searchGames ={searchGames}/>
    </header>
      <DisplayPlatform videoGames={videoGames} />
      <DisplayQGraph videoGames={videoGames} />
  </div>
    <DisplayGames videoGames={videoGames}/>
  <div>
    </div></>
);



}

export default App;
