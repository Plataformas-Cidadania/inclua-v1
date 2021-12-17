const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [recursos, setRecursos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(2);
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
  }, []);
  useEffect(() => {
    Recurso();
  }, [page]);

  const Recurso = async () => {
    try {
      //const result = await axios.get('json/recursos.json');
      //const result = await axios.get('api/recurso');
      const result = await axios.get('api/recurso/paginado/' + perPage, {
        params: {
          page: page + 1
        }
      });
      console.log('data', result.data);
      setRecursos(result.data.data);
      setTotal(result.data.total);
    } catch (error) {
      //alert('erro');
      console.log(error);
    }
  };

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
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
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