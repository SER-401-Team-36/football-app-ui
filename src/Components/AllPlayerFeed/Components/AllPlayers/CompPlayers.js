//creates list of players without the player that is currently selected

import './CompPlayers.css';

import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Bar } from 'react-chartjs-2';

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

function CompPlayers({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [player, setPlayer] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [compPlayer, setCompPlayer] = useState('');


  useEffect(() => {
    fetch('/players').then((res) =>
      res.json().then((data) => {
        setPlayer(data);
      }),
    );
   
  }, []);

  useEffect(() => {
    fetch('/players').then((res) =>
      res.json().then((data) => {
        setCompPlayer(data);
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
        data: FFP, FFP, FFP,
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
        data: compPlayer, compPlayer, compPlayer,
      },
    ],
  };

  return (
    <div className="allPlayers">
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

      <button
        className="allPlayers__button"
        onClick={() => setOpen(true)}
      ></button>
    </div>
  );
}

export default CompPlayers;
