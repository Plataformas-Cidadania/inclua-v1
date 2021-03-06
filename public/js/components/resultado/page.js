const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [resultado, setResultado] = useState([]);
  const [groupRecurso, setGroupRecurso] = useState(null);
  const [dimensao, setDimensao] = useState(0);
  const [categoriaResultado, setCategoriaResultado] = useState([]);
  useEffect(() => {
    setDimensao(primeiraDimensaoRespondida());
  }, []);
  useEffect(() => {
    Resultado();
    categoriasResultado();
  }, [dimensao]);

  const Resultado = async () => {
    try {
      //const result = await axios.get('json/resultado.json');
      const result = await axios.get("api/diagnostico/" + dimensao + "/" + localStorage.getItem('id_diagnostico'));
      setResultado(result.data);
      console.log('***', Math.round(result.data.indicadores[0].posPontos));
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

  const primeiraDimensaoRespondida = () => {
    const respostas = JSON.parse(localStorage.getItem('respostas_diagnostico'));
    const dimensoesRespondidas = respostas.map(item => {
      return item.id_dimensao;
    });
    const idsDimensoesRespondidas = dimensoesRespondidas.filter((value, key) => dimensoesRespondidas.indexOf(key) !== key);
    return idsDimensoesRespondidas.sort().shift();
  };

  const ClickRecurso = key => {
    key = groupRecurso === key ? null : key;
    setGroupRecurso(key);
  };

  const ClickDimensao = id => {
    setDimensao(id);
  };

  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  }; //bgColor = bgColor[resultado.id_dimensao];

  bgColor = bgColor[dimensao]; //console.log('----', resultado.indicadores);

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3"
  }, "\xA0"), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt dorder-container-mai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-line"
  }, /*#__PURE__*/React.createElement("h1", null, "Diagn\xF3stico ", resultado.tipo_diagnostico === 1 ? 'Completo' : 'Parcial'), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-box bg-lgt"
  })))), /*#__PURE__*/React.createElement("div", null, "\xA0")), /*#__PURE__*/React.createElement("div", {
    className: "container-fluid  bg-lgt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Oferta p\xFAblica sob foco"), /*#__PURE__*/React.createElement("br", null), resultado.oferta_publica, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Qual(is) grupo(s) ou popula\xE7\xE3o(\xF5es) espec\xEDfica(s) ir\xE1 focar?"), /*#__PURE__*/React.createElement("br", null), resultado.grupo_focal, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Categorias selecionadas"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("ul", {
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
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/bg-top.png",
    alt: "",
    width: "80%",
    className: "float-end"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-11 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center nav-icons"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao1.png",
    alt: "",
    onClick: () => ClickDimensao(1),
    className: "cursor " + (dimensao === 1 ? "nav-icons-select" : "opacity-5")
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao2.png",
    alt: "",
    onClick: () => ClickDimensao(2),
    className: "cursor " + (dimensao === 2 ? "nav-icons-select" : "opacity-5")
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao3.png",
    alt: "",
    onClick: () => ClickDimensao(3),
    className: "cursor " + (dimensao === 3 ? "nav-icons-select" : "opacity-5")
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao4.png",
    alt: "",
    onClick: () => ClickDimensao(4),
    className: "cursor " + (dimensao === 4 ? "nav-icons-select" : "opacity-5")
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao5.png",
    alt: "",
    onClick: () => ClickDimensao(5),
    className: "cursor " + (dimensao === 5 ? "nav-icons-select" : "opacity-5")
  }), /*#__PURE__*/React.createElement("hr", null))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-1"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "/imprimir",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/print.png",
    alt: "",
    className: "float-end m-2 cursor",
    style: {
      width: '35px'
    }
  }))))), resultado.pontos === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: bgColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao" + dimensao + "-g.png",
    alt: "",
    width: "100"
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", dimensao)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, resultado.titulo))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", {
    className: "text-center"
  }, "A DIMENS\xC3O ", dimensao, " n\xE3o foi respondida neste diagn\xF3stico"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: bgColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao" + dimensao + "-g.png",
    alt: "",
    width: "100"
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", dimensao)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, resultado.titulo), /*#__PURE__*/React.createElement("p", {
    className: "mb-5"
  }, "Veja abaixo os resultados por indicador:"))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2 text-center"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("strong", null, resultado.risco))))))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, resultado.indicadores ? resultado.indicadores.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-md-12",
      key: 'indicadores_' + key
    }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("br", null), "Indicador ", item.numero, " - ", item.titulo), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement(BarChart, {
      id: 'bar-chart' + key,
      series: item.series,
      annotationsX: Math.round(item.posPontos)
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-8"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "CONSEQU\xCANCIA:"), " ", item.consequencia), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-4"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: bgColor
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12 text-center"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '22px',
        lineHeight: '30px'
      }
    }, /*#__PURE__*/React.createElement("strong", null, item.risco)))))))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12 text-right",
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
      onClick: () => ClickRecurso(key),
      className: "cursor",
      style: {
        fontSize: '20px'
      }
    }, "Indica\xE7\xF5es de ", item.recursos.length, " recursos para interven\xE7\xE3o ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12",
      style: {
        display: groupRecurso === key ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement("h2", null, "Recursos"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Item, {
      propsData: item.recursos,
      grupo: item.numero
    })))));
  }) : null))));
};