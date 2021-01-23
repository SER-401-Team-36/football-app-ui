import './AllPlayers.css';

import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';
import AllPlayerFeed from '../../AllPlayerFeed';

function getModalStyle() {
  const bottom = 5;
  const left = 15;

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
    width: 1000,
    height: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

function AllPlayers({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [player, setPlayer] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('/players').then((res) =>
      res.json().then((data) => {
        setPlayer(data);
      }),
    );
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    const results = await fetch(
      `/players?match_on_name=${searchText}`,
    );
    setPlayer(await results.json());
  };

  

  let chartData = {
    labels: FFP,
    datasets: [
      {
        label: name,
        backgroundColor: 'rgb(110, 94, 254)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [25],
      },
    ],
  };

  let compData = {
    labels: FFP,
    datasets: [
      {
        label: name,
        backgroundColor: 'rgb(110, 94, 254)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [25],
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
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={650}>
                <div className="canvas">
                      <Bar
                        data={chartData}
                        options={{
                          title: {
                            display: true,
                            text: 'Player FFP',
                            fontSize: 20,
                          },
                          legend: {
                            display: true,
                            position: 'right',
                          },
                        }}
                      />
                  </div>
              </Grid>
                  
              <Grid item xs={550}>
                  <div className="compPlayerFrame">
                      <h2 className="compPlayerFrame__title">Select Comparison</h2>
                      <div className="compPlayerFrame__stickyPlayer">
                        {/* <Avatar
                          className="allPlayerFrame__avatar"
                          alt={''}
                          src={
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLaoiVChJYmLSdfsWtgKL_deeSguvjFYeHqw&usqp=CAU'
                          }
                        /> */}
                        <h4 className="allPlayerFrame__text">
                          <strong>All Players </strong>
                          <input
                            className="allPlayerFrame__searchField"
                            type="text"
                            placeholder="Search.."
                            value={searchText}
                            onChange={handleChange}
                          />
                          <Button
                            className="allPlayerFrame__searchButton"
                            onClick={handleSearchClick}
                          >
                            {
                              <img
                                className="allPlayerFrame__searchButtonImage"
                                alt=""
                                src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
                              />
                            }
                          </Button>
                        </h4>
                      </div>
                      {/*<div>
                        {player &&
                          player.map((player) => {
                            return (
                              <AllPlayers
                                key={player.id}
                                name={player.name}
                                image={'player.image'}
                                position={player.position}
                                FFP={player.average_projection}
                                TD={'100'}
                              />
                            );
                          })}
                      </div>*/}
                    </div> 
                    
                  </Grid>

            </Grid>
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
