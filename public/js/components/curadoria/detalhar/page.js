const PageDetalhar = () => {
  const {
    useState,
    useEffect
  } = React;
  const [curadorias, setCuradorias] = useState([]);
  const [activeDiv, setActiveDiv] = useState(0);
  useEffect(() => {
    CuradoriaDetalhar();
  }, []);

  const CuradoriaDetalhar = async () => {
    try {
      const result = await axios.get('api/curadoria', {});
      const filterData = result.data.data.filter(obj => obj.id_curadoria === curadoria_id);
      setCuradorias(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  const clickBox = id => {
    setActiveDiv(id);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, "\xA0"), /*#__PURE__*/React.createElement("div", {
    className: "col-md-7"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", null, "Curadoria"), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/img/bg-top.png",
    alt: "",
    width: "40%",
    className: "float-end"
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, curadorias.map((item, key) => {
    let recursos = []; //////////////////

    item.curadoria_recurso.map(item2 => {
      recursos.push(item2.recursos);
    }); //////////////////

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "p-4 " + (key === 0 ? 'bg-lgt' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.curador.url_imagem,
      alt: "",
      width: "100%",
      style: {
        marginBottom: '20px'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("div", null, item.mes), /*#__PURE__*/React.createElement("h2", null, item.tema_recorte)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("strong", null, item.curador.nome)))), /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item.texto
      }
    }), item.link_video ? /*#__PURE__*/React.createElement("div", {
      className: "text-center "
    }, /*#__PURE__*/React.createElement("iframe", {
      width: "80%",
      height: "400",
      src: "https://www.youtube.com/embed/" + item.link_video.split("=")[1],
      title: "YouTube video player",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }), /*#__PURE__*/React.createElement("br", null)) : null, /*#__PURE__*/React.createElement("hr", {
      style: {
        display: key === 0 ? 'none' : ''
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "p-2"
    }, /*#__PURE__*/React.createElement(Item, {
      propsData: recursos,
      grupo: item.id_curadoria
    })), /*#__PURE__*/React.createElement("br", null));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("h2", null, "Arquivo")))));
};