const Insert = props => {
  console.log('porps', props);
  const {
    useState
  } = React;
  const [form, setForm] = useState({
    descricao: '',
    id_pergunta: props.id_pergunta,
    id_user: props.id_user,
    status: 1
  });
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });

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
        text: 'Recurso inserido, cadastre o links!',
        spin: false
      }); //Limpar form

      let newForm = { ...form,
        nome: "",
        esfera: "",
        id_tipo_recurso: 0,
        id_formato: 0
      };
      setForm(newForm); ////
    } catch (error) {
      console.log(error);
      handleNotify({
        type: 'danger',
        text: 'Recurso não foi inserido, tente novamente!',
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
    placeholder: "Deixe um comentário",
    onChange: handleForm,
    value: form.descricao
  }), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      display: notify.type === "success" ? '' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container justify-content-end"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri float-end",
    type: "button",
    onClick: () => Insert()
  }, "Enviar ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  })))));
};