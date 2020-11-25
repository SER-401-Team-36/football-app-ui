import React, { useState } from "react";
import "./AllPlayers.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Bar } from "react-chartjs-2";

function getModalStyle() {
  const bottom = 10;
  const left = 30;

  return {
    bottom: `${bottom}%`,
    left: `${left}%`,
    transform: `translate(-${bottom}%, -${left}%)`,
  };
}

const state = {
  labels: ["Player Name"],
  datasets: [
    {
      label: "Player Comparison",
      backgroundColor: "rgb(110, 94, 254)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65],
    },
  ],
};

const comparisonState = {
  labels: ["Comparison Player Name"],
  datasets: [
    {
      label: "Player Comparison",
      backgroundColor: "rgb(110, 94, 254)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65],
    },
  ],
};

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

function AllPlayers({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [player, setPlayer] = useState([]);

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
                    <Bar
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Player Stats",
                          fontSize: 30,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      }}
                    />
                  </div>
                  <div className="canvas">
                    <Bar
                      data={comparisonState}
                      options={{
                        title: {
                          display: true,
                          text: "Player Stats",
                          fontSize: 30,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      }}
                    />
                  </div>
                </center>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="flex-start"
            >
              Compare to:
              <div>
                {player &&
                  player.map((player) => {
                    return (
                      <AllPlayers
                        key={player.id}
                        name={player.name}
                        image={"player.image"}
                        position={player.position}
                        FFP={player.projection}
                        TD={"100"}
                      />
                    );
                  })}
              </div>
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
