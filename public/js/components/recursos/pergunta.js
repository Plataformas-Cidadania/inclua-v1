const Pergunta = () => {
  const {
    useState,
    useEffect
  } = React;
  const [recursoMap, setRecursoMap] = useState([]);
  useEffect(() => {
    Recurso();
  }, []);

  const Recurso = async () => {
    try {
      const result = await axios.get('json/recursos.json');
      setRecursoMap(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  let icon = {
    1: 'far fa-file-pdf',
    2: 'far fa-file-word',
    3: 'far fa-file-image',
    4: 'far fa-file-video',
    5: 'fas fa-link'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, recursoMap.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "col-md-4",
      key: key
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 text-center box-list-cod"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "mt-4"
    }, "C\xF3digo"), /*#__PURE__*/React.createElement("h2", null, item.id)), /*#__PURE__*/React.createElement("div", {
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
      className: "col-4 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 box-list-i"
    }, /*#__PURE__*/React.createElement("i", {
      className: icon[item.file_tipo] + " fa-3x"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, "\xA0")), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 box-list-p"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Esfera:"), " ", /*#__PURE__*/React.createElement("span", null, item.esfera)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Idioma:"), " ", /*#__PURE__*/React.createElement("span", null, item.idioma)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Tipo:"), " ", /*#__PURE__*/React.createElement("span", null, item.tipo)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Autoria:"), " ", /*#__PURE__*/React.createElement("span", null, item.autoria)), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "col-9"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-theme bg-pri",
      type: "button"
    }, "Acessar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "col-3 d-flex justify-content-end"
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-copy fa-2x "
    })))), /*#__PURE__*/React.createElement("br", null))
    /*<div>
        <div className="dorder-container"  key={key}>
            <div className="dorder-container-mai p-4 ">
                <p>{key+1} - {item.descricao}</p>
                <br/>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <i className="far fa-frown fa-3x"/><br/>
                        <p>Não gostei</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="far fa-meh fa-3x"/><br/>
                        <p>Indiferente</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="far fa-smile fa-3x"/><br/>
                        <p>Gostei</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <i className="far fa-heart fa-3x"/><br/>
                        <p>Amei</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>*/
    ;
  }));
};