class BarChart extends React.Component {
  constructor(props) {
    super(props); //console.log(props);

    this.state = {
      //series: props.series,
      series: [{
        name: 'Risco baixo',
        data: [20]
      }, {
        name: 'Risco moderado',
        data: [40]
      }, {
        name: 'Risco alto',
        data: [40]
      }],
      options: {
        dataLabels: {
          enabled: false
        },
        chart: {
          type: 'bar',
          height: 250,
          stacked: true,
          stackType: '100%'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
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
            show: false,
            //remove valores X
            rotate: 0,
            trim: true
          }
        },
        tooltip: {
          enabled: false,
          //remove passar mouse
          y: {
            formatter: function (val) {
              return val + "K";
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
      }
      /*series: [
          {
              name: 'Risco baixo',
              data: [
                  {
                      x: '',
                      y: 54,
                  },
              ]
          },
          {
              name: 'Risco moderado',
              data: [
                  {
                      x: '',
                      y: 54,
                  },
              ]
          },
          {
              name: 'Risco alto',
              data: [
                  {
                      x: '',
                      y: 54,
                      //colors: ['#FBCB4A'],
                      goals: [
                          {
                              name: 'Sua Pontuação',
                              value: 52,
                              strokeWidth: 20,
                              strokeHeight: 5,
                              strokeLineCap: 'round',
                              strokeColor: '#775DD0'
                          }
                      ]
                  },
              ]
          },
      ],
      options: {
          chart: {
              type: 'bar',
              stacked: true,
              stackType: '100%',
          },
          dataLabels: {
              enabled: false,
          },
          plotOptions: {
              bar: {
                  horizontal: true,
              }
          },
          xaxis: {
              labels: {
                  show: false, //remove valores X
                  rotate: 0,
                  trim: true,
              },
          },
      },*/

    };
  }

  render() {
    let chart = null;

    if (this.state.series) {
      chart = /*#__PURE__*/React.createElement(ReactApexChart, {
        options: this.state.options,
        series: this.state.series,
        type: "bar",
        width: this.props.width
      });
    }

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      id: this.props.id
    }, chart), /*#__PURE__*/React.createElement("div", {
      id: "html-dist-" + this.props.id
    }));
  }

}