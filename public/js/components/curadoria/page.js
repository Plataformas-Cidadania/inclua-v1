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
    return /*#__PURE__*/React.createElement("div", null);
  })))));
};