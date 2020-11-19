import React, { useState } from "react";
import "./AllPlayers.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PlayerInfoModal from "./PlayerInfoModal.js";

function AllPlayers({ name, image, position, FFP, TD }) {
  const [open, setOpen] = useState(false);
  // const classes = useStyles();

  return (
    <div className="playersInAllFeed">
      <PlayerInfoModal />
      <div>
        <Avatar className="playerAvatarInAllFeed" alt={name} src={image} />
      </div>
      <h4 className="playerTextInAllFeed">
        <strong>Name: </strong>
        {name} <strong>Pos: </strong>
        {position} <strong>FFP: </strong>
        {FFP} <strong>TD: </strong> {TD}
      </h4>
      <Button
        className="playerInfoButtonInAllFeed"
        onClick={() => setOpen(true)}
      >
        Info
      </Button>
    </div>
  );
}

export default AllPlayers;
