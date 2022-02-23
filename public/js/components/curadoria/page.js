const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [curadorias, setCuradorias] = useState([]);
  const [total, setTotal] = useState(0);
  const [activeDiv, setActiveDiv] = useState(0);
  useEffect(() => {
    Curadoria();
  }, []);

  const Curadoria = async () => {
    try {
      const result = await axios.get('api/curadoria', {});
      setCuradorias(result.data.data);
      setTotal(result.data.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const clickBox = id => {
    setActiveDiv(id);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rol-md-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'right'
    }
  }, total, " curadorias"), curadorias.map((item, key) => {
    let recursos = []; //////////////////

    item.curadoria_recurso.map(item2 => {
      recursos.push(item2.recursos);
    }); //////////////////

    return /*#__PURE__*/React.createElement("div", {
      className: "p-4 " + (key === 0 ? 'bg-lgt' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-3"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.curador.url_imagem,
      alt: "",
      width: "90%"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-9"
    }, /*#__PURE__*/React.createElement("h2", null, item.curador.nome), /*#__PURE__*/React.createElement("p", null, item.curador.minicv), /*#__PURE__*/React.createElement("a", {
      href: item.curador.link_curriculo,
      target: "_blank"
    }, "Mais informa\xE7\xF5es"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "float-end badge bg-light text-dark"
    }, "novembro"), /*#__PURE__*/React.createElement("h2", null, item.tema_recorte), /*#__PURE__*/React.createElement("p", null, item.texto), item.link_video ? /*#__PURE__*/React.createElement("div", {
      className: "text-center "
    }, /*#__PURE__*/React.createElement("iframe", {
      width: "780",
      height: "400",
      src: "https://www.youtube.com/embed/" + item.link_video.split("=")[1],
      title: "YouTube video player",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }), /*#__PURE__*/React.createElement("br", null)) : null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("hr", {
      style: {
        display: key === 0 ? 'none' : ''
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      className: "float-end cursor",
      onClick: () => clickBox(item.id_curadoria),
      style: {
        display: item.curadoria_recurso.length === 0 ? 'none' : ''
      }
    }, "veja os ", item.curadoria_recurso.length, " recursos ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: activeDiv === item.id_curadoria ? '' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Item, {
      propsData: recursos
    })));
  })))));
};