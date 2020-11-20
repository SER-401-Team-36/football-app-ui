import React, {useState, useEffect} from "react";
import "./AllPlayerFeed.css";
import AllPlayers from "./AllPlayers";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";

function AllPlayerFeed() {
  const [player, setPlayer]=useState([]);

  useEffect(() => {
    fetch("/players").then(res =>
        res.json().then(data => {
        setPlayer(data);
        })
    );
  }, []);

  return (
    
    <div className="allPlayerFrame">  
    <h2 className="allPlayerFrame__title">
        All Active Players
      </h2>
      <div className="allPlayerFrame__stickyPlayer">
        <Avatar 
        className="allPlayerFrame__avatar"
        alt={""}
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLaoiVChJYmLSdfsWtgKL_deeSguvjFYeHqw&usqp=CAU"}
        />
        <h4 
        className="allPlayerFrame__text">
        <strong>NFL Players </strong>
        <input 
        type="text" 
        placeholder="Search..">
        </input>
        <Button className="allPlayerFrame__searchButton">
        {
          <img className="allPlayerFrame__searchButtonImage" 
          alt="" 
          src= "https://img.icons8.com/pastel-glyph/2x/search--v2.png"/>
        }
        </Button>
        </h4>
      </div>
      <div> 
      {
        player && player.map(player=>{
         return <AllPlayers key={player.id} name={player.name} image={"player.image"} position={player.position} FFP={player.projection} TD={"100"}/>
        })
      }   
      </div> 
    </div>
  );
}


export default AllPlayerFeed;
