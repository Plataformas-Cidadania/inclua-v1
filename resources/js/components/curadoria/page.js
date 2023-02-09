const Page = () => {

    const {useState, useEffect} = React;
    const [curadorias, setCuradorias] = useState([]);
    const [total, setTotal] = useState(0);
    const [activeDiv, setActiveDiv] = useState(0);
    const [newDatas, setNewDatas] = useState([]);
    const [mesSelected, setMesSelected] = useState('');
    const [searchData, setSearchData] = useState('');
    const [page, setPage] = useState(0);


    useEffect(() => {
        Curadoria();
        CuradoriaMeses();
    }, [mesSelected, searchData]);

    useEffect(() => {
        Curadoria();
    }, [page]);

    const Curadoria = async () => {
        try {
            const result = await axios.get('api/curadoria/paginado', {
                params: {
                    page:page+1
                }
            });

            const filterData = searchData
                ? result.data.data.data.filter((obj) => obj.tema_recorte.includes(searchData))
                : result.data.data.data.filter((obj) => obj?.mes?.slice(3).includes(mesSelected))

            setCuradorias(filterData);
            setTotal(result.data.data.total);

            ///////////////DATA///////////
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
    }

    const CuradoriaMeses = async () => {
        try {
            const result = await axios.get('api/curadoria', {

            });

            ///////////////DATA///////////
            const arrayDatas = []

            result.data.data.map((item) => {
                arrayDatas.push(item?.mes?.slice(3))
            })

            const datasSemRepeticao = [...new Set(arrayDatas)];
            setNewDatas(datasSemRepeticao.sort())
            ///////////////////////////////

        } catch (error) {
            console.log(error);
        }
    }

    const clickBox = (id) => {
        setActiveDiv(id);
    }

    const handleSearch = async(e) => {

        const search = e.target.value ? e.target.value : '';

        setSearchData(search)
    }

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-12">
                        <p style={{textAlign: 'right'}}>{total} curadorias</p>
                        {
                            curadorias.map((item, key) => {
                                let recursos = [];
                                //////////////////
                                item.curadoria_recurso.map((item2) => {
                                    recursos.push(item2.recursos);
                                });
                                //////////////////

                                return (
                                    <a href={"curadoria/"+item.id_curadoria}  key={'curadoria'+key}>
                                        <div className={"p-4 "+ (key === 0 ? 'bg-lgt' : '')}>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <img src={item.curador.url_imagem} alt="" width="100%" style={{marginBottom: '20px'}}/>
                                                </div>
                                                <div className="col-md-12">
                                                    <div>{item.mes}</div>
                                                    <h2>{item.tema_recorte}</h2>
                                                </div>

                                                <div className="col-md-12">
                                                    <h3><strong>{item.curador.nome}</strong></h3>
                                                    {/*<p dangerouslySetInnerHTML={{__html: item.curador.minicv}}/>
                                                    <a href={item.curador.link_curriculo} target="_blank">Mais informações</a>*/}
                                                </div>
                                            </div>

                                            <p dangerouslySetInnerHTML={{__html: item?.texto?.slice(0, 400) + " ..."}} />

                                            {/*{item.link_video ? (
                                                <div className="text-center ">
                                                    <iframe width="80%" height="400"
                                                            src={"https://www.youtube.com/embed/"+item.link_video.split("=")[1]}
                                                            title="YouTube video player" frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen /><br/>

                                                </div>
                                            ) : null}*/}

                                            <div className="dorder-container">
                                                <a href={"curadoria/" + item.id_curadoria} className="btn btn-theme bg-pri" type="button" >Continue lendo <i className="fas fa-angle-right"/></a>
                                            </div>



                                            <hr style={{display: key === 0 ? 'none' : ''}}/>

                                            {/*<div
                                                className=" btn btn-primary float-end cursor"
                                                onClick={() => clickBox(item.id_curadoria)}
                                                style={{display: item.curadoria_recurso.length === 0 ? 'none' : ''}}

                                            >
                                                veja os {item.curadoria_recurso.length} recursos <i className="fas fa-angle-right"/>
                                            </div>
                                            <br/><br/>
                                            <div style={{display: activeDiv === item.id_curadoria ? '' : 'none'}}>
                                                <Item propsData={recursos}  grupo={item.id_curadoria}/>
                                            </div>*/}



                                        </div>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
                <br/>
                <Paginate
                    /*setPage={2}
                    total={curadorias?.length}
                    page={1}
                    perPage={2}*/
                    setPage={setPage}
                    total={total}
                    page={page}
                    perPage={10}
                />
            </div>
            <div className="col-md-3">
                {/*<div className="input-icon">
                    <input id="ativarBox"
                           type="text"
                           className="form-control"
                           placeholder={'Busca'}
                           onChange={handleSearch}
                           autoComplete="off"
                           //onClick={() => clickSearchBoxOn()}
                           style={{zIndex: '999'}}
                    />
                    <i className="fas fa-search"/>
                </div>*/}
                <br/>
                <h2>Arquivo</h2>
                <ul className="menu-left">
                    {newDatas.map((item, key) => {
                        return (
                            <li className="list-group-item-theme cursor" key={'datas' + key} style={{position: 'relative'}}>
                                <a onClick={() => setMesSelected(item)} style={{backgroundColor: mesSelected === item ? '#A5D0CC' : 'inherit'}}>{dataExt(item)}</a>
                                {mesSelected === item ?
                                    <div style={{position: 'relative', right: 0, marginBottom: "30px", marginTop: '-30px', paddingRight: "10px"}} onClick={() => setMesSelected('')}>
                                        <i className="fas fa-times float-end " />
                                    </div>
                                    : null}

                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    );
};
