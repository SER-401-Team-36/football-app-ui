import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import * as d3 from 'd3';
import all from '../excel/espn_Players.csv';
import QB from '../excel/QB.csv';
import RB from '../excel/RB.csv';
import TE from '../excel/TE.csv';
import WR from '../excel/WR.csv';
import D_ST from '../excel/D_ST.csv';

var chartData;
var playerLabelsAll;
var projectionDataAll;
var playerPositionAll;

var playerLabelsQB;
var projectionDataQB;
var playerPositionQB;

var playerLabelsRB;
var projectionDataRB;
var playerPositionRB;

var playerLabelsTE;
var projectionDataTE;
var playerPositionTE;

var playerLabelsWR;
var projectionDataWR;
var playerPositionWR;

var playerLabelsD_ST;
var projectionDataD_ST;
var playerPositionD_ST;

d3.csv(all).then(makeChartAll);
d3.csv(QB).then(makeChartQB);
d3.csv(TE).then(makeChartTE);
d3.csv(RB).then(makeChartRB);
d3.csv(WR).then(makeChartWR);
d3.csv(D_ST).then(makeChartD_ST);

function makeChartAll(players) {
  playerLabelsAll = players.map(function (d) {
    return d.player_name;
  });
  projectionDataAll = players.map(function (d) {
    return d.projection;
  });
  playerPositionAll = players.map(function (d) {
    return d.pos;
  });
}

function makeChartQB(players) {
  playerLabelsQB = players.map(function (d) {
    return d.player_name;
  });
  projectionDataQB = players.map(function (d) {
    return d.projection;
  });
  playerPositionQB = players.map(function (d) {
    return d.pos;
  });
}

function makeChartTE(players) {
  playerLabelsTE = players.map(function (d) {
    return d.player_name;
  });
  projectionDataTE = players.map(function (d) {
    return d.projection;
  });
  playerPositionTE = players.map(function (d) {
    return d.pos;
  });
}

function makeChartRB(players) {
  playerLabelsRB = players.map(function (d) {
    return d.player_name;
  });
  projectionDataRB = players.map(function (d) {
    return d.projection;
  });
  playerPositionRB = players.map(function (d) {
    return d.pos;
  });
}

function makeChartWR(players) {
  playerLabelsWR = players.map(function (d) {
    return d.player_name;
  });
  projectionDataWR = players.map(function (d) {
    return d.projection;
  });
  playerPositionWR = players.map(function (d) {
    return d.pos;
  });
}

function makeChartD_ST(players) {
  playerLabelsD_ST = players.map(function (d) {
    return d.player_name;
  });
  projectionDataD_ST = players.map(function (d) {
    return d.projection;
  });
  playerPositionD_ST = players.map(function (d) {
    return d.pos;
  });
}

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'right',
    position: 'All',
  };

  render() {
    return (
      <div className="chart">
        {(() => {
          if (this.props.position == 'All') {
            chartData = {
              labels: playerLabelsAll,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataAll,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position == 'QB') {
            chartData = {
              labels: playerLabelsQB,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataQB,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position == 'TE') {
            chartData = {
              labels: playerLabelsTE,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataTE,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position == 'RB') {
            chartData = {
              labels: playerLabelsRB,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataRB,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position == 'WR') {
            chartData = {
              labels: playerLabelsWR,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataWR,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position == 'D_ST') {
            chartData = {
              labels: playerLabelsD_ST,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataD_ST,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          }
        })()}

        <Line
          data={chartData}
          width={200}
          height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'FPTS Rankings:  ' + this.props.position,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
            showLine: false,
            showGrid: false,
          }}
        />
      </div>
    );
  }
}

export default Chart;
