const Option = props => {
  const {
    useState,
    useEffect
  } = React;
  const [form, setForm] = useState({
    descricao: '',
    id_pergunta: props.id_pergunta,
    id_user: props.id_user,
    status: 0
  });
  const [validar, setValidar] = useState(false);
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });

  const handleNotify = notify => {
    setNotify(notify);
  };

  const Inserir = async descri => {
    //Limpar form
    let newForm = { ...form,
      descricao: descri
    };
    setForm(newForm); ////

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
  }, /*#__PURE__*/React.createElement(Detalhar, {
    id_pergunta: props.id_pergunta,
    setProps: setValidar
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px'
    },
    onClick: () => Inserir(props.descricao),
    className: "cursor"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-circle"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px'
    },
    onClick: () => Inserir(props.descricao),
    className: "cursor"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-circle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12",
    style: {
      display: validar ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
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