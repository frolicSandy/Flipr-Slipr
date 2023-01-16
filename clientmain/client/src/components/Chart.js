import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.stock.react";
import axios from "axios";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints1: [],
      dataPoints2: [],
      dataPoints3: [],
      isLoaded: false,
      stock: props.val
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.val != prevProps.val) {
      //<---- see here
      this.setState({ stock: this.props.val }); //<---- see here
      this.componentDidMount();
    }
  }

  componentDidMount() {
    const apilink = "https://fliprslipr.onrender.com/api/stocks/" + this.state.stock;
    const datafetch = axios.get(apilink);

    datafetch
      .then((res) => res)
      .catch((error) => {
        console.error("Error:", error);
      })
      .then((data) => {
        data = data.data.index;
        //  console.log((data));

        var dps1 = [],
          dps3 = [];
        for (var i = 0; i < data.length; i++) {
          dps1.push({
            x: new Date(data[i].Date),
            y: [
              Number(data[i].Open),
              Number(data[i].High),
              Number(data[i].Low),
              Number(data[i].Close),
            ],
          });
          // dps2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
          dps3.push({ x: new Date(data[i].Date), y: Number(data[i].Close) });
        }
        this.setState({
          isLoaded: true,
          dataPoints1: dps1,
          // dataPoints2: dps2,
          dataPoints3: dps3,
        });
      });
  }

  render() {
    const options = {
      theme: "light2",
      subtitles: [
        {
          text: "Price-Volume Trend",
        },
      ],
      charts: [
        {
          axisX: {
            lineThickness: 5,
            tickLength: 0,
            labelFormatter: function (e) {
              return "";
            },
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter: function (e) {
                return "";
              },
            },
          },
          axisY: {
            title: this.state.stock+" Price",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Price (in USD)",
              yValueFormatString: "$#,###.##",
              type: "candlestick",
              dataPoints: this.state.dataPoints1,
            },
          ],
        },
      ],
      navigator: {
        data: [
          {
            dataPoints: this.state.dataPoints3,
          },
        ],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01"),
        },
      },
    };
    const containerProps = {
      width: "80em",
      position: "relative",
      top: "12em",
      left: "6em",
      height: "600px",
      margin: "auto",
    };
    return (
      <div>
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded && (
              <CanvasJSStockChart
                containerProps={containerProps}
                options={options}
                /* onRef = {ref => this.chart = ref} */
              />
            )
          }
        </div>
      </div>
    );
  }
}
export default Chart;
