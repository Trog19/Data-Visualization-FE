import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";




const DisplayPlatform =({videoGames}) => {

        function generateDataFormChart(){

            let filteredGame = videoGames.filter(game => game.year >= 2013)

            console.log ("Filtered Games", filteredGame)

            let platform = filteredGame.map(game => {
                return game.platform
            });
 
            console.log ("Platforms", platform)

            let individualPlatforms = [... new Set(platform)]

            console.log('IndPlatforms', individualPlatforms)


            let platformArray = individualPlatforms.map(platforms => {

            let allGamesForPlatform = filteredGame.filter(game => game.platform == platforms);

            console.log("Allagmes", allGamesForPlatform)

            // let globalSales = allGamesForPlatform.map(game => game.globalsale);

            // console.log(globalSales)
            });



            const data = [
                ["Year", ...individualPlatforms
                ],
                ["2013-2016", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            ]
            return data;





        
        }


        const options = {
            title: "Global Game Sales By Console",
            vAxis: { title: "Games Sold" },
            hAxis: { title: "Year" },
            seriesType: "bars",
            series: { 11: { type: "line" } },
          };



  

    return (
      <Chart chartType="ComboChart" width="100%" height="400px" data={generateDataFormChart()} options={options}/>
    );


    }

export default DisplayPlatform;


