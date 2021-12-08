const Pergunta = () => {

    const {useState, useEffect} = React;
    const [recursoMap, setRecursoMap] = useState([]);

    useEffect(() => {
        Recurso();
    }, []);

    const Recurso = async () => {
        try {
            //const result = await axios.get('json/recursos.json');
            const result = await axios.get('api/recurso');
            console.log(result.data.data);
            setRecursoMap(result.data.data)
        } catch (error) {
            alert('erro');
            //console.log(error);
        }
    }

    let icon = {
        1:'far fa-file-pdf',
        2:'far fa-file-word',
        3:'far fa-file-image',
        4:'far fa-file-video',
        5:'fas fa-link',
    };

    let menu = [
        {id: 1, title: "Tema", txt: 'Busque por tema', rota: ''},
        {id: 2, title: "Tipo", txt: 'Busque por tipo', rota: ''},
        {id: 3, title: "Palavra-chave", txt: 'Busque por palavra-chave', rota: ''},
        {id: 4, title: "Classificação", txt: 'Busque por Classificação', rota: ''},
    ];

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
                </div>
            </div>
           {

                recursoMap.map((item, key) => {
                    return(

                    <div className="col-md-4"  key={key}>
                        <div className="dorder-container">

                            <div className="bg-lgt">
                                <div className="bg-lgt2 text-center box-list-cod">
                                    <h6 className="mt-4">Código</h6>
                                    <h2>{item.id_recurso}</h2>
                                </div>
                                <div className="p-2 box-list-title">
                                    <p className="mt-2">{item.nome}</p>
                                </div>
                                <div className="clear-both"/>
                            </div>

                            <br/>

                                <div className="row">
                                    <div className="col-4"><img src="img/lines.png" alt="" width="90%"/></div>
                                    <div className="col-4 text-center">
                                        <div className="bg-lgt2 box-list-i">
                                            <i className={icon[item.id_formato]+" fa-3x"}/>
                                        </div>

                                    </div>
                                    <div className="col-4">&nbsp;</div>
                                </div>
                                <div className="row">
                                    <div className="col-12 box-list-p">
                                        <br/>
                                            <p><strong>Esfera:</strong> <span>{item.esfera}</span></p>
                                            <p><strong>Idioma:</strong> <span>{item.idioma}</span></p>
                                            <p><strong>Tipo:</strong> <span>{(item.tipo_recurso ? item.tipo_recurso.nome : '')}</span></p>
                                            {/*<p><strong>Autoria:</strong> <span>{item.autoria}</span></p>*/}
                                            <p>
                                                <strong>Autoria:</strong><br/>
                                            {
                                                item.autoria.map((autoria, key) => {
                                                    return (
                                                        <div>{autoria.autor.nome}</div>
                                                    );
                                                })
                                            }
                                            </p>
                                            <br/>
                                    </div>
                                    <div className="col-9">
                                        <div className="dorder-container">
                                            <button className="btn btn-theme bg-pri" type="button">Acessar <i className="fas fa-angle-right"/></button>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex justify-content-end">
                                        <i className="far fa-copy fa-2x "/>
                                    </div>
                                </div>
                        </div>
                        <br/>
                    </div>

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

                    );
                })
            }

            <div className="col-md-12 text-center">
                <br/>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                <br/>
            </div>

        </div>
    );
};
