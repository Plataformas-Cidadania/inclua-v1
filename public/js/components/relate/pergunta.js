const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [relateMap, setRelateMap] = useState([]);
  useEffect(() => {
    Relate();
  }, []);

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
      className: "col-md-3 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-frown fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "N\xE3o gostei")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-3 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-meh fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Indiferente")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-3 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-smile fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Gostei")), /*#__PURE__*/React.createElement("div", {
      className: "col-md-3 text-center"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-heart fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Amei"))))), /*#__PURE__*/React.createElement("br", null));
  }));
};