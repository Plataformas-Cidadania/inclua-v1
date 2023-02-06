const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [curadorias, setCuradorias] = useState([]);
  const [total, setTotal] = useState(0);
  const [activeDiv, setActiveDiv] = useState(0);
  const [newDatas, setNewDatas] = useState([]);
  useEffect(() => {
    Curadoria();
  }, []);

  const Curadoria = async () => {
    try {
      const result = await axios.get('api/curadoria', {});
      setCuradorias(result.data.data);
      setTotal(result.data.data.length);
      const arrayDatas = [];
      result.data.data.map(item => {
        arrayDatas.push(item.mes);
      });
      const datasSemRepeticao = [...new Set(arrayDatas)];
      setNewDatas(datasSemRepeticao.sort());
    } catch (error) {
      console.log(error);
    }
  };

  const clickBox = id => {
    setActiveDiv(id);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'right'
    }
  }, total, " curadorias"), curadorias.map((item, key) => {
    let recursos = []; //////////////////

    item.curadoria_recurso.map(item2 => {
      recursos.push(item2.recursos);
    }); //////////////////

    return /*#__PURE__*/React.createElement("a", {
      href: "curadoria/" + item.id_curadoria
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 " + (key === 0 ? 'bg-lgt' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.curador.url_imagem,
      alt: "",
      width: "100%",
      style: {
        marginBottom: '20px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("div", null, item.mes), /*#__PURE__*/React.createElement("h2", null, item.tema_recorte)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("strong", null, item.curador.nome)))), /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.texto.slice(0, 400) + " ..."
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("a", {
      href: "curadoria/" + item.id_curadoria,
      className: "btn btn-theme bg-pri",
      type: "button"
    }, "Continue lendo ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))), /*#__PURE__*/React.createElement("hr", {
      style: {
        display: key === 0 ? 'none' : ''
      }
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("h2", null, "Arquivo"), /*#__PURE__*/React.createElement("ul", {
    className: "menu-left"
  }, newDatas.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "list-group-item-theme",
      key: 'datas' + key
    }, /*#__PURE__*/React.createElement("a", null, dataExt(item)));
  }))));
};