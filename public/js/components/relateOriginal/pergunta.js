const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [relateMap, setRelateMap] = useState([]);
  const [relate, setRelate] = useState(0);
  useEffect(() => {
    Relate();
  }, []);

  const ClickRelate = (id, key) => {
    setRelate(id, key);
  };

  const Relate = async () => {
    try {
      const result = await axios.get('api/pergunta_relate');
      setRelateMap(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, relateMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'pergunta' + item.id_pergunta
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container-mai p-4 "
    }, /*#__PURE__*/React.createElement("p", null, key + 1, " - ", item.descricao), /*#__PURE__*/React.createElement(Tipo, null), /*#__PURE__*/React.createElement(Insert, {
      id_pergunta: item.id_pergunta,
      id_user: id_user
    }))), /*#__PURE__*/React.createElement("br", null));
  }));
};