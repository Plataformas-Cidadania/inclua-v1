const Dimensoes = () => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [categorias, setCategorias] = useState([]);
  const [categoriasMarcadas, setCategoriasMarcadas] = useState([]);
  const [categoriaClicada, setCategoriaClicada] = useState(0);
  let bgColor = {
    1: 'bg-pri',
    2: 'bg-sec',
    3: 'bg-ter',
    4: 'bg-qua',
    5: 'bg-qui'
  };
  bgColor = bgColor[context.dimensao.numero];
  useEffect(() => {
    setCategorias(context.categorias);
  }, [context.categorias]);
  useEffect(() => {
    context.setCategoriasMarcadas(categoriasMarcadas);
  }, [categoriasMarcadas]);

  const handleDiagnostico = event => {
    let newDiagnostico = { ...context.diagnostico,
      [event.target.id]: event.target.value
    };
    context.setDiagnostico(newDiagnostico);
    localStorage.setItem('diagnostico', JSON.stringify(newDiagnostico));
  };

  const marcarDesmarcarCategoria = id_categoria => {
    //console.log(id_categoria);
    let newCategorias = categorias;
    newCategorias.forEach(item => {
      if (item.id_categoria === id_categoria) {
        item.marcada = item.marcada === 1 ? 0 : 1;
        console.log(item, id_categoria);
      }
    });
    setCategorias(newCategorias);
    setCategoriaClicada(id_categoria); //console.log(newCategorias);

    let newCategoriasMarcadas = categoriasMarcadas;

    if (categoriasMarcadas.includes(id_categoria)) {
      newCategoriasMarcadas = newCategoriasMarcadas.filter(item => item !== id_categoria);
      setCategoriasMarcadas(newCategoriasMarcadas);
      localStorage.setItem('categorias_diagnostico', JSON.stringify(newCategoriasMarcadas));
      return;
    }

    newCategoriasMarcadas.push(id_categoria);
    setCategoriasMarcadas(newCategoriasMarcadas);
    localStorage.setItem('diagnostico', JSON.stringify(newCategoriasMarcadas));
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "ofertaPublica"
  }, /*#__PURE__*/React.createElement("strong", null, "Oferta p\xFAblica sob foco")), /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g",
    type: "text",
    name: "ofertaPublica",
    id: "ofertaPublica",
    onChange: handleDiagnostico,
    placeholder: "ex.: servi\xE7o, programa, pol\xEDtica, projeto, iniciativa, a\xE7\xE3o, etc."
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "ofertaPublica"
  }, /*#__PURE__*/React.createElement("strong", null, "Qual(is) grupo(s) ou popula\xE7\xE3o(\xF5es) espec\xEDfica(s) ir\xE1 focar?")), /*#__PURE__*/React.createElement("input", {
    className: "form-control form-g",
    type: "text",
    name: "grupos",
    id: "grupos",
    onChange: handleDiagnostico
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, "Assinale as op\xE7\xF5es abaixo que se relacionam com a oferta p\xFAblica e/ou o grupo(s) espec\xEDfico(s) em rela\xE7\xE3o aos queis ir\xE1 conduzir o dian\xF3stico:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10px"
    }
  }, "(OBS.: Os temas marcados nos ajudar\xE3o a apresentar sugest\xF5es pertinentes de recursos para a interven\xE7\xE3o, caso o diagn\xF3stico resulte em riscos moderados ou altos)"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Selecione as categorias")), /*#__PURE__*/React.createElement("br", null), context.categorias ? context.categorias.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: "categoria" + key,
      id: "btnCategoria" + key,
      className: "btn btn-sm btn-" + (item.marcada === 1 ? "info" : "default"),
      onClick: () => marcarDesmarcarCategoria(item.id_categoria),
      style: {
        margin: "8px",
        border: "solid 1px #ccc"
      }
    }, item.nome);
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center nav-icons"
  }, context.dimensoes.map((item, key) => {
    //let classe =  ? 'nav-icons-select' : '';
    let classe = "cursor ";

    if (item.numero === context.dimensao.numero) {
      classe += "nav-icons-select ";
    }

    if (!context.dimensoesRespondidas.includes(item.numero) && item.numero !== context.dimensao.numero) {
      classe += "opacity-5";
    }

    return /*#__PURE__*/React.createElement("img", {
      key: "icone-dimensao-" + key,
      src: "img/dimensao" + item.numero + ".png",
      alt: "",
      className: classe,
      onClick: () => context.setDimensao(item)
    });
  }), /*#__PURE__*/React.createElement("hr", null))))), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container",
    style: {
      marginLeft: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: bgColor
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3 text-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/dimensao" + context.dimensao.numero + "-g.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("h2", null, "DIMENS\xC3O ", context.dimensao.numero)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mt-5"
  }, context.dimensao.titulo), /*#__PURE__*/React.createElement("p", {
    className: "mb-5"
  }, context.dimensao.descricao)))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Indicadores, null));
};