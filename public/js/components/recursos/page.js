const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [recursoMap, setRecursoMap] = useState([]);
  const [recursoMapPaginate, setRecursoMapPaginate] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerpage] = useState(2);
  const [pagination, setPagination] = useState(null);
  const menu = [{
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
  useEffect(() => {
    Recurso();
    paginate();
  }, []);

  const Recurso = async () => {
    try {
      //const result = await axios.get('json/recursos.json');
      //const result = await axios.get('api/recurso');
      const result = await axios.get('api/recurso/paginado/' + perPage, {
        params: {
          page: 1
        }
      });
      console.log(result.data.data);
      setRecursoMap(result.data.data);
      setRecursoMapPaginate(result.data);
    } catch (error) {
      //alert('erro');
      console.log(error);
    }
  };
  /*let icon = {
      1:'far fa-file-pdf',
      2:'far fa-file-word',
      3:'far fa-file-image',
      4:'far fa-file-video',
      5:'fas fa-link',
  };*/


  const btnSearch = (id, txt, rota) => {
    console.log(id, txt, rota);
  };

  const paginate = () => {
    /*///////////////*/
    //MONTANDO A PAGINAÇÃO
    let pagina = recursoMapPaginate;
    let p = []; //armazena todas as paginas

    let pages = []; //paginas q serão mostradas
    //let n_paginas = Math.ceil(this.state.totalOscList/10);

    let n_paginas = Math.ceil(10 / 10); //console.log('pagina', pagina);

    let qtdPages = 5;

    for (let i = 0; i < n_paginas; i++) {
      let active = recursoMapPaginate === i ? 'active' : '';
      p[i] = /*#__PURE__*/React.createElement("li", {
        className: "page-item " + active
      }, /*#__PURE__*/React.createElement("a", {
        className: "page-link",
        style: {
          cursor: 'pointer'
        }
      }, i + 1));
    }

    if (n_paginas <= 10) {
      for (let i = 0; i < qtdPages; i++) {
        let active = recursoMapPaginate === i ? 'active' : '';
        pages.push(p[i]);
      }
    } else {
      if (pagina <= 5) {
        pages.push(p[0]);
        pages.push(p[1]);
        pages.push(p[2]);
        pages.push(p[3]);
        pages.push(p[4]);
        pages.push(p[5]);
        pages.push(p[6]);
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: "page-item "
        }, /*#__PURE__*/React.createElement("a", {
          className: "page-link",
          href: "#"
        }, "...")));
        pages.push(p[n_paginas - 1]);
      } else if (pagina === n_paginas - 1 || pagina === n_paginas - 2) {
        pages.push(p[0]);
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: "page-item "
        }, /*#__PURE__*/React.createElement("a", {
          className: "page-link",
          href: "#"
        }, "...")));
        pages.push(p[n_paginas - 8]);
        pages.push(p[n_paginas - 7]);
        pages.push(p[n_paginas - 6]);
        pages.push(p[n_paginas - 5]);
        pages.push(p[n_paginas - 4]);
        pages.push(p[n_paginas - 3]);
        pages.push(p[n_paginas - 2]);
        pages.push(p[n_paginas - 1]);
      } else {
        pages.push(p[0]);
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: "page-item "
        }, /*#__PURE__*/React.createElement("a", {
          className: "page-link",
          href: "#"
        }, "...")));

        if (parseInt(pagina) + 4 < n_paginas - 1) {
          pages.push(p[parseInt(pagina) - 3]);
          pages.push(p[parseInt(pagina) - 2]);
          pages.push(p[parseInt(pagina) - 1]);
          pages.push(p[pagina]);
          pages.push(p[parseInt(pagina) + 1]);
          pages.push(p[parseInt(pagina) + 2]);
          pages.push(p[parseInt(pagina) + 3]);
          pages.push( /*#__PURE__*/React.createElement("li", {
            className: "page-item "
          }, /*#__PURE__*/React.createElement("a", {
            className: "page-link",
            href: "#"
          }, "...")));
        } else {
          pages.push(p[n_paginas - 8]);
          pages.push(p[n_paginas - 7]);
          pages.push(p[n_paginas - 6]);
          pages.push(p[n_paginas - 5]);
          pages.push(p[n_paginas - 4]);
          pages.push(p[n_paginas - 3]);
          pages.push(p[n_paginas - 2]);
          pages.push(p[n_paginas - 1]);
        }

        pages.push(p[n_paginas - 1]);
      }
    }

    setPagination( /*#__PURE__*/React.createElement("ul", {
      className: "pagination"
    }, /*#__PURE__*/React.createElement("li", {
      className: "page-item disabled"
    }, /*#__PURE__*/React.createElement("a", {
      className: "page-link",
      href: "#",
      tabIndex: "-1"
    }, "Anterior")), pages, /*#__PURE__*/React.createElement("li", {
      className: "page-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: "page-link",
      href: "#"
    }, "Pr\xF3ximo"))));
    /*///////////////*/
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
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'right'
    }
  }, recursoMapPaginate.total, " recursos")))), /*#__PURE__*/React.createElement(Item, {
    propsData: recursoMap
  }), pagination);
};