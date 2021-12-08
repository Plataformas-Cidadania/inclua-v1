const Recurso = () => {
  const {
    useState,
    useEffect
  } = React;
  const [recursoMap, setRecursoMap] = useState([]);
  useEffect(() => {
    RecursoAjax();
  }, []);

  const RecursoAjax = async () => {
    try {
      //const result = await axios.get('json/recursos.json');
      const result = await axios.get('api/recurso');
      console.log(result.data.data);
      setRecursoMap(result.data.data);
    } catch (error) {
      alert('erro'); //console.log(error);
    }
  };

  let icon = {
    1: 'far fa-file-pdf',
    2: 'far fa-file-word',
    3: 'far fa-file-image',
    4: 'far fa-file-video',
    5: 'fas fa-link'
  };
  let menu = [{
    id: 1,
    title: "Tema",
    txt: 'Busque por tema',
    rota: ''
  }, {
    id: 2,
    title: "Tipo",
    txt: 'Busque por tipo',
    rota: ''
  }, {
    id: 3,
    title: "Palavra-chave",
    txt: 'Busque por palavra-chave',
    rota: ''
  }, {
    id: 4,
    title: "Classificação",
    txt: 'Busque por Classificação',
    rota: ''
  }];

  const btnSearch = (id, txt, rota) => {
    console.log(id, txt, rota);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rol-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "menu-small mb-2"
  }, menu.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "cursor",
      key: 'menu_' + key,
      onClick: () => btnSearch(item.id, item.txt, item.rota)
    }, item.title);
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement("input", {
    id: "ativarBox",
    type: "text",
    className: "form-control",
    placeholder: "Busque um ...."
  }), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "box-search-itens box-busca"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/load.gif",
    alt: "",
    width: "60",
    className: "login-img"
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)))), recursoMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-md-4",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 text-center box-list-cod"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "mt-4"
    }, "C\xF3digo"), /*#__PURE__*/React.createElement("h2", null, item.id_recurso)), /*#__PURE__*/React.createElement("div", {
      className: "p-2 box-list-title"
    }, /*#__PURE__*/React.createElement("p", {
      className: "mt-2"
    }, item.nome)), /*#__PURE__*/React.createElement("div", {
      className: "clear-both"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/React.createElement("img", {
      src: "img/lines.png",
      alt: "",
      width: "90%"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-4 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 box-list-i"
    }, /*#__PURE__*/React.createElement("i", {
      className: icon[item.id_formato] + " fa-3x"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, "\xA0")), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 box-list-p"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Esfera:"), " ", /*#__PURE__*/React.createElement("span", null, item.esfera)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Idioma:"), item.links.map((link, key) => {
      return /*#__PURE__*/React.createElement("span", null, " ", link.idioma, ",");
    })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Tipo:"), " ", /*#__PURE__*/React.createElement("span", null, item.tipo_recurso ? item.tipo_recurso.nome : '')), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Autoria:"), item.autoria.map((autoria, key) => {
      return /*#__PURE__*/React.createElement("span", null, " ", autoria.autor.nome, ",");
    })), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-9"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-theme bg-pri",
      type: "button"
    }, "Acessar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "col-3 d-flex justify-content-end"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-copy fa-2x "
    })))), /*#__PURE__*/React.createElement("br", null));
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Page navigation example"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "Previous")), /*#__PURE__*/React.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "1")), /*#__PURE__*/React.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "2")), /*#__PURE__*/React.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "3")), /*#__PURE__*/React.createElement("li", {
    className: "page-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    href: "#"
  }, "Next")))), /*#__PURE__*/React.createElement("br", null)));
};