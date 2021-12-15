const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [resultado, setResultado] = useState([]);
  const [groupRecurso, setGroupRecurso] = useState(null);
  useEffect(() => {
    Resultado();
  }, []);

  const Resultado = async () => {
    try {
      const result = await axios.get('json/resultado.json'); //const result = await axios.get('api/resultado/{id_indicador}/{id_diagnostico}');
      //setResultado(result.data.data)

      console.log('----', result.data);
      setResultado(result.data);
    } catch (error) {
      //alert('erro');
      console.log(error);
    }
  };

  const ClickRecurso = key => {
    key = groupRecurso === key ? null : key; //console.log(key);

    setGroupRecurso(key);
  };

  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[resultado.id_dimensao];
  console.log('----', resultado.indicadores);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: bgColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao" + resultado.id_dimensao + "-g.png",
    alt: "",
    width: "100"
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", resultado.id_dimensao)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, resultado.nome, "inclusiva"), /*#__PURE__*/React.createElement("p", {
    className: "mb-5"
  }, "Veja abaixo os resultados por indicador:")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2 text-center"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, resultado.risco)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '40px'
    }
  }, resultado.pontos), /*#__PURE__*/React.createElement("p", null, "pontos")))))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, resultado.indicadores ? resultado.indicadores.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-md-12",
      key: 'indicadores_' + key
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Indicador 1.1 - ", item.titulo), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement(BarChart, {
      id: 'bar-chart' + key,
      series: item.series,
      labels: []
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-8"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "CONSEQU\xCANCIA:"), " ", item.descricao), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-4"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: bgColor
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12 text-center"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, item.risco)), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '40px'
      }
    }, item.pontos), /*#__PURE__*/React.createElement("p", null, "pontos"))))))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12 text-right",
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
      onClick: () => ClickRecurso(key),
      className: "cursor"
    }, "Indica\xE7\xF5es de ", item.recursos.length, " recursos para interven\xE7\xE3o ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12",
      style: {
        display: groupRecurso === key ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Recursos"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", null))));
  }) : null)));
};