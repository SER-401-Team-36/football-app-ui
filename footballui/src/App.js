import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';

function Players() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="Players">Players</h1>

        <div id="Positions">
          <Button className="Buttons">All</Button>
          <Button className="Buttons">QB</Button>
          <Button className="Buttons">RB</Button>
          <Button className="Buttons">TE</Button>
        </div>
      </header>

      <main id="ViewPage">
          <div id="HotPicks">
            <div id="PickHeader">
              <h4 id="Picks">Top Hot Picks</h4>
              <h5 id="Date">----- Date -----</h5>
            </div>
          </div>
      </main>
    </div>
  );
}

export default Players;
