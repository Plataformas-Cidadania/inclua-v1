const Item = props => {
  const propsData = props.propsData;
  let icon = {
    1: 'far fa-file-pdf',
    2: 'far fa-file-word',
    3: 'far fa-file-image',
    4: 'far fa-file-video',
    5: 'fas fa-link'
  }; //console.log('***props: ', propsData);

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, propsData.map((item, key) => {
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
      className: "col-4 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-lgt2 box-list-i"
    }, /*#__PURE__*/React.createElement("i", {
      className: icon[item.id_formato] + " fa-3x"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, "\xA0")), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 box-list-p"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Esfera: "), /*#__PURE__*/React.createElement("span", null, item.esfera)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Idioma: "), item.links !== undefined ? item.links.map((link, key) => {
      return /*#__PURE__*/React.createElement("a", {
        href: link.uri,
        target: "_blank",
        title: link.idioma,
        key: "linksIdoma" + key
      }, link.idioma, item.links.length !== key + 1 ? ', ' : '');
    }) : null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Tipo: "), /*#__PURE__*/React.createElement("span", null, item.tipo_recurso ? item.tipo_recurso.nome : '')), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Autoria: "), item.autoria !== undefined ? item.autoria.map((autoria, key) => {
      return /*#__PURE__*/React.createElement("span", {
        key: "autoria" + key
      }, autoria.autor.nome, item.autoria.length !== key + 1 ? ', ' : '');
    }) : null), /*#__PURE__*/React.createElement("br", null)), item.links !== undefined ? item.links.map((link, key) => {
      return key === 0 ? /*#__PURE__*/React.createElement("div", {
        className: "col-6",
        key: "btn1" + key
      }, /*#__PURE__*/React.createElement("div", {
        className: "dorder-container"
      }, /*#__PURE__*/React.createElement("a", {
        href: link.uri,
        className: "btn btn-theme bg-pri",
        type: "button"
      }, "Acessar ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-angle-right"
      })))) : /*#__PURE__*/React.createElement("div", {
        className: "col-2 d-flex justify-content-end text-right mt-2",
        key: "btn2" + key
      }, /*#__PURE__*/React.createElement("a", {
        href: link.uri,
        target: "_blank"
      }, " ", link.idioma, " ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-angle-right"
      })));
    }) : null)), /*#__PURE__*/React.createElement("br", null));
  }));
};