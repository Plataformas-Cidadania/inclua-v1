const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [perguntas, setPerguntas] = useState([]);
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });
  const [respostas, setRespostas] = useState([]);
  /*{
      descricao: '',
      id_pergunta: 0,
      id_user: id_user,
      status: 0,
  }*/

  useEffect(() => {
    listPerguntas();
  }, []);
  useEffect(() => {
    console.log(respostas);
  }, [respostas]);

  const listPerguntas = async () => {
    try {
      const result = await axios.get('api/pergunta_relate');
      setPerguntas(result.data.data);
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

  const handleAlternativaRespostas = (value, idPergunta) => {
    handleRespostas(value, idPergunta);
  };

  const handleTextRespostas = (event, idPergunta) => {
    handleRespostas(event.target.value, idPergunta);
  };

  const handleRespostas = (value, idPergunta) => {
    let newRespostas = respostas;
    let existeResposta = false;

    for (let i = 0; i < newRespostas.length; i++) {
      if (newRespostas[i].id_pergunta === idPergunta) {
        newRespostas[i].descricao = value;
        existeResposta = true;
        break;
      }
    }

    ;

    if (!existeResposta) {
      newRespostas.push({
        descricao: value,
        id_pergunta: idPergunta
      });
    }

    setRespostas(newRespostas);
    console.log(newRespostas);
  };

  return /*#__PURE__*/React.createElement("form", null, perguntas.map((item, key) => {
    const descricao = item.descricao; //console.log(item);

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
      onChange: e => handleTextRespostas(e, item.id_pergunta),
      style: {
        width: '100%'
      }
    }) : /*#__PURE__*/React.createElement(Alternativas, {
      id_pergunta: item.id_pergunta,
      handleAlternativaRespostas: handleAlternativaRespostas
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