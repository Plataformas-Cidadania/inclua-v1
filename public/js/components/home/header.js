const Header = () => {
  const context = React.useContext(HomeContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    onClick: () => context.setShowMenuDiagnostico(!context.showMenuDiagnostico)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-mai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-diagnostico.png",
    alt: "Diagn\xF3stico",
    title: "Diagn\xF3stico",
    width: "100%"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "btn-icon-h2"
  }, "Diagn\xF3stico"), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-mai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-biblioteca.png",
    alt: "Biblioteca",
    title: "Biblioteca",
    width: "100%"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "btn-icon-h2"
  }, "Biblioteca"), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      display: context.showMenuDiagnostico ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3"
  }, "\xA0"), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt dorder-container-mai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-line"
  }, /*#__PURE__*/React.createElement("h2", null, "Diagn\xF3stico"), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-box bg-lgt"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-3"
  }, "\xA0")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col text-center cursor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-completo.png",
    alt: "Completo",
    title: "Completo",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Completo")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center cursor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-parcial.png",
    alt: "Parcial",
    title: "Parcial",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Parcial")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center  opacity-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-analise.png",
    alt: "Resultado",
    title: "Resultado",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Resultado")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center  opacity-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-recurso.png",
    alt: "Recursos",
    title: "Recursos",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Recursos")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "float-start cursor",
    style: {
      position: 'absolute',
      left: '15px'
    },
    onClick: () => context.setShowMenuDiagnostico(!context.showMenuDiagnostico)
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-left"
  }), " Voltar"), /*#__PURE__*/React.createElement("div", {
    className: "float-end",
    style: {
      position: 'absolute',
      right: '15px'
    }
  }, "Biblioteca ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  })))));
};