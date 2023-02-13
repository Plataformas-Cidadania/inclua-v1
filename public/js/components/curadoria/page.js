const Page = () => {
  const {
    useState,
    useEffect
  } = React;
  const [curadorias, setCuradorias] = useState([]);
  const [curadores, setCuradores] = useState([]);
  const [total, setTotal] = useState(0);
  const [activeDiv, setActiveDiv] = useState(0);
  const [newDatas, setNewDatas] = useState([]);
  const [mesSelected, setMesSelected] = useState('');
  const [searchData, setSearchData] = useState('');
  const [page, setPage] = useState(0);
  const [filterCurador, setFilterCurador] = useState(0);
  /*useEffect(() => {
      Curadoria();
      CuradoriaMeses();
  }, [mesSelected, searchData]);*/

  useEffect(() => {
    Curadoria();
  }, [page, filterCurador]);

  const Curadoria = async () => {
    try {
      const result = await axios.get('api/curadoria/paginado', {
        params: {
          page: page + 1
        }
      });
      /*const filterData = searchData
          ? result.data.data.data.filter((obj) => obj.tema_recorte.includes(searchData))
          : result.data.data.data.filter((obj) => obj?.mes?.slice(3).includes(mesSelected))*/

      /*
                  const filterData = filterCurador === 0
                      ? result.data.data.data.filter((obj) => obj.id_curador.includes(filterCurador))
                      : result.data.data.data*/

      const filterData = [];
      /* console.log(filterData)*/

      setCuradorias(filterData);
      setTotal(result.data.data.total);
      curadorData(result.data.data); ///////////////DATA///////////

      /*const arrayDatas = []
       result.data.data.map((item) => {
          arrayDatas.push(item.mes.slice(3))
      })
       const datasSemRepeticao = [...new Set(arrayDatas)];
      setNewDatas(datasSemRepeticao.sort())*/
      ///////////////////////////////
    } catch (error) {
      console.log(error);
    }
  };

  const curadorData = async dataCuradorias => {
    try {
      const result = await axios.get('api/curador', {});
      const filterData = filterCurador === 0 ? dataCuradorias.data : dataCuradorias.data.filter(obj => obj.id_curador === filterCurador);
      setCuradorias(filterData);
      setCuradores(result?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CuradoriaMeses = async () => {
    try {
      const result = await axios.get('api/curadoria', {}); ///////////////DATA///////////

      const arrayDatas = [];
      result.data.data.map(item => {
        arrayDatas.push(item?.mes?.slice(3));
      });
      const datasSemRepeticao = [...new Set(arrayDatas)];
      setNewDatas(datasSemRepeticao.sort()); ///////////////////////////////
    } catch (error) {
      console.log(error);
    }
  };

  const clickBox = id => {
    setActiveDiv(id);
  };

  const handleSearch = async e => {
    const search = e.target.value ? e.target.value : '';
    setSearchData(search);
  };

  const setHandleFilterCurador = id => {
    setFilterCurador(id);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
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

    return /*#__PURE__*/React.createElement("a", {
      href: "curadoria/" + item.id_curadoria,
      key: 'curadoria' + key
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 " + (key === 0 ? 'bg-lgt' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12 img-format"
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
    }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("strong", null, item.curador.nome)))), item?.texto ? /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: item?.texto?.slice(0, 400) + " ..."
      }
    }) : null, /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("a", {
      href: "curadoria/" + item.id_curadoria,
      className: "btn btn-theme bg-pri",
      type: "button"
    }, "Continue lendo ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))), /*#__PURE__*/React.createElement("hr", {
      style: {
        display: key === 0 ? 'none' : ''
      }
    })));
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Paginate
  /*setPage={2}
  total={curadorias?.length}
  page={1}
  perPage={2}*/
  , {
    setPage: setPage,
    total: total,
    page: page,
    perPage: 10
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "Curadores"), curadores?.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "menu-curadoria cursor",
      key: 'curador' + key,
      style: {
        backgroundColor: filterCurador === item.id_curador ? '#A5D0CC' : 'inherit'
      },
      onClick: () => setHandleFilterCurador(item.id_curador)
    }, item.nome, filterCurador === item.id_curador ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        right: 0,
        marginBottom: "18px",
        marginTop: '-18px',
        paddingRight: "10px"
      },
      onClick: () => setHandleFilterCurador(0)
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times float-end "
    })) : null);
  })));
};