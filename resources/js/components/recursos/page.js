const Page = () => {

    const {useState, useEffect} = React;
    const [recursos, setRecursos] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [perPage, setPerpage] = useState(12);
    const [menuItens, setSearch] = useState(
        {
            id: 1,
            title: "Categoria",
            txt: 'Busque por categoria',
            rota: '/api/categoria/nome/',
            type: true,
            typeTitle: 'nome',
            nameId: 'id_categoria',
            rotaSelected: 'categoria'
        });
    const [menuLi, setMenuLi] = useState(1);
    const [listMenu, setListMenu] = useState([]);
    const [spinList, setspinList] = useState(false);
    const [searchBox, setSearchBox] = useState(false);
    const [nEncontado, setNEncontado] = useState(false);

    const menu = [
        {
            id: 1,
            title: "Categoria",
            txt: 'Busque por categoria',
            rota: '/api/categoria/nome/',
            type: true,
            typeTitle: 'nome',
            nameId: 'id_categoria',
            rotaSelected: 'categoria'
        },
        {
            id: 2,
            title: "Tipo",
            txt: 'Busque por tipo',
            rota: '/api/tipo_recurso/nome/',
            type: true,
            typeTitle: 'nome',
            nameId: 'id_tipo_recurso',
            rotaSelected: 'tipo_recurso'
        },
        {
            id: 3,
            title: "Palavra-chave",
            txt: 'Busque por palavra-chave',
            rota: 'api/busca_recursos/palavra_chave/',
            type: false,
            typeTitle: 'nome',
            nameId: 'id',
            //rotaSelected: 'palavra_chave'
        },
        /*{
            id: 4,
            title: "Indicador",
            txt: 'Busque por indicador',
            rota: 'api/indicadores/nome/',
            type: true,
            typeTitle: 'titulo',
            nameId: 'id_indicador',
            rotaSelected: 'indicador'
        },*/
    ];

    useEffect(() => {
        Recurso();
    }, []);

    useEffect(() => {
        Recurso();
    }, [page]);

    const Recurso = async () => {
        try {
            const result = await axios.get('api/recurso/paginado/'+perPage, {
                params: {
                    page:page+1
                }
            });
            setRecursos(result.data.data);
            setTotal(result.data.total)
        } catch (error) {
            console.log(error);
        }
    }

    const ClickSearch = async (item) => {


        try {
            const result = await axios.get('/api/busca_recursos/' + menuItens.rotaSelected + '/' + item[menuItens.nameId], {
                params: {}
            });
            setRecursos(result.data.data);
            setTotal(result.data.data.length);
            setSearchBox(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async(e) => {


        if(e.target.value===""){
            Recurso();
        }

        setSearchBox(true);
        setNEncontado(false);

        const search = e.target.value ? e.target.value : ' ';

        if(search.length > 2) {

            setspinList(true);

            try {

                console.log('spinList', spinList);
                const result = await axios.get(menuItens.rota + search, {});
                setListMenu(result.data.data);

                if (!menuItens.type) {
                    setRecursos(result.data.data);
                    setTotal(result.data.data.length);
                }
                setspinList(false);
            } catch (error) {
                setspinList(false);
                setNEncontado(search === " " ? false : true);


                console.log(error);
            }
        }

    }

    const btnSearch = (item) => {
        setSearch(item);
        setMenuLi(item.id);
        setSearchBox(true);
        setListMenu([]);
    }

    const clickSearchBox = () => {
        setSearchBox(false);
    }
    const clickSearchBoxOn = () => {
        setSearchBox(true);
    }

    return (
        <div className="row">
            <div className="rol-md-12">
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">

                        <div className="container-search" >
                            <ul className="menu-small mb-2">
                                {
                                    menu.map((item, key) => {
                                        return (<li className={"cursor " + (menuLi===item.id ? 'menu-small-on' : '')}
                                                    key={'menu_'+key}
                                                    onClick={() => btnSearch(item)}
                                        >{item.title}</li>);
                                    })
                                }
                            </ul>
                            <div className="input-icon">
                                <input id="ativarBox"
                                       type="text"
                                       className="form-control"
                                       placeholder={menuItens.txt}
                                       onChange={handleSearch}
                                       autoComplete="off"
                                       onClick={() => clickSearchBoxOn()}
                                       style={{zIndex: '999'}}
                                />
                                <i className="fas fa-search"/>

                            </div>
                            <div className="m-2" style={{display: nEncontado ? '' : 'none'}}>Ops! nenhum resultado encontrado!</div>
                            <div  style={{display: menuItens.type ? '' : 'none'}}>
                                <ul className="box-search-itens box-busca" style={{display: searchBox ? '' : 'none'}}>
                                    <div className="fa-3x text-center" style={{display: spinList ? '' : 'none'}} >
                                        <i className="fas fa-circle-notch fa-spin"/>
                                    </div>

                                    <ul className="list-search">
                                        {
                                            listMenu.map((item, key) => {
                                                return (<li className={"cursor "}
                                                            key={'list_'+key}
                                                    onClick={() => ClickSearch(item)}
                                                >{item[menuItens.typeTitle]}</li>);
                                            })
                                        }

                                    </ul>


                                </ul>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                        <div
                            className="container-search-click cursor"
                            style={{display: searchBox ? '' : 'none'}}
                            onClick={() => clickSearchBox()}/>
                    </div>
                    <div className="col-md-3"/>
                    <div className="col-md-12">
                        <p style={{textAlign: 'right'}}>{total} recursos</p>
                    </div>
                </div>
            </div>

            <Item propsData={recursos}/>

            <Paginate
                setPage={setPage}
                total={total}
                page={page}
                perPage={perPage}
            />


        </div>
    );
};
