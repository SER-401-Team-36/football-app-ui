import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import * as d3 from 'd3';

var chartData;
var playerLabelsAll;
var projectionDataAll;

var playerLabelsQB;
var projectionDataQB;

var playerLabelsRB;
var projectionDataRB;

var playerLabelsTE;
var projectionDataTE;

var playerLabelsWR;
var projectionDataWR;

var playerLabelsD_ST;
var projectionDataD_ST;

d3.json('http://localhost:5000/players').then(makeChartAll);
d3.json('http://localhost:5000/players/?position=QB').then(
  makeChartQB,
);
d3.json('http://localhost:5000/players/?position=TE').then(
  makeChartTE,
);
d3.json('http://localhost:5000/players/?position=RB').then(
  makeChartRB,
);
d3.json('http://localhost:5000/players/?position=WR').then(
  makeChartWR,
);
d3.json('http://localhost:5000/players/?position=DST').then(
  makeChartD_ST,
);

function makeChartAll(players) {
  playerLabelsAll = players.map(function (d) {
    return d.name;
  });
  projectionDataAll = players.map(function (d) {
    return d.average_projection;
  });
}

function makeChartQB(players) {
  playerLabelsQB = players.map(function (d) {
    return d.name;
  });
  projectionDataQB = players.map(function (d) {
    return d.average_projection;
  });
}

function makeChartTE(players) {
  playerLabelsTE = players.map(function (d) {
    return d.name;
  });
  projectionDataTE = players.map(function (d) {
    return d.average_projection;
  });
}

function makeChartRB(players) {
  playerLabelsRB = players.map(function (d) {
    return d.name;
  });
  projectionDataRB = players.map(function (d) {
    return d.average_projection;
  });
}

function makeChartWR(players) {
  playerLabelsWR = players.map(function (d) {
    return d.name;
  });
  projectionDataWR = players.map(function (d) {
    return d.average_projection;
  });
}

function makeChartD_ST(players) {
  playerLabelsD_ST = players.map(function (d) {
    return d.name;
  });
  projectionDataD_ST = players.map(function (d) {
    return d.average_projection;
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
          if (this.props.position === 'All') {
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
          } else if (this.props.position === 'QB') {
            chartData = {
              labels: playerLabelsQB,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataQB,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(0, 128, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position === 'TE') {
            chartData = {
              labels: playerLabelsTE,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataTE,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(0, 0, 128)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position === 'RB') {
            chartData = {
              labels: playerLabelsRB,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataRB,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 128, 0)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position === 'WR') {
            chartData = {
              labels: playerLabelsWR,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataWR,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(128, 0, 128)',
                },
              ],
              showLine: false,
              showGrid: false,
            };
          } else if (this.props.position === 'D_ST') {
            chartData = {
              labels: playerLabelsD_ST,
              datasets: [
                {
                  label: 'FPTS',
                  data: projectionDataD_ST,
                  fill: false,
                  showLine: false,
                  showGrid: false,
                  backgroundColor: 'rgb(0, 128, 128)',
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
          height={150}
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
            layout: {
              padding: {
                left: 0,
                right: 10,
                top: 0,
                bottom: 0,
              },
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
