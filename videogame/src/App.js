import React, {useEffect, useState} from "react";
import axios from 'axios';
import DisplayPlatform from "./Components/DisplayPlatform";

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

return (
  <div>
    <DisplayPlatform videoGames={videoGames}/>
  </div>
);



}

export default App;
