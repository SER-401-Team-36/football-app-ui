import React from 'react';
import classNames from 'classnames';

import './TakenPlayers.css';

const UserPlayers = ({ players, className }) => {
  return (
    <div className={classNames(className, 'user_players')}>
      <ul>
        {players.map((player) => {
          return <li key={player.id}>{player.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserPlayers;
