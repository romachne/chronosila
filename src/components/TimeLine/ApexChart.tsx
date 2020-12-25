import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";
import {history} from "../../utils/history";

interface ApexChartState {
  options: any;
  series: any;
}

let series =  [
  {
    name: 'Микенский период',
    data: [
      {
        x: '',
        y: [
          -3500,
          -2800
        ]
      }
    ]
  },
  {
    name: 'Хассуна',
    data: [
      {
        x: '',
        y: [
          -6000,
          -5000
        ]
      }
    ]
  },
  {
    name: 'Убейд',
    data: [
      {
        x: '',
        y: [
          -5900,
          -4300
        ]
      }
    ]
  }
];

interface ApexChartProps {

}

export default class ApexChart extends Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps | Readonly<ApexChartProps>) {
    super(props);

    this.state = {

      series: series,
      options: {
        chart: {
          background: '#fff',
          height: 350,
          type: 'rangeBar',
          fontFamily: 'Helvetica, Arial, sans-serif',
          events: {
            animationEnd: undefined,
            beforeMount: undefined,
            mounted: undefined,
            updated: undefined,
            click: function () {history.push('./article')},
            mouseMove: undefined,
            legendClick: undefined,
            markerClick: undefined,
            selection: undefined,
            dataPointSelection: undefined,
            dataPointMouseEnter: undefined,
            dataPointMouseLeave: undefined,
            beforeZoom: undefined,
            beforeResetZoom: undefined,
            zoomed: undefined,
            scrolled: undefined
          },

        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        xaxis: {
          labels: {
            format: 'yyyy/dd/MM',
          }
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'top'
        }
      },


    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar"
                            height={350}/>
          </div>
        </div>
      </div>
    );
  }
}
