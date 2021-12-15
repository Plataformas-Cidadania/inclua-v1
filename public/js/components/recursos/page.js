const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [recursoMap, setRecursoMap] = useState([]);
  useEffect(() => {
    Recurso();
  }, []);

  const Recurso = async () => {
    try {
      //const result = await axios.get('json/recursos.json');
      const result = await axios.get('api/recurso');
      console.log(result.data.data);
      setRecursoMap(result.data.data);
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
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement(Item, {
    propsData: recursoMap
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