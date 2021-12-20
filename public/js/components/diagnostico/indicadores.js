const Indicadores = () => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [dimensao, setDimensao] = useState(0);
  const [indicador, setIndicador] = useState(0);
  const [titulo, setTitulo] = useState(0);
  const [descricao, setDescricao] = useState(0);
  const circleClosed = /*#__PURE__*/React.createElement("i", {
    className: "fas fa-circle tx-pri"
  });
  const circleOpen = /*#__PURE__*/React.createElement("i", {
    className: "far fa-circle tx-pri"
  });
  useEffect(() => {
    setDimensao(context.dimensao.numero);
    setIndicador(context.indicador.numero);
    setTitulo(context.indicador.titulo);
    setDescricao(context.indicador.descricao);
  }, [context.dimensao, context.indicador]);
  let bgColorPx = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[context.dimensao.numero];
  bgColorPx = bgColorPx[context.dimensao.numero + 1];
  console.log('//////');
  console.log(context.dimensao.numero + 1);
  console.log(bgColorPx);
  console.log('//////');
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-6"
  }, /*#__PURE__*/React.createElement("h2", null, "INDICADOR ", dimensao, ".", indicador)), /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-6 d-grid gap-2 d-md-flex justify-content-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-circle"
  }, context.dimensao.indicadores.map((item, key) => {
    if (item.numero === indicador) {
      return /*#__PURE__*/React.createElement("div", {
        key: "circle-on" + key,
        onClick: () => context.setIndicador(item),
        className: "cursor circle-icon " + bgColor
      });
    } else {
      return /*#__PURE__*/React.createElement("div", {
        key: "circle-off" + key,
        onClick: () => context.setIndicador(item),
        className: "cursor circle-icon "
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      marginTop: '1px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-3"
  }, /*#__PURE__*/React.createElement("h3", null, titulo), /*#__PURE__*/React.createElement("p", null, descricao), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement(Perguntas, {
    perguntas: context.indicador.perguntas,
    bgColor: bgColor,
    subperguntas: false
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-4 col-4  d-grid gap-2 d-md-flex justify-content-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-circle mt-2 "
  }, context.dimensao.indicadores.map((item, key) => {
    if (item.numero === indicador) {
      return /*#__PURE__*/React.createElement("div", {
        key: "circle-on" + key,
        onClick: () => context.setIndicador(item),
        className: "cursor circle-icon " + bgColor
      });
    } else {
      return /*#__PURE__*/React.createElement("div", {
        key: "circle-off" + key,
        onClick: () => context.setIndicador(item),
        className: "cursor circle-icon "
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-8 col-8"
  }, context.dimensao.indicadores.length <= indicador ? /*#__PURE__*/React.createElement("div", {
    className: "d-grid gap-2 d-md-flex justify-content-md-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme " + bgColor,
    type: "button",
    onClick: () => context.setIndicador(context.dimensao.indicadores[indicador - 2])
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-left"
  }), " indicador ", dimensao, ".", indicador - 1))) : null, context.dimensao.indicadores.length > indicador ? /*#__PURE__*/React.createElement("div", {
    className: "d-grid gap-2 d-md-flex justify-content-md-end float-end ms-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme " + bgColorPx,
    type: "button"
    /*onClick={() => context.setIndicador(context.dimensao.indicadores[indicador])}*/

  }, "indicador ", dimensao + 1, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  })))) : null, context.dimensao.indicadores.length > indicador ? /*#__PURE__*/React.createElement("div", {
    className: "d-grid gap-2 d-md-flex justify-content-md-end float-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme " + bgColor,
    type: "button",
    onClick: () => context.setIndicador(context.dimensao.indicadores[indicador])
  }, "indicador ", dimensao, ".", indicador + 1, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  })))) : null)))));
};