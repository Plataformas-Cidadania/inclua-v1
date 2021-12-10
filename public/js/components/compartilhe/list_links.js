const ListLinks = props => {
  const {
    useState,
    useEffect
  } = React;
  const [listMap, setListMap] = useState([]);
  const [varTrash, setVarTrash] = useState(0);
  useEffect(() => {
    listGet();
  }, [props.listLinks]);

  const listGet = async () => {
    try {
      const result = await axios.get('api/link');
      setListMap(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickDell = async id => {
    try {
      const result = await axios.delete('api/link/' + id);
      listGet();
    } catch (error) {
      console.log(error);
    }
  };

  const clickTrash = id => {
    setVarTrash(id);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    className: "table table-hover"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Uri"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Idioma"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "A\xE7\xF5es"))), /*#__PURE__*/React.createElement("tbody", null, listMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: 'table_' + key
    }, /*#__PURE__*/React.createElement("td", null, item.uri), /*#__PURE__*/React.createElement("td", null, item.idioma), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.id_link === varTrash ? 'none' : ''
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => clickTrash(item.id_link),
      className: "cursor"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-trash-alt fa-2x"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: item.id_link === varTrash ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "badge bg-secondary cursor",
      onClick: () => clickTrash(0)
    }, "Cancelar"), "\xA0", /*#__PURE__*/React.createElement("span", {
      className: "badge bg-danger cursor",
      onClick: () => clickDell(item.id_link)
    }, "Excluir"))));
  }))));
};