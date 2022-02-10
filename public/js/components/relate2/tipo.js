const Tipo = () => {
  const {
    useState,
    useEffect
  } = React;
  const [tipoPergunta, setTipoPergunta] = useState([]);
  useEffect(() => {
    Tipos();
  }, []);

  const Tipos = async () => {
    try {
      const result = await axios.get('api/tipo_pergunta_relate');
      setTipoPergunta(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, tipoPergunta.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'pergunta' + item.id_tipo
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container-mai p-4 "
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, key + 1, " - ", item.descricao)), /*#__PURE__*/React.createElement(Pergunta, {
      id_tipo: item.id_tipo
    }))), /*#__PURE__*/React.createElement("br", null));
  }));
};