const Dimensoes = () => {
  const context = React.useContext(DiagnosticoContext);
  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[context.dimensao.numero];

  const handleDiagnostico = event => {
    let newDiagnostico = { ...context.diagnostico,
      [event.target.id]: event.target.value
    };
    context.setDiagnostico(newDiagnostico);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "ofertaPublica"
  }, /*#__PURE__*/React.createElement("strong", null, "Oferta p\xFAblica sob foco")), /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g",
    type: "text",
    name: "ofertaPublica",
    id: "ofertaPublica",
    onChange: handleDiagnostico,
    placeholder: "ex.: servi\xE7o, programa, pol\xEDtica, projeto, iniciativa, a\xE7\xE3o, etc."
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "ofertaPublica"
  }, /*#__PURE__*/React.createElement("strong", null, "Qual(is) grupo(s) ou popula\xE7\xE3o(\xF5es) espec\xEDfica(s) ir\xE1 focar?")), /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g",
    type: "text",
    name: "grupos",
    id: "grupos",
    onChange: handleDiagnostico
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center nav-icons"
  }, context.dimensoes.map((item, key) => {
    //let classe =  ? 'nav-icons-select' : '';
    let classe = "cursor ";

    if (item.numero === context.dimensao.numero) {
      classe += "nav-icons-select ";
    }

    if (!context.dimensoesRespondidas.includes(item.numero) && item.numero !== context.dimensao.numero) {
      classe += "opacity-5";
    }

    return /*#__PURE__*/React.createElement("img", {
      key: "icone-dimensao-" + key,
      src: "img/dimensao" + item.numero + ".png",
      alt: "",
      className: classe,
      onClick: () => context.setDimensao(item)
    });
  }), /*#__PURE__*/React.createElement("hr", null))))), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container",
    style: {
      marginLeft: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: bgColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao" + context.dimensao.numero + "-g.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", context.dimensao.numero)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, context.dimensao.titulo), /*#__PURE__*/React.createElement("p", {
    className: "mb-5"
  }, context.dimensao.descricao)))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Indicadores, null));
};