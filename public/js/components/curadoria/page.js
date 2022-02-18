const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [curadorias, setCuradorias] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [searchBox, setSearchBox] = useState(false);
  useEffect(() => {
    Curadoria();
  }, [page]);

  const Curadoria = async () => {
    try {
      const result = await axios.get('api/curador', {});
      setCuradorias(result.data.data);
      setTotal(result.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  const clickSearchBox = () => {
    setSearchBox(false);
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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "O diagn\xF3stico visa identificar e avaliar riscos de desaten\xE7\xE3o"), /*#__PURE__*/React.createElement("p", null, "O diagn\xF3stico visa identificar e avaliar riscos de desaten\xE7\xE3o, tratamento inadequado e exclus\xE3o de segmentos espec\xEDficos do p\xFAblico atendido. Muitas vezes, esses riscos n\xE3o s\xE3o suficientemente bem conhecidos."), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-3"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://www.influx.com.br/wp-content/uploads/2014/12/business-623x510.jpg",
      alt: "",
      width: "90%"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-9"
    }, /*#__PURE__*/React.createElement("h2", null, "Fernando lima"), /*#__PURE__*/React.createElement("p", null, "O diagn\xF3stico visa identificar e avaliar riscos de desaten\xE7\xE3o, tratamento inadequado e exclus\xE3o de segmentos espec\xEDficos do p\xFAblico atendido. Muitas vezes, esses riscos n\xE3o s\xE3o suficientemente bem conhecidos."))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null));
  })))));
};