import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";



//What is the breakdown of games by genre for each console. 
const DisplayQGraph =({videoGames}) => {

        function generateDataFormChart(){
            
            let platform = videoGames.filter(game => game.year >= 2013).map(game => {
                return game.platform
            });
            let genres = videoGames.map(game => {
                return game.genre
            });
            let individualPlatforms = [...new Set(platform)]

            let distinctGenre = [...new Set(genres)]
    
            let platformArray = individualPlatforms.map(platforms => {
                
                let genreByPlatform = videoGames.filter(genre => genre.platform === platforms);
                
                let results = distinctGenre.map(genre =>{
                    let genrePopularity = 0 
                    for (let i = 0; i < genreByPlatform.length; i++ ){
                        if(genreByPlatform[i].genre === genre){
                            genrePopularity ++
                        }
                }
                    return genrePopularity
                })
              
                return [platforms, ...results, 0]
        });
            const data = [ ["Platform", ...distinctGenre, "Average"],
            ...platformArray
            ]
            return data;               
        }
        const options = {
            title: "Most Popular Genre By Console",
            vAxis: { title: "Games By Genre" },
            hAxis: { title: "Console" },
            seriesType: "bars",
            series: { 13: { type: "line" } },
          };

    return (<Chart chartType="ComboChart" width="100%" height="400px" data={generateDataFormChart()} options={options}/>
    )
}

export default DisplayQGraph;