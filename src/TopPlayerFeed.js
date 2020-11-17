import React, {useState, useEffect} from "react";
import "./TopPlayerFeed.css";
import TopPlayer from "./TopPlayer";


function TopPlayerFeed({positionFilter}) {
  const [player, setPlayer]=useState([]);

  const currentDate=new Date().toLocaleDateString();

  useEffect(() => {
    fetch("/players").then(res =>
        res.json().then(data => (
          data.sort((a,b) => b.projection - a.projection)))
          .then(data => {
            setPlayer(data.slice(0, 5));
          })
    );
  }, []);
  
  return (

    
    <div className="topPlayerFrame">
      <h2 className="topPlayerTitle">
        Today's Hot Picks
      </h2>
      <p className="topPlayerDate"> 
        ---------{currentDate}---------
      </p>
      <div className="topPlayers"> 
        {
          player && player.map(player=>{
            if (player.position == {positionFilter}) {
              return <TopPlayer key={player.id} name={player.name} image={"player.image"} position={player.position} FFP={player.projection} TD={"100"}/>
            }
          })
        }  
      </div> 
    </div>
  );
}


export default TopPlayerFeed;
