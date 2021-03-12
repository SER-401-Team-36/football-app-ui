import './TopPlayer.css';

import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';
import AllPlayers from '../../../AllPlayerFeed/Components/AllPlayers/AllPlayers.js';
import CompPlayers from '../../../AllPlayerFeed/Components/AllPlayers/CompPlayers.js';

function getModalStyle() {
  const bottom = 50;
  const left = 50;

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
    padding: theme.spacing(2, 2, 2),
    width: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TopPlayer({ name, image, position, FFP, TD }) {
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

  return (
    <div className="topPlayers">
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
              justify="space-between"
              alignItems="flex-start"
            >
              <div id = "player_details">
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
              </div>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="flex-start"
            >
              <main id="players__view">
              <div id="players__graph">
                  <Grid item xs={200}>
                    <div className="canvas">
                          <Bar
                            data={chartData}
                            options={{
                              title: {
                                display: true,
                                text: name + ' FFP',
                                fontSize: 20,
                              },
                              legend: {
                                display: true,
                                position: 'right',
                              },
                            }}
                          />

                          <Bar
                            data={chartData}
                            options={{
                              title: {
                                display: true,
                                text: 'compName + FFP',
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
              </div>
              <div className="players__comparison">
                  <Grid item xs={1000}>
                  <div className="compPlayerFeed">
                    <h2 className="allPlayerFrame__title">Select Player to Compare</h2>
                    <div className="allPlayerFrame__stickyPlayer">
                      <h4 className="allPlayerFrame__text">
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
                    <div>
                      {player &&
                        player.map((compPlayer) => {
                          return (
                            <div className="compPlayerFeed">
                              <CompPlayers
                                compKey={compPlayer.id}
                                compName={compPlayer.name}
                                compImage={'compPlayer.image'}
                                compPosition={compPlayer.position}
                                compLowFFP={compPlayer.average_projection}
                                compHighFFP={compPlayer.average_projection}
                                compFFP={compPlayer.average_projection}
                                compTD={TD}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                    
                    </Grid>
              </div>
              </main>
            </Grid>
          </p>
        </div>
      </Modal>
      <div>
        <Avatar
          className="topPlayers__avatar"
          alt={name}
          src={image}
        />
      </div>
      <h4 className="topPlayers__text">
        <strong>Name: </strong>
        {name} <strong>Pos: </strong>
        {position} <strong>FFP: </strong>
        {FFP} <strong>TD Low: </strong> {TD}
        <strong>TD Average: </strong> {TD}
        <strong>TD High: </strong> {TD}
      </h4>
      <h3 className="topPlayerHighlight">Top Pick</h3>
      <button
        className="topPlayers__button"
        onClick={() => setOpen(true)}
      ></button>
    </div>
  );
}

export default TopPlayer;
