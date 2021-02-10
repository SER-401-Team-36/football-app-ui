import './DraftablePlayers.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export var players = [];

function updatePlayers() {
  return (
    <div>
      {players.map(function (name, index) {
        return <li key={index}>{name}</li>;
      })}
    </div>
  );
}

export function DraftablePlayers({ name, position, FFP }) {
  const [cart, setCart] = useState([]);
  function addItemToCart(e) {
    const item = e.target.value;
    //console.log(name, position, FFP);
    //console.log(players);
    players.push(name);
    setCart((cart) => [...cart, item]);
  }

  return (
    <div className="draftablePlayers">
      <NavLink to="/Draft" className="n" activeClassName="n">
        Add
      </NavLink>
      <h4 className="draftablePlayers__text">
        <strong>Name: </strong> {name}
        <strong>Pos: </strong> {position}
        <strong>FFP: </strong>
        {FFP}
        <button onClick={addItemToCart}>+</button>
      </h4>
    </div>
  );
}
