class BarChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {



            //series: props.series,
            /*series: [{
                name: 'Risco baixo',
                data: [20]
            }, {
                name: 'Risco moderado',
                data: [40]
            }, {
                name: 'Risco alto',
                data: [40],
            }],
            options: {
                dataLabels: {
                    enabled: false,
                },
                chart: {
                    type: 'bar',
                    height: 250,
                    stacked: true,
                    stackType: '100%',
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: [''],
                    type: 'number',
                    tickAmount: undefined,
                    labels: {
                        show: false, //remove valores X
                        rotate: 0,
                        trim: true,
                    },
                },
                tooltip: {
                    enabled: false, //remove passar mouse
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },*/


            ///////////////////////////
            /*series: [{
                name: 'Marine Sprite',
                data: [44]
            }, {
                name: 'Striking Calf',
                data: [53]
            }, {
                name: 'Tank Picture',
                data: [12]
            }],*/

            series: props.series,
            options: {
                colors:['#31A853', '#FBBC09', '#E84335'],
                dataLabels: {
                    enabled: false,
                },
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    stackType: '100%'
                },
                annotations: {
                    xaxis: [{
                        x: props.annotationsX,
                        borderColor: '#333333',
                        label: {
                            borderColor: '#000000',
                            style: {
                                color: '#fff',
                                background: '#333333',
                            },
                            text: 'Sua pontuação '+props.annotationsX,
                        }
                    }],
                    /*yaxis: [{
                      y: 'July',
                      y2: 'September',
                      label: {
                        text: 'Y annotation'
                      }
                    }]*/
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                /*title: {
                  text: '100% Stacked Bar'
                },*/
                xaxis: {
                    categories: [''],
                    type: 'number',
                    tickAmount: undefined,
                    labels: {
                        show: false, //remove valores X
                        rotate: 0,
                        trim: true,
                    },
                },
                tooltip: {
                    enabled: false, //remove passar mouse
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            ///////////////////////////




        };
    }


    render() {
        let chart = null;
        if(this.state.series){
            chart = <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width={this.props.width} />
        }
        return (
            <div>
                <div  id={this.props.id}>
                    {chart}
                </div>
                <div id={"html-dist-"+this.props.id}>
                </div>
            </div>
        );
    }
}
