const Insert = props => {
  const {
    useState
  } = React;
  const [form, setForm] = useState({
    descricao: '',
    id_pergunta: props.id_pergunta,
    id_user: props.id_user,
    status: 1
  });
  const [teste, setTeste] = useState(false);
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });

  const handleNotify = notify => {
    setNotify(notify);
  };

  const Update = async () => {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("textarea", {
    id: "descricao",
    name: "descricao",
    rows: "5",
    cols: "33",
    placeholder: "Deixe um descrição",
    onChange: handleForm,
    value: form.descricao
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container justify-content-end"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri ",
    type: "button",
    onClick: () => Update()
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
  })), /*#__PURE__*/React.createElement("div", null, notify.text))), /*#__PURE__*/React.createElement(List, {
    teste: teste
  }));
};