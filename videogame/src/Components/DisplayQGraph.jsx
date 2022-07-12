import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";




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


            console.log(distinctGenre, individualPlatforms)
            const data = [ ["Platform", ...distinctGenre, "Average"],
            ...platformArray
         
 
            ]
          

            

            // export const data = [
            //     [
            //       "Month",
            //       "Bolivia",
            //       "Ecuador",
            //       "Madagascar",
            //       "Papua New Guinea",
            //       "Rwanda",
            //       "Average",
            //     ],
            //     ["3DS", 165, 938, 522, 998, 450, 614.6],
            //     ["2005/06", 135, 1120, 599, 1268, 288, 682],
            //     ["2006/07", 157, 1167, 587, 807, 397, 623],
            //     ["2007/08", 139, 1110, 615, 968, 215, 609.4],
            //     ["2008/09", 136, 691, 629, 1026, 366, 569.6],
            //   ];
            console.log("Stuff to render " ,data)
            return data;               
        }
        const options = {
            title: "Most Popular Genre By Console",
            vAxis: { title: "Most Popular Genre" },
            hAxis: { title: "Console" },
            seriesType: "bars",
            series: { 11: { type: "line" } },
          };

    return (<Chart chartType="ComboChart" width="100%" height="400px" data={generateDataFormChart()} options={options}/>
    )
}

export default DisplayQGraph;