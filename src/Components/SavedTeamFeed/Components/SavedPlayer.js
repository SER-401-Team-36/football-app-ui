import './SavedPlayer.css';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

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

function SavedPlayer({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className="savedPlayers">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <p className="savedPlayers__modal">
            <img
              className="savedPlayers__modal__img"
              src={image}
              alt=""
            />
            <strong> Name: </strong>
            {name} <strong> Pos: </strong>
            {position} <strong> FFP: </strong>
            {FFP}
          </p>
          <p>
            <center>
              The graph and comparison data will be below here
            </center>
          </p>
        </div>
      </Modal>
      <div>
        <Avatar
          className="savedPlayers__avatar"
          alt={name}
          src={image}
        />
      </div>
      <div className="savedPlayers__text">
        <strong>Name: </strong>
        {name} <strong> Pos: </strong>
        {position} <strong> FFP: </strong>
        {FFP} <strong> TD: </strong> {TD}
      </div>
      <button
        className="savedPlayers__button"
        onClick={() => setOpen(true)}
      ></button>
    </div>
  );
}

export default SavedPlayer;
