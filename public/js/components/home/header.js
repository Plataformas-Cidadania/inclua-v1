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
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col text-center cursor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-biblioteca.png",
    alt: "Biblioteca",
    title: "Biblioteca",
    width: "100%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Completo")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center cursor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-biblioteca.png",
    alt: "Biblioteca",
    title: "Biblioteca",
    width: "100%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Parcial")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center  opacity-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-biblioteca.png",
    alt: "Biblioteca",
    title: "Biblioteca",
    width: "100%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Resultado")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center  opacity-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-biblioteca.png",
    alt: "Biblioteca",
    title: "Biblioteca",
    width: "100%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "An\xE1lise")), /*#__PURE__*/React.createElement("div", {
    className: "col text-center  opacity-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-biblioteca.png",
    alt: "Biblioteca",
    title: "Biblioteca",
    width: "100%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Recursos"))));
};