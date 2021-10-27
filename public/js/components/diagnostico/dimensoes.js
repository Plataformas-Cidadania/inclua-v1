const Dimensoes = () => {
  const context = React.useContext(DiagnosticoContext);
  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[context.dimensao.info.dimensao];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center nav-icons"
  }, context.dimensoes.map((item, key) => {
    //let classe =  ? 'nav-icons-select' : '';
    let classe = "cursor ";

    if (item.info.dimensao === context.dimensao.info.dimensao) {
      classe += "nav-icons-select ";
    }

    if (!context.dimensoesRespondidas.includes(item.info.dimensao) && item.info.dimensao !== context.dimensao.info.dimensao) {
      classe += "opacity-5";
    }

    return /*#__PURE__*/React.createElement("img", {
      key: "icone-dimensao-" + key,
      src: "img/dimensao" + item.info.dimensao + ".png",
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
    src: "img/dimensao" + context.dimensao.info.dimensao + "-g.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", context.dimensao.info.dimensao)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, context.dimensao.info.titulo), /*#__PURE__*/React.createElement("p", {
    className: "mb-5"
  }, context.dimensao.info.descricao)))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Indicadores, null));
};