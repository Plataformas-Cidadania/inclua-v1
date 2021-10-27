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
    setDimensao(context.dimensao.info.dimensao);
    setIndicador(context.indicador.indicador);
    setTitulo(context.indicador.titulo);
    setDescricao(context.indicador.descricao);
  }, [context.dimensao, context.indicador]);
  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[context.dimensao.info.dimensao];
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
    if (item.indicador === indicador) {
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
  }, /*#__PURE__*/React.createElement(Pergunta, {
    tipo: "1",
    titulo: "Caso o processo de implementa\xE7\xE3o dessa oferta p\xFAblica\r envolva mais de uma organiza\xE7\xE3o (ou m\xFAltiplas unidades de uma organiza\xE7\xE3o) respons\xE1vel por\r etapas diferentes da produ\xE7\xE3o do bem ou servi\xE7o, existem espa\xE7os e mecanismos para promover\r a coordena\xE7\xE3o e a articula\xE7\xE3o das a\xE7\xF5es entre essas organiza\xE7\xF5es? [Por exemplo: reuni\xF5es\r peri\xF3dicas, comit\xEAs gestores, inst\xE2ncias de media\xE7\xE3o, etc.] Marque uma op\xE7\xE3o abaixo."
  }), /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "P1.1a"), " Caso o processo de implementa\xE7\xE3o dessa oferta p\xFAblica envolva mais de uma organiza\xE7\xE3o (ou m\xFAltiplas unidades de uma organiza\xE7\xE3o) respons\xE1vel por etapas diferentes da produ\xE7\xE3o do bem ou servi\xE7o, existem espa\xE7os e mecanismos para promover a coordena\xE7\xE3o e a articula\xE7\xE3o das a\xE7\xF5es entre essas organiza\xE7\xF5es? [Por exemplo: reuni\xF5es peri\xF3dicas, comit\xEAs gestores, inst\xE2ncias de media\xE7\xE3o, etc.] Marque uma op\xE7\xE3o abaixo."), /*#__PURE__*/React.createElement("div", {
    className: "form-check float-start"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "flexRadioDefault",
    id: "flexRadioDefault1"
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault1"
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "flexRadioDefault",
    id: "flexRadioDefault2",
    checked: true
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o")), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0")), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "P2.1a"), " Caso o processo de implementa\xE7\xE3o dessa oferta p\xFAblica envolva mais de uma organiza\xE7\xE3o (ou m\xFAltiplas unidades de uma organiza\xE7\xE3o) respons\xE1vel por etapas diferentes da produ\xE7\xE3o do bem ou servi\xE7o, existem espa\xE7os e mecanismos para promover a coordena\xE7\xE3o e a articula\xE7\xE3o das a\xE7\xF5es entre essas organiza\xE7\xF5es? [Por exemplo: reuni\xF5es peri\xF3dicas, comit\xEAs gestores, inst\xE2ncias de media\xE7\xE3o, etc.] Marque uma op\xE7\xE3o abaixo."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "range-merker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item " + bgColor
  }, "1")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item " + bgColor
  }, "2")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item " + bgColor
  }, "3")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "4")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "5")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "6")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "7")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "8")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "9")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "10"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range range",
    id: "customRange1",
    min: "1",
    max: "10",
    value: "3"
  }))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row mt-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-6  d-grid gap-2 d-md-flex justify-content-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-circle mt-2 "
  }, context.dimensao.indicadores.map((item, key) => {
    if (item.indicador === indicador) {
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
    className: "col-6 col-6"
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
    className: "d-grid gap-2 d-md-flex justify-content-md-end"
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