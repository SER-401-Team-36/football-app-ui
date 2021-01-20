import './AllPlayers.css';

import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';

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
    position: 'absolute',
    border: '1px solid #000',
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

  let chartData = {
    labels: [],
    datasets: [
      {
        label: [{name}],
        backgroundColor: 'rgb(110, 94, 254)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [],
      },
    ],
  };

  // chartData.data.label = {name};
  //chartData.datasets[1].data.push(compPlayer.name);

  return (
    <div className="allPlayers">
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
                <Typography variant="body1">
                  <strong> Name: </strong> {name}
                </Typography>
                <Typography variant="body1">
                  <strong> Pos: </strong> {position}
                </Typography>
                <Typography variant="body1">
                  <strong> FFP: </strong> {FFP}
                </Typography>
              </Grid>
              <Grid item xs={650}>
                <img
                  className="playerImageInModal"
                  src={image}
                  alt=""
                />
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
                      data={chartData}
                      options={{
                        title: {
                          display: true,
                          text: 'Player Stats',
                          fontSize: 30,
                        },
                        legend: {
                          display: true,
                          position: 'right',
                        },
                      }}
                    />
                  </div>
                </center>
              </Grid>
            </Grid>
            {/* <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="flex-start"
            >
              <div>
                <h4 className="playerTextInAllFeed">
                  <strong>Name: </strong>
                  {player.name} <strong>Pos: </strong>
                  {player.position} <strong>FFP: </strong>
                  {player.FFP} <strong>TD: </strong> {'TD'}
                </h4>
                <Button
                  className="playerInfoButtonInAllFeed"
                  onClick={() => setComparison(compPlayer.name)}
                >
                  Compare
                </Button>
              </div>
              <div>
                {player &&
                  player.map((player) => {
                    return (
                      <AllPlayers
                        key={player.id}
                        name={player.name}
                        FFP={player.projection}
                        TD={TD}
                      />
                    );
                  })}
              </div>
            </Grid> */}
          {/* <p className="allPlayers__modal">
            <img
              className="allPlayers__modal__img"
              src={image}
              alt=""
            />
            <strong> Name: </strong>
            {name} 
            <strong> Pos: </strong>
            {position} 
            <strong> FFP: </strong>
            {FFP}
          </p> */}
          <p>
          </p>
          </p>
        </div>
      </Modal>

      {/* photos in the all player box             */}
      <div>
        <Avatar
          className="allPlayers__avatar"
          alt={name}
          src={image}
        />
      </div>

      {/* player details in the all player box */}
      <h4 className="allPlayers__text">
        <strong>Name: </strong>
        {name} <strong>Pos: </strong>
        {position} <strong>FFP: </strong>
        {FFP} <strong>TD: </strong> {TD}
      </h4>

      {/* button to open info popup */}
      <Button
        className="allPlayers__button"
        onClick={() => setOpen(true)}
      >
        Info
      </Button>
    </div>
  );
}

export default AllPlayers;
