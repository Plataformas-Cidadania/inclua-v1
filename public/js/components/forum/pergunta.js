const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [forumMap, setForumMap] = useState([]);
  useEffect(() => {
    Forum();
  }, []);

  const Forum = async () => {
    try {
      const result = await axios.get('json/forum.json');
      setForumMap(result.data.itens);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, forumMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-md-12",
      key: key
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-4 col-md-12"
    }, /*#__PURE__*/React.createElement("p", null, item.votos, /*#__PURE__*/React.createElement("br", null), "votos"), /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-4 col-md-12"
    }, /*#__PURE__*/React.createElement("p", null, item.respostas, /*#__PURE__*/React.createElement("br", null), "resp."), /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-4 col-md-12"
    }, /*#__PURE__*/React.createElement("p", null, item.visualizacoes, /*#__PURE__*/React.createElement("br", null), "views"), /*#__PURE__*/React.createElement("hr", null))))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-11"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container",
      style: {
        minHeight: "225px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-3"
    }, /*#__PURE__*/React.createElement("a", {
      href: "interaja-detalhar"
    }, /*#__PURE__*/React.createElement("h2", null, item.pergunta), /*#__PURE__*/React.createElement("p", null, item.descricao), /*#__PURE__*/React.createElement("h5", {
      className: "float-end"
    }, "criado 46 segundos atr\xE1s"))))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("hr", null))));
  }));
};