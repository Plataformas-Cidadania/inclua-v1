const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [relateMap, setRelateMap] = useState([]);
  const [relate, setRelate] = useState(0);
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });
  const [repostas, setRespostas] = useState([]);
  /*{
      descricao: '',
      id_pergunta: 0,
      id_user: id_user,
      status: 0,
  }*/

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

  const handleNotify = notify => {
    setNotify(notify);
  };

  const Insert = async () => {
    handleNotify({
      type: null,
      text: null,
      spin: true
    });

    try {
      const result = await axios.post('api/resposta_relate', form);
      handleNotify({
        type: 'success',
        text: 'Resposta inserida com sucesso!',
        spin: false
      }); //Limpar form

      let newForm = { ...form,
        descricao: ""
      };
      setForm(newForm); ////

      setTeste(true);
    } catch (error) {
      console.log(error);
      handleNotify({
        type: 'danger',
        text: 'Resposta não foi inserido, tente novamente!',
        spin: false
      });
    }
  };

  const handleForm = event => {
    let {
      value,
      id
    } = event.target;
    let newForm = { ...form,
      [id]: value
    };
    setForm(newForm);
  };

  const listAlternativas = async id_pergunta => {
    try {
      const result = await axios.get('api/alternativa_relate/perguntaRelate/' + id_pergunta);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("form", null, relateMap.map((item, key) => {
    const descricao = item.descricao;

    if (item.tipo_resposta === 2) {
      const alternativas = listAlternativas(item.id_pergunta);
      console.log(alternativas);
    }

    return /*#__PURE__*/React.createElement("div", {
      key: 'pergunta' + item.id_pergunta
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container-mai p-4 "
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: descricao
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, item.tipo_resposta === 1 ? /*#__PURE__*/React.createElement("textarea", {
      id: "descricao",
      name: "descricao",
      rows: "5",
      cols: "33",
      placeholder: "Deixe um descrição",
      onChange: handleForm,
      value: "",
      style: {
        width: '100%'
      }
    }) : alternativas.map(alternativa => {
      return /*#__PURE__*/React.createElement("input", {
        key: "alternativa_" + alternativa.id_alternativa,
        type: "option",
        name: "alternativa_" + item.id_pergunta,
        id: "alternativa_" + item.id_pergunta + "_" + alternativa.id_alternativa
      });
    }))))), /*#__PURE__*/React.createElement("br", null));
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container justify-content-end"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri ",
    type: "button",
    onClick: () => Insert()
  }, "Enviar", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '10px',
      display: notify.spin ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner float-end fa-spin"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "alert alert-" + notify.type + " d-flex align-items-center",
    role: "alert",
    style: {
      display: notify.type ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: notify.type ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle bi flex-shrink-0 me-2"
  })), /*#__PURE__*/React.createElement("div", null, notify.text))));
};