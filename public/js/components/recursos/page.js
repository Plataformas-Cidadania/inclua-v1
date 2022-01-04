const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [recursos, setRecursos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(12);
  const [menuItens, setSearch] = useState({
    id: 1,
    title: "Categoria",
    txt: 'Busque por categoria',
    rota: 'recurso/categoria/',
    type: true
  });
  const [menuLi, setMenuLi] = useState(1);
  const [listMenu, setListMenu] = useState([]);
  const [spinList, setspinList] = useState(false);
  const menu = [{
    id: 1,
    title: "Categoria",
    txt: 'Busque por categoria',
    rota: 'api/recurso/categoria/',
    type: true
  }, {
    id: 2,
    title: "Tipo",
    txt: 'Busque por tipo',
    rota: 'api/recurso/tipo_recurso/',
    type: true
  }, {
    id: 3,
    title: "Palavra-chave",
    txt: 'Busque por palavra-chave',
    rota: 'api/recurso/palavra_chave/',
    type: false
  }, {
    id: 4,
    title: "Indicador",
    txt: 'Busque por indicador',
    rota: '',
    type: true
  } //{id: 5, title: "Autores", txt: 'Busque por autores', rota: 'recurso/autores/{recurso}'},
  ];
  useEffect(() => {
    Recurso();
  }, []);
  useEffect(() => {
    Recurso();
  }, [page]);

  const Recurso = async () => {
    try {
      const result = await axios.get('api/recurso/paginado/' + perPage, {
        params: {
          page: page + 1
        }
      });
      setRecursos(result.data.data);
      setTotal(result.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async e => {
    setspinList(false);
    const search = e.target.value ? e.target.value : ' ';

    try {
      setspinList(true);
      const result = await axios.get(menuItens.rota + search, {});
      console.log('-----', result.data.data);
      setListMenu(result.data.data);
      setRecursos(result.data.data);
      setTotal(result.data.total);
    } catch (error) {
      setspinList(false);
      console.log(error);
    }
  };

  const btnSearch = item => {
    setSearch(item);
    setMenuLi(item.id);
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "menu-small  mb-2"
  }, menu.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "cursor " + (menuLi === item.id ? 'menu-small-on' : ''),
      key: 'menu_' + key,
      onClick: () => btnSearch(item)
    }, item.title);
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement("input", {
    id: "ativarBox",
    type: "text",
    className: "form-control",
    placeholder: menuItens.txt,
    onChange: handleSearch,
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: menuItens.type ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "box-search-itens box-busca"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fa-3x text-center",
    style: {
      display: spinList ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-circle-notch fa-spin"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "list-search"
  }, listMenu.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "cursor ",
      key: 'list_' + key //onClick={() => btnSearch(item)}

    }, item.nome);
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'right'
    }
  }, total, " recursos")))), /*#__PURE__*/React.createElement(Item, {
    propsData: recursos
  }), /*#__PURE__*/React.createElement(Paginate, {
    setPage: setPage,
    total: total,
    page: page,
    perPage: perPage
  }));
};