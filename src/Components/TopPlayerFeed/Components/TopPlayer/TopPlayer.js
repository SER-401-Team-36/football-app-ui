import './TopPlayer.css';

import Avatar from '@material-ui/core/Avatar';
import React from 'react';

function TopPlayer({ name, image, position, FFP }) {
  return (
    <div className="topPlayer">
      <div>
        <Avatar className="topPlayerAvatar" alt={name} src={image} />
      </div>
      <h4 className="topPlayerText">
        <strong>Name: </strong>
        {name} <strong>Pos: </strong>
        {position} <strong>FFP: </strong>
        {FFP}
      </h4>
    </div>
  );
}

export default TopPlayer;
