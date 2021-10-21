const Dimensoes = () => {
  const context = React.useContext(DiagnosticoContext);
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

    if (item.teaser.dimensao === context.dimensao) {
      classe += "nav-icons-select ";
    }

    if (!context.dimensoesRespondidas.includes(item.teaser.dimensao) && item.teaser.dimensao !== context.dimensao) {
      classe += "opacity-5";
    }

    return /*#__PURE__*/React.createElement("img", {
      key: "icone-dimensao-" + key,
      src: "img/dimensao" + item.teaser.dimensao + ".png",
      alt: "",
      className: classe,
      onClick: () => context.setDimensao(item.teaser.dimensao)
    });
  }), /*#__PURE__*/React.createElement("hr", null))))), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container",
    style: {
      marginLeft: '10px'
    }
  }, context.dimensoes.map(item => {
    if (context.dimensao === item.teaser.dimensao) {
      return /*#__PURE__*/React.createElement("div", {
        className: "bg-pri"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-md-3 text-center"
      }, /*#__PURE__*/React.createElement("img", {
        src: "img/dimensao1-g.png",
        alt: ""
      }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", item.teaser.dimensao)), /*#__PURE__*/React.createElement("div", {
        className: "col-md-9"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "mt-5"
      }, item.teaser.titulo), /*#__PURE__*/React.createElement("p", {
        className: "mb-5"
      }, item.teaser.descricao)))));
    }
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Indicadores, null));
};