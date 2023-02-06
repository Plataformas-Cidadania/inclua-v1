const Item = props => {
  const {
    useState,
    useEffect
  } = React;
  const [formato, setFormato] = useState([]);
  const [modal, setModal] = useState({
    id: 0,
    nome: '',
    resumo: ''
  });
  const propsData = props.propsData;
  let icon = {
    1: 'far fa-file-pdf',
    2: 'far fa-file-word',
    3: 'far fa-file-image',
    4: 'far fa-file-video',
    5: 'fas fa-link'
  };
  useEffect(() => {
    Formato();
  }, []);

  const Formato = async () => {
    try {
      const result = await axios.get('/api/formatorecurso/', {});
      setFormato(result.data.data); // Não se esqueça de usar var!
    } catch (error) {
      console.log(error);
    }
  };

  const callModal = (id, nome, resumo) => {
    setModal({
      id: id,
      nome: nome,
      resumo: resumo
    });
    $('#exampleModal').modal('show');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, propsData.map((item, key) => {
    function isCherries(fruit) {
      return fruit.id_formato === item.id_formato;
    }

    let nomeFormato = formato.find(isCherries);
    return /*#__PURE__*/React.createElement("div", {
      className: "col-lg-4 col-md-6 col-sm-12 col-xs-12",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 text-center box-list-cod"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "mt-4"
    }, "C\xF3digo"), /*#__PURE__*/React.createElement("h2", null, item.id_recurso)), /*#__PURE__*/React.createElement("div", {
      className: "p-2 box-list-title"
    }, /*#__PURE__*/React.createElement("p", {
      className: "mt-2"
    }, item.nome)), /*#__PURE__*/React.createElement("div", {
      className: "clear-both"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/React.createElement("img", {
      src: "img/lines.png",
      alt: "",
      width: "90%"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-6 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 box-list-formato"
    }, nomeFormato ? nomeFormato.nome : '')), /*#__PURE__*/React.createElement("div", {
      className: "col-2"
    }, "\xA0")), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 box-list-p"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Esfera: "), /*#__PURE__*/React.createElement("span", null, item.esfera)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Idioma: "), item.links[0] !== undefined ? /*#__PURE__*/React.createElement("a", {
      href: "",
      target: "_blank",
      title: item.links[0].idioma,
      key: "linksIdoma" + key
    }, item.links[0].idioma) : null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Tipo: "), /*#__PURE__*/React.createElement("span", null, item.tipo_recurso ? item.tipo_recurso.nome : '')), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Autoria: "), item.autoria !== undefined ? item.autoria.map((autoria, key) => {
      return /*#__PURE__*/React.createElement("span", {
        key: "autoria" + key
      }, autoria.autor.nome, item.autoria.length !== key + 1 ? ', ' : '');
    }) : null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-12"
    }, item.links[0] !== undefined ? /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("a", {
      href: item.links[0].uri,
      className: "btn btn-theme bg-pri",
      type: "button",
      target: "_blank"
    }, "Acessar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "col-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container",
      onClick: () => callModal(item.id_recurso, item.nome, item.resumo)
    }, /*#__PURE__*/React.createElement("a", {
      className: "btn btn-theme bg-pri",
      type: "button",
      target: "_blank"
    }, "Detalhar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))))) : null))), /*#__PURE__*/React.createElement("br", null));
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, modal.nome)), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, modal.resumo === null ? "Este conteúdo não está disponível no momento!" : modal.resumo), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close")))))));
};