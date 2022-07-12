import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";




const DisplayQGraph =({videoGames}) => {

        function generateDataFormChart(){

            let platform = videoGames.map(game => {
                return game.platform
            });
 
            console.log ("Platforms", platform)

            let individualPlatforms = [...new Set(platform)]

            console.log('IndPlatforms', individualPlatforms)


            let platformArray = individualPlatforms.map(platforms => {

            let genreByPlatform = videoGames.filter(genre => genre.platform === platforms);

            let genrePopularity = 0 
                for (let i = 0; i < genreByPlatform.length; i++ ){
                    genrePopularity += genreByPlatform[i].genre;
                }
                console.log(platforms, genrePopularity)

                return [platforms, genrePopularity]
        });

            const data = [
                ["Platform", "Sales"],
                ...platformArray  
            ]
            console.log("Stuff to render " ,data)
            return data;            
            
        }
    
        const options = {
            title: "Most Popular Genre By Console",
            vAxis: { title: "Games Sold" },
            hAxis: { title: "Year" },
            seriesType: "bars",
            series: { 11: { type: "line" } },
          };

    return (
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} options={options} />
    )
}

export default DisplayQGraph;