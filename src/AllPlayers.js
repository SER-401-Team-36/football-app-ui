import React, { useState } from "react";
import "./AllPlayers.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function getModalStyle() {
  const bottom = 10;
  const left = 10;

  return {
    bottom: `${bottom}%`,
    left: `${left}%`,
    transform: `translate(-${bottom}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    border: "1px solid #000",
    padding: theme.spacing(10, 10, 10),
    width: 700,
    backgroundColor: theme.palette.background.paper,
  },
}));

function AllPlayers({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className="playersInAllFeed">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <p className="playerInfoInModal">
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Grid item xs={1000}>
              <Button
                className="exitButtonInModal"
                onClick={() => setOpen(false)}>

                CLOSE
              </Button>
            </Grid>
          </Grid>

          <Grid container
              direction="row"
              justify="space-around"
              alignItems="center">
            <Grid item xs={150}>
              <strong> Name: </strong>
              {name} <strong> Pos: </strong>
              {position} <strong> FFP: </strong>
              {FFP}
            </Grid>
            <Grid item xs={250}>

              <img className="playerImageInModal" src={image} alt="" />

            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={1000}>
              <center>
                The graph and comparison data will be below here
              </center>
            </Grid>
          </Grid>
          </p>
        </div>
      </Modal>

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
