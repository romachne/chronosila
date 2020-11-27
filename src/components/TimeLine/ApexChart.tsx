import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartState {
    options: any;
    series: any;
}

interface ApexChartProps {

}

export default class ApexChart extends Component<ApexChartProps, ApexChartState> {
    constructor(props: any) {
        super(props);

        this.state = {
            series: [
                {
                    data: [
                        {
                            x: 'Code',
                            y: [
                                -700,
                                700,
                            ]
                        },
                        {
                            x: 'roma',
                            y: [
                                -1700,
                                -800
                            ]
                        },
                        {
                            x: 'turtle',
                            y: [
                                -1300,
                                -650
                            ]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'rangeBar'
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                xaxis: {
                    labels: {
                        format: 'yyyy/dd/MM',
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
