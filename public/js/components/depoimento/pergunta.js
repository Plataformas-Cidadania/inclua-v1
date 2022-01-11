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
    src: "img/d1.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 1 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(1)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d2.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 2 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(2)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d3.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 3 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(3)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d4.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 4 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(4)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d5.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 5 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(5)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d6.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 6 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(6)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d7.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 7 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(7)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d8.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 8 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(8)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d9.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 9 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(9)
  }), /*#__PURE__*/React.createElement("img", {
    src: "img/d10.png",
    alt: "",
    title: "",
    width: "100",
    className: "box-btn-icon float-start ms-4 " + (relate === 10 ? 'box-btn-icon-set' : ''),
    onClick: () => ClickIcon(10)
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