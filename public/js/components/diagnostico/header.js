//import React from 'react';
const Header = () => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [textDiagnosticoDescricao, setTextDiagnosticoDescricao] = useState(null);
  const [varLocalStorage, setlocalStorage] = useState(localStorage.getItem('id_diagnostico'));
  const [respostasLocalStorage, setRespostasLocalStorage] = useState(localStorage.getItem('respostas_diagnostico'));
  useEffect(() => {
    getTextDiagnostico("pg-diagnostico");
  }, []);
  useEffect(() => {
    setRespostasLocalStorage(localStorage.getItem('respostas_diagnostico'));
  }, [context.respostas]);

  const ClicklocalStorage = key => {
    setlocalStorage();
    localStorage.removeItem('id_diagnostico');
    localStorage.removeItem('ids_dimensoes');
    localStorage.removeItem('respostas_diagnostico');
    location.href = "diagnostico";
  };

  const getTextDiagnostico = async slug => {
    try {
      const result = await axios.get('text/' + slug);
      setTextDiagnosticoDescricao(result.data.descricao);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, "\xA0"), /*#__PURE__*/React.createElement("div", {
    className: "col-md-7"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", {
    dangerouslySetInnerHTML: {
      __html: text_diagnostico_titulo
    }
  }), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: textDiagnosticoDescricao
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container cursor",
    onClick: () => context.setTipo(1)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt2 p-3"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: '15px'
    }
  }, "Completo"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) !== 1 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-check-circle fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) === 1 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  })))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container cursor",
    onClick: () => context.setTipo(2)
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt2 p-3"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: '15px'
    }
  }, "Parcial"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) !== 2 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-check-circle fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: parseInt(context.tipo) === 2 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right fa-3x float-end ",
    style: {
      marginTop: '-52px'
    }
  }))))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col text-center cursor"
  }, /*#__PURE__*/React.createElement("a", {
    href: "diagnostico/completo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: parseInt(context.tipo) === 1 ? {
      top: 0,
      boxShadow: "2px 2px 8px #9b9898",
      transform: "scale(1.1)"
    } : {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-completo.png",
    alt: "Completo",
    title: "Completo",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Completo"))), /*#__PURE__*/React.createElement("div", {
    className: "col text-center cursor"
  }, /*#__PURE__*/React.createElement("a", {
    href: "diagnostico/parcial"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: parseInt(context.tipo) === 2 ? {
      top: 0,
      boxShadow: "2px 2px 8px #9b9898",
      transform: "scale(1.1)"
    } : {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-parcial.png",
    alt: "Parcial",
    title: "Parcial",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Parcial"))), /*#__PURE__*/React.createElement("div", {
    className: "col text-center " + (varLocalStorage ? '' : 'opacity-5')
  }, /*#__PURE__*/React.createElement("a", {
    href: varLocalStorage ? 'resultado' : null,
    style: {
      cursor: varLocalStorage ? 'pointer' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover",
    style: {
      top: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-analise.png",
    alt: "Resultado",
    title: "Resultado",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Resultado"))), /*#__PURE__*/React.createElement("div", {
    className: "col text-center " + (varLocalStorage || respostasLocalStorage || context.respostas ? '' : 'opacity-5')
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn-icon btn-icon-hover cursor",
    style: {
      top: 0
    },
    onClick: () => ClicklocalStorage()
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/icon-limpar.png",
    alt: "Parcial",
    title: "Parcial",
    width: "75%"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "Limpar"))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/bg-top.png",
    alt: "",
    width: "80%",
    className: "float-end"
  })))));
}; //export default Header;