import React from 'react';

export function RobotPlayers({ name }) {
  return (
    <div className="draftablePlayers">
      <h4 className="draftablePlayers__text">
        <strong>Name: </strong> {name}
      </h4>
    </div>
  );
}
