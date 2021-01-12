import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartState {
  options: any;
  series: any;
}

interface ApexChartProps {

}

let data = [
  // George Washington
  {
    name: 'George Washington',
    data: [
      {
        x: 'President',
        y: [
          new Date(-400, 3, 30).getTime(),
          new Date(-200, 2, 4).getTime()
        ]
      },
    ]
  },
  // John Adams
  {
    name: 'John Adams',
    data: [
      {
        x: 'President',
        y: [
          new Date(-200, 2, 4).getTime(),
          new Date(200, 2, 4).getTime()
        ]
      }
    ]
  },
  // Thomas Jefferson
  {
    name: 'Thomas Jefferson',
    data: [
      {
        x: 'Vice President',
        y: [
          new Date(105, 2, 4).getTime(),
          new Date(300, 2, 4).getTime()
        ]
      },
      {
        x: 'Secretary of State',
        y: [
          new Date(200, 2, 22).getTime(),
          new Date(400, 11, 31).getTime()
        ]
      }
    ]
  },
  // Aaron Burr
  {
    name: 'Aaron Burr',
    data: [
      {
        x: 'Vice President',
        y: [
          new Date(-200, 2, 4).getTime(),
          new Date(-105, 2, 4).getTime()
        ]
      }
    ]
  },
  // George Clinton
  {
    name: 'George Clinton',
    data: [
      {
        x: 'Vice President',
        y: [
          new Date(-105, 2, 4).getTime(),
          new Date(105, 3, 20).getTime()
        ]
      }
    ]
  }
];

export default class ApexChart extends Component<ApexChartProps, ApexChartState> {
  constructor(props: any) {
    super(props);

    this.state = {

      series: data,
      options: {
        chart: {
          height: 350,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '50%',
            rangeBarGroupRows: true
          }
        },
        colors: [
          "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
          "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
          "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
        ],
        fill: {
          type: 'solid'
        },
        xaxis: {
          labels: {
            formatter: function(value: any, timestamp: any, opts: any) {
              return new Date(value).getFullYear().toString()
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function(value: any, index: any) {
              return value
            }
          }
        },
        tooltip: {
          custom: function(opts: any) {
            // const fromYear = new Date(opts.y1).getFullYear()
            // const toYear = new Date(opts.y2).getFullYear()
            // const values = opts.ctx.rangeBar.getTooltipValues(opts)

            return (
              ''
            )
          }
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