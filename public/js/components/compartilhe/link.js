const Link = props => {
  const {
    useState,
    useEffect
  } = React;
  const [form, setForm] = useState({
    id_recurso: props.id_recurso,
    idioma: ""
  });
  useEffect(() => {
    let newForm = { ...form,
      id_recurso: props.id_recurso
    };
    setForm(newForm);
  }, [props.id_recurso]);
  let idiomaMap = [{
    id: 1,
    idioma: "PT-BR"
  }, {
    id: 2,
    idioma: "EN"
  }, {
    id: 3,
    idioma: "ES"
  }];
  const [idiomaSelected, setIdiomaSelected] = useState();
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });
  const [requireds, setRequireds] = useState({
    uri: true,
    idioma: true
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
      const result = await axios.post('api/link', form);
      handleNotify({
        type: 'success',
        text: 'Link inserido!',
        spin: false
      });
      props.setListLinks(props.listLinks + 1); //Limpar form

      let newForm = { ...form,
        idioma: "",
        uri: ""
      };
      setForm(newForm);
      setIdiomaSelected(null); ////
    } catch (error) {
      //console.log(error);
      handleNotify({
        type: 'danger',
        text: 'Link não foi inserido, tente novamente!',
        spin: false
      });
    }
  };

  const clickIdioma = idioma => {
    let newForm = { ...form,
      idioma: idioma
    };
    setForm(newForm);
    validate(newForm);
    setIdiomaSelected(idioma);
  };

  const handleForm = event => {
    let {
      value,
      id
    } = event.target;
    let newForm = { ...form,
      [id]: value
    }; //console.log('newForm', newForm);

    setForm(newForm);
    validate(newForm);
  };

  const validate = form => {
    let valid = true;
    let newRequireds = requireds;

    for (let index in requireds) {
      if (!form[index] || form[index] === "") {
        requireds[index] = false;
        valid = false;
      } else {
        requireds[index] = true;
      }
    }

    setRequireds(newRequireds);
    return valid;
  };

  return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_token",
    value: "{{ csrf_token() }}"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-float"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g " + (requireds.uri ? '' : 'invalid-field'),
    type: "text",
    name: "uri",
    id: "uri",
    placeholder: " ",
    required: requireds.uri ? '' : 'required',
    onChange: handleForm,
    value: form.uri
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "uri"
  }, "Link"), /*#__PURE__*/React.createElement("div", {
    className: "label-box-info"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: requireds.uri ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-circle"
  }), " Digite o link"))), /*#__PURE__*/React.createElement("ul", {
    className: "toggle"
  }, idiomaMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      key: 'idioma_' + key,
      onClick: () => clickIdioma(item.idioma),
      style: {
        background: item.idioma === idiomaSelected ? '#E6DACE' : ''
      }
    }, item.idioma);
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container float-start"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri",
    type: "button",
    onClick: Insert
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '10px',
      display: notify.spin ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner float-end fa-spin"
  })), "Adicionar ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "alert alert-" + notify.type + " d-flex align-items-center",
    role: "alert",
    style: {
      display: notify.type ? '' : 'none',
      clear: 'both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: notify.type ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle bi flex-shrink-0 me-2"
  })), /*#__PURE__*/React.createElement("div", null, notify.text))))));
};