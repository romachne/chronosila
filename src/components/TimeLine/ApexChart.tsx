import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";
import {history} from "../../utils/history";

interface ApexChartState {
  options: any;
  series: any;
}

interface ApexChartProps {

}

let data = [
  {
    name: 'Докерамический неолит',
    data: [
      {
        x: '1',
        y: [
          new Date(-7500, 1, 1).getTime(),
          new Date(-6000, 1, 1).getTime()
        ]
      },
    ]
  },
  {
    name: 'Неолит',
    data: [
      {
        x: '1',
        y: [
          new Date(-6000, 1, 1).getTime(),
          new Date(-3000, 1, 1).getTime()
        ]
      }
    ]
  },
  {
    name: 'ЦМП-I',
    data: [
      {
        x: '1',
        y: [
          new Date(-3000, 1, 1).getTime(),
          new Date(-2300, 1, 1).getTime()
        ]
      },
    ]
  },
  {
    name: 'ЦМП-II',
    data: [
      {
        x: '1',
        y: [
          new Date(-2300, 1, 1).getTime(),
          new Date(-1700, 1, 1).getTime()
        ]
      }
    ]
  },
  {
    name: 'Убейд',
    data: [
      {
        x: '2',
        y: [
          new Date(-5900, 1, 1).getTime(),
          new Date(-4300, 1, 1).getTime()
        ]
      }
    ]
  },
  {
    name: 'Хассуна',
    data: [
      {
        x: '3',
        y: [
          new Date(-6000, 1, 1).getTime(),
          new Date(-5000, 1, 1).getTime()
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
          type: 'rangeBar',
          events: {
            click: function(event: any, chartContext: any, config: any) {
              // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
              console.log(config.seriesIndex);
              if (config.seriesIndex != -1) {
                history.push('./article')
              }
            }
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
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '75%',
            rangeBarGroupRows: true,
            dataLabels: {
              hideOverflowingLabels: true,
              orientation: 'horizontal'
            }
          }
        },

        dataLabels: {
          enabled: true,
          enabledOnSeries: undefined,
          formatter: function (val: any, opts: any) {
            return '123'
          },
          textAnchor: 'middle',
          distributed: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: undefined
          },
          background: {
            enabled: true,
            foreColor: '#fff',
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            formatter: function(value: any, timestamp: any, opts: any) {
              return new Date(value).getFullYear().toString()
            }
          }
        },
        yaxis: {
          show: false,
        },
        // tooltip: {
        //   custom: function(opts: any) {
        //     const fromYear = new Date(opts.y1).getFullYear()
        //     const toYear = new Date(opts.y2).getFullYear()
        //     return (
        //       fromYear + ' ' + toYear
        //     )
        //   }
        // }
      },


    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
      </div>
    );
  }
}