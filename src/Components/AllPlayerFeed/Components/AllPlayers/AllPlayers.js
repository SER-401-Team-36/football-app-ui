import './AllPlayers.css';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

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

function AllPlayers({ name, image, position, FFP, TD }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className="allPlayers">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <p className="allPlayers__modal">
            <img
              className="allPlayers__modal__img"
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
          className="allPlayers__avatar"
          alt={name}
          src={image}
        />
      </div>
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

export default AllPlayers;
