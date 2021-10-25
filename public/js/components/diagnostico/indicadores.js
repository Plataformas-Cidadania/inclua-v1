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
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-circle tx-pri"
  }), /*#__PURE__*/React.createElement("i", {
    className: "far fa-circle tx-pri"
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
  }, /*#__PURE__*/React.createElement("div", {
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
    className: "range-merker-box-item bg-pri"
  }, "1")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item bg-pri"
  }, "2")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item bg-pri"
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
    if (item.indicador <= indicador) {
      return /*#__PURE__*/React.createElement("svg", {
        key: "circle" + key,
        className: "svg-inline--fa fa-circle fa-w-16 tx-pri",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "circle",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        "data-fa-i2svg": "",
        onClick: () => context.setIndicador(item)
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
      }));
    } else {
      return /*#__PURE__*/React.createElement("svg", {
        key: "circle" + key,
        className: "svg-inline--fa fa-circle fa-w-16 tx-pri",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "circle",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        "data-fa-i2svg": "",
        onClick: () => context.setIndicador(item)
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
      }));
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 col-6"
  }, context.dimensao.indicadores.length <= indicador ? /*#__PURE__*/React.createElement("div", {
    className: "d-grid gap-2 d-md-flex justify-content-md-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri",
    type: "button",
    onClick: () => context.setIndicador(context.dimensao.indicadores[indicador - 2])
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-left"
  }), " indicador ", dimensao, ".", indicador - 1))) : null, context.dimensao.indicadores.length > indicador ? /*#__PURE__*/React.createElement("div", {
    className: "d-grid gap-2 d-md-flex justify-content-md-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri",
    type: "button",
    onClick: () => context.setIndicador(context.dimensao.indicadores[indicador])
  }, "indicador ", dimensao, ".", indicador + 1, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  })))) : null)))));
};