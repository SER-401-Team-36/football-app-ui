import React, { useState } from "react";
import "./AllPlayers.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PlayerComparisonChart from "./PlayerComparisonChart.js";

function getModalStyle() {
  const bottom = 10;
  const left = 30;

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
    padding: theme.spacing(3, 3, 3),
    width: 750,
    height: 400,
    backgroundColor: theme.palette.background.paper,
  },
}));

function PlayerInfoModal({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div style={modalStyle} className={classes.paper}>
        <p className="playerInfoInModal">
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Grid item xs={1500}>
              <Button
                className="exitButtonInModal"
                onClick={() => setOpen(false)}
              >
                CLOSE
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <Grid item xs={650}>
              <Typography variant="body1" gutterBottom>
                <strong> Name: </strong> {name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong> Pos: </strong> {position}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong> FFP: </strong> {FFP}
              </Typography>
            </Grid>
            <Grid item xs={650}>
              <img className="playerImageInModal" src={image} alt="" />
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={1200}>
              <center>
                <div className="canvas">
                  <PlayerComparisonChart />
                </div>
              </center>
            </Grid>
          </Grid>
        </p>
      </div>
    </Modal>
  );
}

export default PlayerInfoModal;
