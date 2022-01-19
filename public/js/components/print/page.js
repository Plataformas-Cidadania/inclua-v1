const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [resultado, setResultado] = useState([]);
  useEffect(() => {
    Resultado();
  }, []);

  const Resultado = async () => {
    try {
      const result = await axios.get("api/diagnostico/" + localStorage.getItem('id_diagnostico_completo'));
      setResultado(result.data);
      window.print();
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
  }, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.print(),
    style: {
      float: 'right',
      cursor: 'pointer'
    },
    className: "no-print"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/print.png",
    alt: ""
  }))), resultado.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "Verdana",
        fontSize: "16px",
        lineHeight: "25px",
        width: "800px",
        margin: "auto"
      },
      key: "resultado" + item.id_recurso
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "img/dimensao" + item.id_dimensao + ".png",
      width: "80",
      style: {
        float: "left",
        marginRight: "15px"
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0"
      }
    }, "DIMENS\xC3O ", item.id_dimensao), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0"
      }
    }, /*#__PURE__*/React.createElement("strong", null, item.titulo)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0"
      }
    }, "Veja abaixo os resultados por indicador:")), /*#__PURE__*/React.createElement("div", {
      style: {
        clear: "both",
        margin: "15px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        float: "both"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        float: "left"
      }
    }, item.risco), /*#__PURE__*/React.createElement("h2", {
      style: {
        float: "right"
      }
    }, item.pontos, " pontos"), /*#__PURE__*/React.createElement("div", {
      style: {
        float: "both"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        clear: "both",
        margin: "15px 0"
      }
    }, /*#__PURE__*/React.createElement("hr", null)), item.indicadores !== undefined ? item.indicadores.map((indicador, key) => {
      return /*#__PURE__*/React.createElement("div", {
        key: "indicadores" + indicador.id_recurso
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Indicador ", indicador.numero, " - ", indicador.titulo)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        style: {
          float: "left"
        }
      }, indicador.risco), /*#__PURE__*/React.createElement("p", {
        style: {
          float: "right"
        }
      }, indicador.pontos, " pontos"), /*#__PURE__*/React.createElement("div", {
        style: {
          float: "both"
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          clear: "both",
          margin: "15px 0"
        }
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, "CONSEQU\xCANCIA: "), indicador.consequencia)), /*#__PURE__*/React.createElement("table", {
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
      }, "Tipo"))), /*#__PURE__*/React.createElement("tbody", null, indicador.recursos !== undefined ? indicador.recursos.map((recurso, key) => {
        return /*#__PURE__*/React.createElement("tr", {
          key: "recurso" + recurso.id_recurso
        }, /*#__PURE__*/React.createElement("th", {
          style: {
            borderBottom: "solid 1px #CCCCCC",
            padding: "5px"
          }
        }, recurso.id_recurso), /*#__PURE__*/React.createElement("td", {
          style: {
            borderBottom: "solid 1px #CCCCCC",
            padding: "5px"
          }
        }, recurso.nome, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Idiomas:\xA0", recurso.links !== undefined ? recurso.links.map((link, key) => {
          return /*#__PURE__*/React.createElement("a", {
            href: link.uri,
            target: "_blank",
            key: "link" + link.id_link
          }, link.idioma, recurso.links.length !== key + 1 ? ' - ' : '');
        }) : null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Autoria:\xA0", recurso.autoria !== undefined ? recurso.autoria.map((autoria, key) => {
          return /*#__PURE__*/React.createElement("span", {
            key: "autoria" + key
          }, autoria.autor.nome, item.autoria.length !== key + 1 ? ', ' : '');
        }) : null)), /*#__PURE__*/React.createElement("td", {
          style: {
            borderBottom: "solid 1px #CCCCCC",
            padding: "5px"
          }
        }, recurso.esfera), /*#__PURE__*/React.createElement("td", {
          style: {
            borderBottom: "solid 1px #CCCCCC",
            padding: "5px"
          }
        }, recurso.tipo_recurso.nome));
      }) : null)));
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        pageBreakAfter: "always"
      }
    }));
  }));
};