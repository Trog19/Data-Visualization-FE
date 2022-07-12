import React, {useEffect, useState} from "react";
import axios from 'axios';
import DisplayPlatform from "./Components/DisplayPlatform";
import DisplayQGraph from "./Components/DisplayQGraph";
import SearchBar from "./Components/SearchBar";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  
  useEffect(()=>{
    GetVideoGames();
  }, [])

const searchGames = (searchTerm) =>{
  let results = videoGames.filter((videoGames)=>{
    if(videoGames.name.includes(searchTerm) || videoGames.id === (searchTerm)){
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
    <SearchBar />
  </div><div>
      <DisplayPlatform videoGames={videoGames} />
      <DisplayQGraph videoGames={videoGames} />
    </div></>
);



}

export default App;
