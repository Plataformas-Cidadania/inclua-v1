const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [resultado, setResultado] = useState([]);
  const [categoriaResultado, setCategoriaResultado] = useState([]);
  useEffect(() => {
    Resultado();
    categoriasResultado();
  }, []);

  const Resultado = async () => {
    try {
      const result = await axios.get("api/diagnostico/" + localStorage.getItem('id_diagnostico'));
      setResultado(result.data);
      setTimeout(showSubmit, 1000);

      function showSubmit() {
        window.print();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const categoriasResultado = async () => {
    try {
      const result = await axios.get("api/categoria_diagnostico/nomes/" + localStorage.getItem('id_diagnostico'));
      setCategoriaResultado(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  let grupo_focal = "";
  let oferta_publica = "";
  let tipo_diagnostico = 0;

  if (resultado[0]) {
    grupo_focal = resultado[0].grupo_focal;
    oferta_publica = resultado[0].oferta_publica;
    tipo_diagnostico = resultado[0].tipo_diagnostico;
  }

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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana",
      fontSize: "16px",
      lineHeight: "25px",
      width: "800px",
      margin: "auto"
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center"
    }
  }, "Diagn\xF3stico ", tipo_diagnostico === 1 ? 'Completo' : 'Parcial'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Oferta p\xFAblica sob foco"), /*#__PURE__*/React.createElement("br", null), oferta_publica, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Qual(is) grupo(s) ou popula\xE7\xE3o(\xF5es) espec\xEDfica(s) ir\xE1 focar?"), /*#__PURE__*/React.createElement("br", null), grupo_focal, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Oferta p\xFAblica e/ou o grupo(s) espec\xEDfico(s) em rela\xE7\xE3o aos quais ir\xE1 conduzir o dian\xF3stico:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      padding: '0'
    }
  }, categoriaResultado.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      style: {
        display: 'inline-block',
        border: "solid 1px #333333",
        padding: '5px 10px',
        margin: '5px',
        borderRadius: '3px'
      },
      key: key
    }, item);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      pageBreakAfter: "always"
    }
  })), resultado.map((item, key) => {
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
      width: "60",
      style: {
        float: "left",
        marginRight: "15px"
      }
    }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", item.id_dimensao), /*#__PURE__*/React.createElement("h3", null, item.titulo), /*#__PURE__*/React.createElement("h4", {
      style: {
        display: item.pontos === 0 ? 'none' : ''
      }
    }, "Veja abaixo os resultados por indicador:")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.pontos === 0 ? 'none' : ''
      }
    }, /*#__PURE__*/React.createElement("div", {
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
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-15"
      }, /*#__PURE__*/React.createElement("strong", null, "Indicador ", indicador.numero, " - ", indicador.titulo)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
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
      })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(BarChart, {
        id: 'bar-chart' + key,
        series: indicador.series,
        annotationsX: Math.round(indicador.posPontos)
      }), /*#__PURE__*/React.createElement("div", {
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
          }, autoria.autor.nome);
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
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        pageBreakAfter: "always"
      }
    }));
  }));
};