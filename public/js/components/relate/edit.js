const Edit = props => {
  const {
    useState,
    useEffect
  } = React;
  const [form, setForm] = useState([]);
  const [notify, setNotify] = useState({
    type: null,
    text: null,
    spin: false
  });
  const [requireds, setRequireds] = useState({
    status: 0,
    descricao: true
  });
  useEffect(() => {
    if (props.id_resposta > 0) {
      Detail();
    }
  }, [props.id_resposta]);

  const Detail = async () => {
    try {
      const result = await axios.get('api/resposta_relate/' + props.id_resposta);
      setForm(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNotify = notify => {
    setNotify(notify);
  };

  const Update = async () => {
    handleNotify({
      type: null,
      text: null,
      spin: true
    });
    const params = new URLSearchParams();
    params.append('descricao', form.descricao);
    params.append('status', 0);

    try {
      const result = await axios.put('api/resposta_relate/' + form.id_resposta, params, {
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

    props.listGet();
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
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-float"
  }, /*#__PURE__*/React.createElement("textarea", {
    id: "descricao",
    name: "descricao",
    rows: "5",
    cols: "33",
    placeholder: "Deixe um descrição",
    onChange: handleForm,
    value: form.descricao,
    required: requireds.descricao ? '' : 'required',
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  })), "Alterar ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", null, notify.text))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Fechar")));
};