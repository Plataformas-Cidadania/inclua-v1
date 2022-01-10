const Pergunta = () => {
  const {
    useState
  } = React;
  const [relate, setRelate] = useState(0);

  const ClickIcon = id => {
    setRelate(id);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dorder-container-mai p-4 "
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("p", null, "Avatar"), /*#__PURE__*/React.createElement("img", {
    src: "img/p4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 1 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(1)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/p4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 2 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(2)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/p4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 3 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(3)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/p4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 4 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(4)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/p4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 5 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(5)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/p4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 6 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(6)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("textarea", {
    id: "story",
    name: "story",
    rows: "5",
    cols: "33",
    placeholder: "Deixe um comentário",
    className: "mt-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dorder-container justify-content-end mt-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-theme bg-pri ",
    type: "button"
  }, "Enviar ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-angle-right"
  })))))), /*#__PURE__*/React.createElement("br", null));
};