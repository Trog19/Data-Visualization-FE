import React, { useEffect, useState } from "react"



function DisplayGames(props) {


    return (
        <div>
            <table className="chart">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Game Rank</th>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {props.videoGames.map(videoGames => {
                        return (
                            <tr>
                                <td>{videoGames.id}</td>
                                <td>{videoGames.game_rank}</td>
                                <td>{videoGames.name}</td>
                                <td>{videoGames.platform}</td>
                                <td>{videoGames.year}</td>
                                <td>{videoGames.genre}</td>
                                <td>{videoGames.publisher}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default DisplayGames;