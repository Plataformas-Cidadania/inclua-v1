//import React from 'react';
const Header = () => {
  const context = React.useContext(DiagnosticoContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, "\xA0"), /*#__PURE__*/React.createElement("div", {
    className: "col-md-7"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", {
    dangerouslySetInnerHTML: {
      __html: text_diagnostico_titulo
    }
  }), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: text_diagnostico_descricao
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container cursor",
    onClick: () => context.setTipo(1)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt2 p-3"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: '15px'
    }
  }, "Completo"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) !== 1 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-check-circle fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) === 1 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  })))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container cursor",
    onClick: () => context.setTipo(2)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt2 p-3"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: '15px'
    }
  }, "Parcial"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) !== 2 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-check-circle fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) === 2 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  }))))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/bg-top.png",
    alt: "",
    width: "80%",
    className: "float-end"
  })))));
}; //export default Header;