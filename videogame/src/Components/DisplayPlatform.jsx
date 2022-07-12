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
        
        // export const data = [
        //     ["Year", "Sales", "Expenses", "Profit"],
        //     ["2014", 1000, 400, 200],
        //     ["2015", 1170, 460, 250],
        //     ["2016", 660, 1120, 300],
        //     ["2017", 1030, 540, 350],
        //   ];
          
        //   export const options = {
        //     chart: {
        //       title: "Company Performance",
        //       subtitle: "Sales, Expenses, and Profit: 2014-2017",
        //     },
        //   };

        const options = {
            title: "Global Game Sales By Console",
            vAxis: { title: "Games Sold" },
            hAxis: { title: "Year" },
            seriesType: "bars",
            series: { 11: { type: "line" } },
          };



    return (
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} options={options}/>
    );


    }

export default DisplayPlatform;


