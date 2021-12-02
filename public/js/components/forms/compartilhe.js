class Compartilhe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        type: '',
        name: '',
        email: '',
        cel: '',
        whatsapp: '',
        mensagem: ''
      },
      button: true,
      loading: false,
      requireds: {
        name: true,
        email: true,
        cel: true,
        mensagem: true
      },
      showMsg: 0,
      msg: '',
      iconType: 0,
      formData: {
        idiomas: [],
        formato_recurso: [],
        dimensoes: []
      },
      formatoSelecionado: {
        id: null,
        nome: ''
      },
      idiomaSelecionado: 0,
      categoriasSelecionado: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.compartilhe = this.compartilhe.bind(this);
    this.validate = this.validate.bind(this);
    this.selectType = this.selectType.bind(this);
    this.getData = this.getData.bind(this);
    this.selectFormato = this.selectFormato.bind(this);
    this.selectIdioma = this.selectIdioma.bind(this);
    this.selectCategorias = this.selectCategorias.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      method: 'GET',
      url: '/json/compartilhe.json',
      cache: false,
      success: function (data) {
        this.setState({
          formData: data
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status, err.toString());
        this.setState({
          loadingCep: false
        });
      }.bind(this)
    });
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (target.name === 'cel') {
      value = maskCel(value);
    }

    if (target.name === 'whatsapp') {
      value = maskCel(value);
    }

    let form = this.state.form;
    form[name] = value;
    this.setState({
      form: form
    });
  }

  validate() {
    let valid = true;
    let requireds = this.state.requireds;
    let form = this.state.form;

    for (let index in requireds) {
      if (!form[index] || form[index] === '') {
        requireds[index] = false;
        valid = false;
      } else {
        requireds[index] = true;
      }
    }

    this.setState({
      requireds: requireds
    });
    return valid;
  }

  selectType(type) {
    let typeSelect = 0;

    if (type === 1) {
      typeSelect = "Dúvidas";
    }

    if (type === 2) {
      typeSelect = "Problemas";
    }

    if (type === 3) {
      typeSelect = "Sugestão";
    }

    if (type === 4) {
      typeSelect = "Outros";
    }

    let formTipe = {
      type: typeSelect,
      name: this.state.form.name,
      email: this.state.form.email,
      cel: this.state.form.cel,
      whatsapp: this.state.form.whatsapp,
      mensagem: this.state.form.mensagem
    };
    this.setState({
      form: formTipe,
      iconType: type
    });
  }

  selectFormato(id, nome) {
    let formatoSelecionado = {
      id: id,
      nome: nome
    };
    this.setState({
      formatoSelecionado: formatoSelecionado
    });
  }

  selectIdioma(id) {
    this.setState({
      idiomaSelecionado: id
    });
  }

  selectCategorias(id) {
    this.setState({
      categoriasSelecionado: id
    });
  }

  compartilhe(e) {
    //console.log(this.validate());
    if (!this.validate()) {
      return;
    }

    this.setState({
      loading: true,
      button: false,
      showMsg: 0,
      msg: ''
    }, function () {
      $.ajax({
        method: 'POST',
        url: 'compartilhe',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          form: this.state.form
        },
        cache: false,
        success: function (data) {
          this.setState({
            loading: false,
            showMsg: 1,
            msg: 'Enviado com sucesso!'
          });
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(status, err.toString());
          this.setState({
            loading: false,
            showMsg: 2,
            msg: 'Ocorreu um erro. Tente novamente!'
          });
        }.bind(this)
      });
    });
  }

  render() {
    let dimensoes = [];

    if (this.state.formData.dimensoes) {
      dimensoes = this.state.formData.dimensoes.map(function (item, index) {
        return /*#__PURE__*/React.createElement("li", {
          style: {
            backgroundColor: this.state.iconType === 1 ? '#E6DACE' : ''
          },
          onClick: () => this.selectType(item.id),
          key: 'dimensoes_' + item.id
        }, /*#__PURE__*/React.createElement("img", {
          src: "/img/dimensao" + item.id + ".png",
          alt: ""
        }));
      }.bind(this));
    }

    let idiomas = [];

    if (this.state.formData.idiomas) {
      idiomas = this.state.formData.idiomas.map(function (item, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: 'idioma_' + index,
          onClick: () => this.selectIdioma(item.id),
          style: {
            background: item.id === this.state.idiomaSelecionado ? '#E6DACE' : ''
          }
        }, item.nome);
      }.bind(this));
    }

    let formato_recurso = [];

    if (this.state.formData.formato_recurso) {
      formato_recurso = this.state.formData.formato_recurso.map(function (item, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: 'idioma_' + index,
          onClick: () => this.selectFormato(item.id, item.nome),
          style: {
            background: item.id === this.state.formatoSelecionado.id ? '#E6DACE' : ''
          }
        }, item.nome);
      }.bind(this));
    }

    let categorias = [];

    if (this.state.formData.categorias) {
      categorias = this.state.formData.categorias.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          className: "btn btn-outline-primary m-2",
          key: 'categorias_' + index,
          onClick: () => this.selectCategorias(item.id, item.nome),
          style: {
            background: item.id === this.state.categoriasSelecionado.id ? '#E6DACE' : ''
          }
        }, item.nome);
      }.bind(this));
    }

    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "_token",
      value: "{{ csrf_token() }}"
    }), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-7"
    }, /*#__PURE__*/React.createElement("p", null, "Selecione os temas:"), categorias, /*#__PURE__*/React.createElement("p", null, "Selecione as dimens\xF5es:"), /*#__PURE__*/React.createElement("ul", {
      className: "select-form"
    }, dimensoes), /*#__PURE__*/React.createElement("p", null, "Indicador:"), /*#__PURE__*/React.createElement("select", {
      name: "select",
      className: "form-control"
    }, /*#__PURE__*/React.createElement("option", {
      value: "0"
    }, "Selecione"), /*#__PURE__*/React.createElement("option", {
      value: "valor2",
      selected: true
    }, "Valor 2"), /*#__PURE__*/React.createElement("option", {
      value: "valor3"
    }, "Valor 3")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Idioma:"), /*#__PURE__*/React.createElement("ul", {
      className: "btn-form"
    }, idiomas)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-1"
    }, "\xA0"), /*#__PURE__*/React.createElement("div", {
      className: "col-md-4"
    }, /*#__PURE__*/React.createElement("p", null, "Tipo de arquivo:"), /*#__PURE__*/React.createElement("ul", {
      className: "btn-form text-center"
    }, formato_recurso), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "text-center",
      style: {
        display: this.state.formatoSelecionado.id ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement("ul", {
      className: "btn-form text-center"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
      className: "far fa-file-pdf fa-3x"
    }), /*#__PURE__*/React.createElement("br", null), "Selecionar ", this.state.formatoSelecionado.nome))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "clear-float"
    }), /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-theme bg-pri",
      type: "button",
      style: {
        display: this.state.button ? 'block' : 'none'
      },
      onClick: this.compartilhe
    }, "Enviar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: this.state.showMsg === 1 ? '' : 'none'
      },
      className: "text-success"
    }, this.state.msg), /*#__PURE__*/React.createElement("div", {
      style: {
        display: this.state.showMsg === 2 ? '' : 'none'
      },
      className: "text-danger"
    }, this.state.msg), /*#__PURE__*/React.createElement("div", {
      style: {
        display: this.state.loading ? 'block' : 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-spin fa-spinner"
    }), "Processando"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Compartilhe, null), document.getElementById('compartilhe'));