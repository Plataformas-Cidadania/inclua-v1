class BarChart extends React.Component {
  constructor(props) {
    super(props); //console.log(props);

    this.state = {
      series: props.series,

      /*series: [{
          name: 'Risco baixo',
          data: [20]
      }, {
          name: 'Risco moderado',
          data: [40]
      }, {
          name: 'Risco alto',
          data: [40]
      }],*/
      options: {
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
          categories: ['']
        },
        tooltip: {
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