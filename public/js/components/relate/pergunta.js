const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [relateMap, setRelateMap] = useState([]);
  const [relate, setRelate] = useState(0);
  useEffect(() => {
    Relate();
  }, []); //console.log('relate', relate);

  const ClickRelate = (id, key) => {
    console.log(id, key);
    setRelate(id, key);
  };

  const Relate = async () => {
    try {
      const result = await axios.get('json/relate.json');
      setRelateMap(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, relateMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container-mai p-4 "
    }, /*#__PURE__*/React.createElement("p", null, key + 1, " - ", item.descricao), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-1 text-center"
    }, "\xA0"), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2 text-center cursor",
      onClick: () => ClickRelate(item.id, 1)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-tired fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Detestei")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2 text-center cursor",
      onClick: () => ClickRelate(item.id, 2)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-frown fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "N\xE3o gostei")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2 text-center cursor",
      onClick: () => ClickRelate(item.id, 3)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-meh fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Indiferente")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2 text-center cursor",
      onClick: () => ClickRelate(item.id, 4)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-smile fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Gostei")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2 text-center cursor",
      onClick: () => ClickRelate(item.id, 5)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-grin-hearts fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Adorei")), /*#__PURE__*/React.createElement("textarea", {
      id: "story",
      name: "story",
      rows: "5",
      cols: "33",
      placeholder: "Deixe um comentário",
      style: {
        display: item.id === relate ? '' : 'none'
      }
    })))), /*#__PURE__*/React.createElement("br", null));
  }));
};