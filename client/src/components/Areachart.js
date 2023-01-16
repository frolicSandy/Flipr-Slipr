import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import axios from "axios";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Areachart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints1: [],
      dataPoints3: [],
      isLoaded: false,
      stock: props.val,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.val != prevProps.val) {
      //<---- see here
      this.setState({ stock: this.props.val }); //<---- see here
      this.componentDidMount()
    }
  }
  componentDidMount() {
    const datafetch = axios.get(
      "http://localhost:5000/api/stocks/" + this.state.stock
    );
    
    console.log(datafetch);

    datafetch
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .then((data) => {
        data = data.data.index;
        // console.log(data);

        var dps1 = [],
          dps3 = [];
        for (var i = 0; i < data.length; i++) {
          dps1.push({
            x: new Date(data[i].Date),
            y: [Number(data[i].Close)],
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
      //   theme: "light3",
      colorSet: "green",
      animationEnabled: true,
      // exportEnabled: true,

      data: [
        {
          type: "area",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0.## INR",
          dataPoints: this.state.dataPoints3,
        },
      ],
    };
    const containerProps = {
      width: "22em",
      position: "relative",
      top: "2em",
      left: "0em",
      height: "250px",
      margin: "auto",
    };

    // let temp = this.props.val;
    // // console.log((this.props.val));
    // console.log((temp + "kkkk"));
    return (
      <div>
        <CanvasJSChart
          containerProps={containerProps}
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default Areachart;
