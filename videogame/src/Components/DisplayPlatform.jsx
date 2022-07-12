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

            let individualPlatforms = [...new Set(platform)]

            console.log('IndPlatforms', individualPlatforms)


            let platformArray = individualPlatforms.map(platforms => {

            let gamesByPlatform = filteredGame.filter(game => game.platform === platforms);

            let gameGlobalSale = 0 
                for (let i = 0; i < gamesByPlatform.length; i++ ){
                    gameGlobalSale += gamesByPlatform[i].globalsales;
                }
                console.log(platforms, gameGlobalSale)

                return [platforms, gameGlobalSale]
        });

            const data = [
                ["Platform", "Sales"],
                ...platformArray  
            ]
            console.log("Stuff to render " ,data)
            return data;            
            
        }
    
        const options = {
            title: "Global Game Sales By Console",
            vAxis: { title: "Games Sold Since 2013" },
            hAxis: { title: "Console" },
            seriesType: "bars",
            series: { 11: { type: "line" } },
          };

    return (
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} options={options} />
    )

    }

export default DisplayPlatform;


