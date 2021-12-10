const List = () => {
  const {
    useState,
    useEffect
  } = React;
  const [listMap, setListMap] = useState([]);
  const [varTrash, setVarTrash] = useState(0);
  const [varIdRedurso = setIdRedurso] = useState(0);
  useEffect(() => {
    listGet();
  }, []);
  /*useEffect(() => {
      setIdRedurso;
  }, [varIdRedurso]);*/

  const listGet = async () => {
    try {
      const result = await axios.get('api/recurso');
      setListMap(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickDell = async id => {
    try {
      const result = await axios.delete('api/recurso/' + id);
      listGet();
    } catch (error) {
      console.log(error);
    }
  };

  const clickTrash = id => {
    setVarTrash(id);
  };

  const clickEdit = id => {
    setIdRedurso(id);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container float-end"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri",
    type: "button",
    "data-bs-toggle": "modal",
    "data-bs-target": "#insertModal"
  }, "Adicionar ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Nome"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Esfera"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Formato"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "A\xE7\xF5es"))), /*#__PURE__*/React.createElement("tbody", null, listMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: 'table_' + key
    }, /*#__PURE__*/React.createElement("td", null, item.nome), /*#__PURE__*/React.createElement("td", null, item.esfera), /*#__PURE__*/React.createElement("td", null, item.formato_recurso.nome), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.id_recurso === varTrash ? 'none' : ''
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cursor",
      "data-bs-toggle": "modal",
      "data-bs-target": "#putModal",
      onClick: () => clickEdit(item.id_recurso)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-edit fa-2x"
    })), "\xA0", /*#__PURE__*/React.createElement("span", {
      onClick: () => clickTrash(item.id_recurso),
      className: "cursor"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-trash-alt fa-2x"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.id_recurso === varTrash ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "badge bg-secondary cursor",
      onClick: () => clickTrash(0)
    }, "Cancelar"), "\xA0", /*#__PURE__*/React.createElement("span", {
      className: "badge bg-danger cursor",
      onClick: () => clickDell(item.id_recurso)
    }, "Excluir"))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "insertModal",
    tabIndex: "-1",
    "aria-labelledby": "insertModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "insertModalLabel"
  }, "Inserir"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(Insert, null)), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Fechar"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "putModal",
    tabIndex: "-1",
    "aria-labelledby": "putModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "putModalLabel"
  }, "Inserir - ", varIdRedurso), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(Edit, {
    id_recurso: varIdRedurso
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Fechar"))))));
};