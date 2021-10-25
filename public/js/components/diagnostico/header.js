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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", null, "Diagn\xF3stico"), /*#__PURE__*/React.createElement("p", null, "Instru\xE7\xF5es: essa atividade dura aproximadamente de XX a XX minutos e deve ser realizada com bastante aten\xE7\xE3o de forma a retratar com a maior precis\xE3o poss\xEDvel a situa\xE7\xE3o da oferta p\xFAblica na qual voc\xEA est\xE1 envolvido. Caso prefira, voc\xEA pode baixar o question\xE1rio, ler e reunir as informa\xE7\xF5es necess\xE1rias para ent\xE3o voltar aqui e responder \xE0s perguntas."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
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
  }, "Completo"), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right fa-3x float-end",
    style: {
      marginTop: '-52px'
    }
  }))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
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
  }, "Parcial"), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right fa-3x float-end",
    style: {
      marginTop: '-52px'
    }
  })))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/bg-top.png",
    alt: "",
    width: "80%",
    className: "float-end"
  })))));
}; //export default Header;