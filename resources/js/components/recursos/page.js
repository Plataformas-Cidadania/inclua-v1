const Page = () => {

    const {useState, useEffect} = React;
    const [recursos, setRecursos] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [perPage, setPerpage] = useState(2);

    const menu = [
        {id: 1, title: "Tema", txt: 'Busque por tema', rota: ''},
        {id: 2, title: "Tipo", txt: 'Busque por tipo', rota: ''},
        {id: 3, title: "Palavra-chave", txt: 'Busque por palavra-chave', rota: ''},
        {id: 4, title: "Classificação", txt: 'Busque por Classificação', rota: ''},
    ];

    useEffect(() => {
        Recurso();
    }, []);

    useEffect(() => {
        Recurso();
    }, [page]);

    const Recurso = async () => {
        try {
            //const result = await axios.get('json/recursos.json');
            //const result = await axios.get('api/recurso');
            const result = await axios.get('api/recurso/paginado/'+perPage, {
                params: {
                    page:page+1
                }
            });
            console.log('data', result.data);
            setRecursos(result.data.data);
            setTotal(result.data.total)
        } catch (error) {
            //alert('erro');
            console.log(error);
        }
    }

    const btnSearch = (id, txt, rota) => {
        console.log(id, txt, rota)
    }

    return (
        <div className="row">
            <div className="rol-md-12">
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <ul className="menu-small mb-2">
                            {
                                menu.map((item, key) => {
                                    return (<li className="cursor"
                                                key={'menu_'+key}
                                                onClick={() => btnSearch(item.id, item.txt, item.rota)}
                                    >{item.title}</li>);
                                })
                            }
                        </ul>
                        <div className="input-icon">
                            <input id="ativarBox" type="text" className="form-control" placeholder="Busque um ...."/>
                            <i className="fas fa-search"/>
                        </div>
                        <ul className="box-search-itens box-busca">
                            <div className="text-center">
                                <img src="/img/load.gif" alt="" width="60" className="login-img" />
                            </div>
                            {/*<div style={{display: this.state.msg === '' ? '' : 'none'}}>
                        {menuList}
                    </div>
                    <div style={{display: this.state.msg === '' ? 'none' : ''}} className="p-2 text-center">
                        {this.state.msg}
                    </div>*/}
                        </ul>
                        <br/><br/>
                    </div>

                    <div className="col-md-12">
                        <p style={{textAlign: 'right'}}>{total} recursos</p>
                    </div>
                </div>
            </div>

            <Item propsData={recursos}/>

            <Paginate setPage={setPage} total={total} page={page} perPage={perPage}/>


        </div>
    );
};
