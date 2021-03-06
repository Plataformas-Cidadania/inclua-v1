const ListOff = props => {
  const {
    useState,
    useEffect
  } = React;
  const [listMap, setListMap] = useState([]);
  const [varTrash, setVarTrash] = useState(0);
  const [idRelate, setIdRelate] = useState(0);
  /*useEffect(() => {
      listGet();
  }, []);*/

  useEffect(() => {
    listGet();
  }, [props]);

  const listGet = async () => {
    try {
      //const result = await axios.get('api/resposta_relate/');
      const result = await axios.get('api/resposta_relate/perguntaRelate/' + props.pergunta_id + '/user/' + id_user);
      setListMap(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickDell = async id => {
    try {
      const result = await axios.delete('api/resposta_relate/' + id);
      listGet();
    } catch (error) {
      console.log(error);
    }
  };

  const clickTrash = id => {
    setVarTrash(id);
  };

  const clickEdit = id => {
    console.log(id);
    setIdRelate(id);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "A\xE7\xF5es"))), /*#__PURE__*/React.createElement("tbody", null, listMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: 'table_' + key
    }, /*#__PURE__*/React.createElement("td", null, item.descricao), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("div", {
      className: "badge " + (item.status === 0 ? 'bg-warning text-dark' : 'bg-success')
    }, item.status === 0 ? 'Em analise' : 'Aprovado')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.id_resposta === varTrash ? 'none' : ''
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "cursor",
      "data-bs-toggle": "modal",
      "data-bs-target": "#putModal" + props.pergunta_id,
      onClick: () => clickEdit(item.id_resposta)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-edit fa-2x"
    })), "\xA0", /*#__PURE__*/React.createElement("span", {
      onClick: () => clickTrash(item.id_resposta),
      className: "cursor"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-trash-alt fa-2x"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.id_resposta === varTrash ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "badge bg-secondary cursor",
      onClick: () => clickTrash(0)
    }, "Cancelar"), "\xA0", /*#__PURE__*/React.createElement("span", {
      className: "badge bg-danger cursor",
      onClick: () => clickDell(item.id_resposta)
    }, "Excluir"))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "putModal" + props.pergunta_id,
    tabIndex: "-1",
    "aria-labelledby": "putModalLabel" + props.pergunta_id,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "putModalLabel" + props.pergunta_id
  }, "Editar")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(Edit, {
    id_resposta: idRelate,
    listGet: listGet
  }))))));
};