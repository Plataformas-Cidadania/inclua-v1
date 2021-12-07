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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container float-end"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri",
    type: "button",
    "data-bs-toggle": "modal",
    "data-bs-target": "#exampleModal"
  }, "Inserir pergunta ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }))), /*#__PURE__*/React.createElement("br", null), forumMap.map((item, key) => {
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "exampleModal",
    tabIndex: "-1",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, "Modal title"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, "..."), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary"
  }, "Save changes"))))));
};