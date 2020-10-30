import React, {useState, useEffect} from "react";
import "./App.css";
import Player from "./Player";
import {db} from "./firebase";
import 'moment-timezone';

function App() {
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
    <div className="app">
      <div className="component6">
      <h2 className="title">Today's Hot Picks</h2>
      <p className="date"> ---------{currentDate}---------</p>
        <div className="players"> 
        {
          players.map(({id, player})=>(
            <Player key={id} name={player.name} image={player.image} position={player.position} FFP={player.FFP}/>
          ))
        }  
        </div> 
      </div>
    </div>
  );
}

export default App;
