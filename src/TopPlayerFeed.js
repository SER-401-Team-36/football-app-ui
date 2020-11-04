import React, {useState, useEffect} from "react";
import "./TopPlayerFeed.css";
import TopPlayer from "./TopPlayer";
import {db} from "./firebase";

function TopPlayerFeed() {
  const [players, setPlayers]=useState([]);
  const currentDate=new Date().toLocaleDateString();

  useEffect(()=>{
    db.collection("nflplayers").orderBy("FFP", "desc").limit(4).onSnapshot(snapshot=>{
      setPlayers(snapshot.docs.map(doc=>({
        id:doc.id, 
        player: doc.data()
      })));
    })
  },[]);
  
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
          players.map(({id, player})=>(
          <TopPlayer key={id} name={player.name} image={player.image} position={player.position} FFP={player.FFP} TD={player.TD}/>
          ))
        }  
      </div> 
    </div>
  );
}


export default TopPlayerFeed;
