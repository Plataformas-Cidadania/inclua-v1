const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  useEffect(() => {
    Resultado();
  }, []);

  const Resultado = async () => {
    try {
      const result = await axios.get("api/dimensao");
      setResultado(result.data);
      console.log('***', result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "sora",
      float: "left",
      margin: 0
    }
  }, "INCLUA"), /*#__PURE__*/React.createElement("img", {
    src: "img/logo-ipea.png",
    width: "150",
    style: {
      float: "right"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: "both",
      margin: "15px 0"
    }
  }, /*#__PURE__*/React.createElement("hr", null))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana",
      fontSize: "16px",
      lineHeight: "25px",
      width: "800px",
      margin: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao1.png",
    width: "80",
    style: {
      float: "left",
      marginRight: "15px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0"
    }
  }, "DIMENS\xC3O 1"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Rela\xE7\xF5es interinstitucionais e instrumentos de gest\xE3o inclusivainclusiva")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0"
    }
  }, "Veja abaixo os resultados por indicador:")), /*#__PURE__*/React.createElement("div", {
    style: {
      float: "both"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      float: "left"
    }
  }, "Risco alto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      float: "right"
    }
  }, "0 pontos"), /*#__PURE__*/React.createElement("div", {
    style: {
      float: "both"
    }
  })), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Indicador 1 - DIVIS\xC3O DO TRABALHO, COORDENA\xC7\xC3O E CONFLITO INTERINSTITUCIONAL")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      float: "left"
    }
  }, "Risco alto"), /*#__PURE__*/React.createElement("p", {
    style: {
      float: "right"
    }
  }, "0 pontos"), /*#__PURE__*/React.createElement("div", {
    style: {
      float: "both"
    }
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "CONSEQU\xCANCIA:"), " Identifica e avalia o grau de maturidade da articula\xE7\xE3o institucional, aten\xE7\xE3o a conflitos e disputas interorganizacionais, falhas de conex\xE3o, lacunas derivadas da divis\xE3o do trabalho entre as organiza\xE7\xF5es e esfor\xE7os de reorganiza\xE7\xE3o do arranjo institucional."), /*#__PURE__*/React.createElement("table", {
    className: "table",
    width: "100%",
    style: {
      fontSize: "13px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "Cod"), /*#__PURE__*/React.createElement("th", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "T\xEDtulo"), /*#__PURE__*/React.createElement("th", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "Esfera"), /*#__PURE__*/React.createElement("th", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "Tipo"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "1"), /*#__PURE__*/React.createElement("td", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "Guia para Implementa\xE7\xE3o das Prioridades Transversais na OPAS/OMS do Brasil: direitos humanos, equidade, g\xEAnero e etnicidade e ra\xE7a", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Idiomas:", /*#__PURE__*/React.createElement("a", {
    href: "",
    target: "_blank"
  }, "Ingl\xEAs"), " -", /*#__PURE__*/React.createElement("a", {
    href: "",
    target: "_blank"
  }, "Alem\xE3o")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Autoria: Ricardo Lima")), /*#__PURE__*/React.createElement("td", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "Brasil"), /*#__PURE__*/React.createElement("td", {
    style: {
      borderBottom: "solid 1px #CCCCCC",
      padding: "5px"
    }
  }, "Artigo"))))));
};