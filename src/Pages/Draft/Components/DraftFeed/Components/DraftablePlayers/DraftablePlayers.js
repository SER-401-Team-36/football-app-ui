import React from 'react';
import { NavLink } from 'react-router-dom';

import './DraftablePlayers.css';

const DraftablePlayer = ({
  player,
  onUserSelection,
  onNonUserSelection,
}) => {
  const handleUserSelection = () => {
    onUserSelection(player);
  };
  const handleNonUserSelection = () => {
    onNonUserSelection(player);
  };
  return (
    <div className="draftablePlayers">
      <NavLink
        to="/Draft"
        className="updateDraft"
        activeClassName="updateDraft"
      ></NavLink>
      <h4 className="draftablePlayers__text">
        <strong>Name: </strong> {player.name}
        <br></br>
        <strong>Pos: </strong> {player.position}
        <br></br>
        <strong>FFP: </strong>
        {player.average_projection}
      </h4>
      <button onClick={handleUserSelection}>+</button>
      <button onClick={handleNonUserSelection}>-</button>
    </div>
  );
};

export default DraftablePlayer;
