const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [resultadoMap, setResultadoMap] = useState([]);
  useEffect(() => {
    Resultado();
  }, []);

  const Resultado = async () => {
    try {
      const result = await axios.get('api/resultado');
      console.log(result.data.data);
      setResultadoMap(result.data.data);
    } catch (error) {
      //alert('erro');
      console.log(error);
    }
  };

  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[1];
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
    src: "img/dimensao" + 1 + "-g.png",
    alt: "",
    width: "100"
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, "Rela\xE7\xF5es interinstitucionais e instrumentos de gest\xE3o inclusiva"), /*#__PURE__*/React.createElement("p", {
    className: "mb-5"
  }, "Veja abaixo os resultados por indicador:")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2 text-center"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Risco Alto")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '40px'
    }
  }, "21"), /*#__PURE__*/React.createElement("p", null, "pontos")))))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Indicador 1.1 - DIVIS\xC3O DO TRABALHO, COORDENA\xC7\xC3O E CONFLITO INTERINSTITUCIONAL"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement(BarChart, {
    id: 'pie-chart',
    series: [10, 20, 30, 80, 70, 60, 50, 40],
    labels: [10, 20, 30, 80, 70, 60, 50, 40]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "CONSEQU\xCANCIA:"), " Desarticula\xE7\xF5es (ou formas espec\xEDficas de articula\xE7\xE3o) e disputas interinstitucionais podem repercutir em d\xE9ficits de cobertura, lacunas de aten\xE7\xE3o ou repercuss\xF5es negativas para o atendimento a segmentos espec\xEDficos do p\xFAblico ou territ\xF3rios atendidos"), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: bgColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Risco Alto")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '40px'
    }
  }, "21"), /*#__PURE__*/React.createElement("p", null, "pontos"))))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-right",
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Indica\xE7\xF5es de 48 recursos para interven\xE7\xE3o ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }))))))))));
};