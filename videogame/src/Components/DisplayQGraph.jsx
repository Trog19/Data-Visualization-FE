// import React, { useState, useEffect } from 'react';
// import { Chart } from "react-google-charts";




// const DisplayQGraph =({videoGames}) => {
    
//     const getOccurence=(array,value) =>{
//         return array.filter((v) => (v === value)).length;
//     }

    
//         function generateDataFormChart(){
            

            
//             let platform = videoGames.map(game => {
//                 return game.platform
//             });
            
//             console.log ("Platforms", platform)
            
//             let individualPlatforms = [...new Set(platform)]
            
//             console.log('IndPlatforms', individualPlatforms)
            
            
//             let platformArray = individualPlatforms.map(platforms => {
                
//                 let genreByPlatform = videoGames.filter(genre => genre.platform === platforms);
//                 console.log("GenreByPlatform", genreByPlatform)
                
//                 let genrePopularity = 0 
//                 for (let i = 0; i < genreByPlatform.length; i++ ){
//                     genrePopularity += genreByPlatform[i].genre;
//                 }
//                 console.log("GENRE", platforms, genrePopularity)

//                 console.log('Test:',getOccurence(genrePopularity,'Fighting'))
//                 return [platforms, genrePopularity]
//         });


//             const data = [
//                 ["Platform", "Genre"],
//                 ...platformArray  
//             ]
//             console.log("Stuff to render " ,data)
//             return data;            
            
//         }
    
//         const options = {
//             title: "Most Popular Genre By Console",
//             vAxis: { title: "Most Popular Genre" },
//             hAxis: { title: "Console" },
//             seriesType: "bars",
//             series: { 11: { type: "line" } },
//           };

//     return (
//             <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} options={options} />
//     )
// }

// export default DisplayQGraph;