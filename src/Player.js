import React from "react";
import "./Player.css";
import Avatar from "@material-ui/core/Avatar";

function Player({name, image, position, FFP}) {
    
 return (

    <div className="player">
        <div className="playerHeader">
        <Avatar 
        className="playerAvatar"
        alt={"name"}
        src={image}
        />
        </div>
    <h4 className="playerText"><strong>Name: </strong>{name} <strong>Pos: </strong>{position} <strong>FFP: </strong>{FFP}</h4>
    </div>
    
  )
}

export default Player;