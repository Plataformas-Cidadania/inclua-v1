const Edit = props => {
  const {
    useState,
    useEffect
  } = React;
  const [tipoMap, setTipoMap] = useState([]);
  const [formatoMap, setFormatoMap] = useState([]);
  const [form, setForm] = useState([]);
  const [listLinks, setListLinks] = useState(1);
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });
  const [requireds, setRequireds] = useState({
    nome: true,
    esfera: true,
    ultimo_acesso: true,
    id_tipo_recurso: true,
    id_formato: true
  });
  useEffect(() => {
    Tipo();
    Formato();
  }, []);
  useEffect(() => {
    if (props.id_recurso > 0) {
      Detail();
    }
  }, [props.id_recurso]);

  const Detail = async () => {
    console.log(props.id_recurso);

    try {
      const result = await axios.get('api/recurso/' + props.id_recurso); //const detail = result.data.data;

      setForm(result.data.data);
      /*setFormatoSelected(detail.formato_recurso.id_formato);
      setTipoSelected(detail.tipo_recurso.id_tipo_recurso);*/
    } catch (error) {
      console.error(error);
    }
  };

  const Tipo = async () => {
    try {
      const result = await axios.get('api/tipo_recurso');
      setTipoMap(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Formato = async () => {
    try {
      const result = await axios.get('api/formatorecurso');
      setFormatoMap(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNotify = notify => {
    setNotify(notify);
  };

  const ClickClear = () => {
    props.listGet();
  };

  const Update = async () => {
    handleNotify({
      type: null,
      text: null,
      spin: true
    });
    const params = new URLSearchParams();
    params.append('nome', form.nome);
    params.append('esfera', form.esfera);
    params.append('id_tipo_recurso', form.id_tipo_recurso);
    params.append('id_formato', form.id_formato);

    try {
      const result = await axios.put('api/recurso/' + form.id_recurso, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      handleNotify({
        type: 'success',
        text: 'Recurso inserido, cadastre o links!',
        spin: false
      });
    } catch (error) {
      console.log(error);
      handleNotify({
        type: 'danger',
        text: 'Recurso não foi inserido, tente novamente!',
        spin: false
      });
    }
  };

  const clickTipo = id => {
    //setTipoSelected(id);
    let newForm = { ...form,
      id_tipo_recurso: id
    };
    setForm(newForm);
    validate(newForm);
  };

  const clickFormato = id => {
    //setFormatoSelected(id);
    let newForm = { ...form,
      id_formato: id
    };
    setForm(newForm);
    validate(newForm);
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
    validate(newForm);
  };

  const validate = form => {
    let valid = true;
    let newRequireds = requireds;

    for (let index in requireds) {
      if (!form[index] || form[index] === '') {
        requireds[index] = false;
        valid = false;
      } else {
        requireds[index] = true;
      }
    }

    setRequireds(newRequireds);
    return valid;
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_token",
    value: "{{ csrf_token() }}"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12",
    style: {
      display: notify.type === 'success' ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-float"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g " + (requireds.nome ? '' : 'invalid-field'),
    type: "text",
    name: "nome",
    id: "nome",
    placeholder: " ",
    required: requireds.nome ? '' : 'required',
    defaultValue: form.nome,
    onChange: handleForm
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "nome"
  }, "Nome"), /*#__PURE__*/React.createElement("div", {
    className: "label-box-info"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: requireds.nome ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-circle"
  }), " Digite o nome e sobre nome"))), /*#__PURE__*/React.createElement("div", {
    className: "label-float"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g " + (requireds.esfera ? '' : 'invalid-field'),
    type: "text",
    name: "esfera",
    id: "esfera",
    placeholder: " ",
    required: requireds.esfera ? '' : 'required',
    onChange: handleForm,
    defaultValue: form.esfera
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "esfera"
  }, "Esfera"), /*#__PURE__*/React.createElement("div", {
    className: "label-box-info"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      display: requireds.esfera ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-circle"
  }), " Digite uma esfera"))), /*#__PURE__*/React.createElement("p", null, "Selecione um tipo:"), /*#__PURE__*/React.createElement("ul", {
    className: "toggle"
  }, tipoMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      key: 'tipo_' + key,
      onClick: () => clickTipo(item.id_tipo_recurso),
      style: {
        background: item.id_tipo_recurso === form.id_tipo_recurso ? '#E6DACE' : ''
      }
    }, item.nome);
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Selecione um formato:"), /*#__PURE__*/React.createElement("ul", {
    className: "toggle"
  }, formatoMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      key: 'formato_' + key,
      onClick: () => clickFormato(item.id_formato),
      style: {
        background: item.id_formato === form.id_formato ? '#E6DACE' : ''
      }
    }, item.nome);
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri",
    type: "button",
    onClick: Update
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: '10px',
      display: notify.spin ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner float-end fa-spin"
  })), "Pr\xF3ximo ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }))), /*#__PURE__*/React.createElement("br", null), notify.type ? /*#__PURE__*/React.createElement("div", {
    className: "alert alert-" + notify.type + " d-flex align-items-center",
    role: "alert"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle bi flex-shrink-0 me-2"
  }), /*#__PURE__*/React.createElement("div", null, notify.text)) : /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12",
    style: {
      display: notify.type === "success" ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement(ListLinks, {
    listLinks: listLinks,
    id_recurso: props.id_recurso
  }), /*#__PURE__*/React.createElement(Link, {
    listLinks: listLinks,
    setListLinks: setListLinks,
    id_recurso: props.id_recurso
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal",
    onClick: () => ClickClear()
  }, "Fechar")));
};