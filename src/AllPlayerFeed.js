import React, { useState, useEffect } from "react";
import "./AllPlayerFeed.css";
import AllPlayers from "./AllPlayers";
import { db } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";

function AllPlayerFeed() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    db.collection("nflplayers")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        setPlayers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            player: doc.data(),
          }))
        );
      });
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
      <h2 className="allPlayerTitle">All Active Players</h2>
      <div className="stickyExamplePlayer">
        <Avatar
          className="allPlayersAvatar"
          alt={""}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLaoiVChJYmLSdfsWtgKL_deeSguvjFYeHqw&usqp=CAU"
          }
        />
        <h4 className="allPlayersText">
          <strong>NFL Players </strong>
          <input
            className="searchField"
            type="text"
            placeholder="Search.."
          ></input>
          <Button className="searchButton">
            {
              <img
                className="searchImage"
                alt=""
                src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
              />
            }
          </Button>
        </h4>
      </div>
      <div>
        {players.map(({ id, player }) => (
          <AllPlayers
            key={id}
            name={player.name}
            image={player.image}
            position={player.position}
            FFP={player.FFP}
            TD={player.TD}
          />
        ))}
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
