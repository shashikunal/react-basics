import React from 'react'

const PlayerComponent = (props) => {
    let Players = props.players;
    return (
        <div>
            <h1 className="display-5 font-weight-bold text-uppercase my-4 text-primary">List of Players</h1>
            <div className="playerBlock">
                {
                    Players.map((player) => (
                        <div className="card">
                            <img
                                className="image-card-img"
                                src={player.photo} alt={player.name} />
                            <div className="card-body">
                                <h5 className="card-title"> {player.name}</h5>
                                <p className="card-text">Runs : {player.runs}</p>
                            </div>
                       </div>
                   )) 
                }
            </div>
        </div>
    )
}

export default PlayerComponent
