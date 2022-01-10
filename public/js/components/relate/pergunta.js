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
    }, /*#__PURE__*/React.createElement("p", null, key + 1, " - ", item.descricao), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "story",
      name: "story",
      rows: "5",
      cols: "33",
      placeholder: "Deixe um comentário"
    }), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container justify-content-end"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-theme bg-pri float-end",
      type: "button"
    }, "Enviar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))))))), /*#__PURE__*/React.createElement("br", null));
  }));
};