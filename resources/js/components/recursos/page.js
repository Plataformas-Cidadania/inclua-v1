const Page = () => {

    const {useState, useEffect} = React;
    const [recursoMap, setRecursoMap] = useState([]);
    const [recursoMapPaginate, setRecursoMapPaginate] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerpage] = useState(2);
    const [pagination, setPagination] = useState(null);

    const menu = [
        {id: 1, title: "Tema", txt: 'Busque por tema', rota: ''},
        {id: 2, title: "Tipo", txt: 'Busque por tipo', rota: ''},
        {id: 3, title: "Palavra-chave", txt: 'Busque por palavra-chave', rota: ''},
        {id: 4, title: "Classificação", txt: 'Busque por Classificação', rota: ''},
    ];

    useEffect(() => {
        Recurso();
        paginate();
    }, []);

    const Recurso = async () => {
        try {
            //const result = await axios.get('json/recursos.json');
            //const result = await axios.get('api/recurso');
            const result = await axios.get('api/recurso/paginado/'+perPage, {
                params: {
                    page:1
                }
            });
            console.log(result.data.data);
            setRecursoMap(result.data.data);
            setRecursoMapPaginate(result.data);
        } catch (error) {
            //alert('erro');
            console.log(error);
        }
    }


    /*let icon = {
        1:'far fa-file-pdf',
        2:'far fa-file-word',
        3:'far fa-file-image',
        4:'far fa-file-video',
        5:'fas fa-link',
    };*/



    const btnSearch = (id, txt, rota) => {
        console.log(id, txt, rota)
    }

    const paginate = () => {
        /*///////////////*/
        //MONTANDO A PAGINAÇÃO
        let pagina = recursoMapPaginate;
        let p = [];//armazena todas as paginas
        let pages = [];//paginas q serão mostradas
        //let n_paginas = Math.ceil(this.state.totalOscList/10);
        let n_paginas = Math.ceil(10/10);
        //console.log('pagina', pagina);
        let qtdPages = 5;
        for (let i=0; i < n_paginas; i++){
            let active = recursoMapPaginate === i ? 'active' : '';
            p[i] = (
                <li className={"page-item "+active}>
                    {/*<a className="page-link" style={{cursor: 'pointer'}} onClick={()=>this.setPageOscList(i)}>*/}
                    <a className="page-link" style={{cursor: 'pointer'}} >
                        {i + 1}
                    </a>
                </li>);
        }
        if(n_paginas <= 10){
            for (let i=0; i < qtdPages; i++){
                let active = recursoMapPaginate === i ? 'active' : '';
                pages.push(p[i]);
            }
        }else{
            if(pagina<=5){
                pages.push(p[0]);
                pages.push(p[1]);
                pages.push(p[2]);
                pages.push(p[3]);
                pages.push(p[4]);
                pages.push(p[5]);
                pages.push(p[6]);
                pages.push(<li className="page-item "><a className="page-link" href="#">...</a></li>);
                pages.push(p[n_paginas-1]);
            }else if(pagina===n_paginas-1 || pagina===n_paginas-2){
                pages.push(p[0]);
                pages.push(<li className="page-item "><a className="page-link" href="#">...</a></li>);
                pages.push(p[n_paginas-8]);
                pages.push(p[n_paginas-7]);
                pages.push(p[n_paginas-6]);
                pages.push(p[n_paginas-5]);
                pages.push(p[n_paginas-4]);
                pages.push(p[n_paginas-3]);
                pages.push(p[n_paginas-2]);
                pages.push(p[n_paginas-1]);
            }else{
                pages.push(p[0]);
                pages.push(<li className="page-item "><a className="page-link" href="#">...</a></li>);
                if(parseInt(pagina)+4 < n_paginas-1){
                    pages.push(p[parseInt(pagina)-3]);
                    pages.push(p[parseInt(pagina)-2]);
                    pages.push(p[parseInt(pagina)-1]);
                    pages.push(p[pagina]);
                    pages.push(p[parseInt(pagina)+1])
                    pages.push(p[parseInt(pagina)+2])
                    pages.push(p[parseInt(pagina)+3])
                    pages.push(<li className="page-item "><a className="page-link" href="#">...</a></li>);
                }else{
                    pages.push(p[n_paginas-8]);
                    pages.push(p[n_paginas-7]);
                    pages.push(p[n_paginas-6]);
                    pages.push(p[n_paginas-5]);
                    pages.push(p[n_paginas-4]);
                    pages.push(p[n_paginas-3]);
                    pages.push(p[n_paginas-2]);
                    pages.push(p[n_paginas-1]);
                }
                pages.push(p[n_paginas-1]);
            }
        }

        setPagination(
            <ul className="pagination">
                {/* <li className="page-item disabled" style={{display: this.state.pageOscList > 0 ? '' : 'none'}}>
                <a className="page-link" href="#" tabIndex="-1">Anterior</a>
            </li>
            {pages}
            <li className="page-item" style={{display: this.state.pageOscList < parseInt(this.state.totalOscList / 10) ? '' : 'none'}}>
                <a className="page-link" href="#">Próximo</a>
            </li>*/}
                <li className="page-item disabled" >
                    <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                </li>
                {pages}
                <li className="page-item" >
                    <a className="page-link" href="#">Próximo</a>
                </li>
            </ul>
        );
        /*///////////////*/
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
                        <p style={{textAlign: 'right'}}>{recursoMapPaginate.total} recursos</p>
                    </div>
                </div>
            </div>

            <Item propsData={recursoMap}/>


           {/*{
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
                                            <p><strong>Esfera: </strong><span>{item.esfera}</span></p>
                                            <p><strong>Idioma: </strong>
                                                {
                                                    item.links.map((link, key) => {
                                                        return (
                                                            <a href={link.uri} target="_blank" title={link.idioma}>
                                                                {link.idioma}
                                                                {item.links.length !== key+1 ? ', ' : ''}
                                                            </a>
                                                        );
                                                    })
                                                }
                                            </p>
                                            <p><strong>Tipo: </strong><span>{(item.tipo_recurso ? item.tipo_recurso.nome : '')}</span></p>
                                            <p>
                                                <strong>Autoria: </strong>
                                            {
                                                item.autoria.map((autoria, key) => {
                                                    return (
                                                        <span>
                                                            {autoria.autor.nome}
                                                            {item.autoria.length !== key+1 ? ', ' : ''}
                                                        </span>
                                                    );
                                                })
                                            }
                                            </p>
                                            <br/>
                                    </div>

                                    {
                                        item.links.map((link, key) => {
                                            return (
                                                key===0 ?
                                                    <div className="col-6">
                                                        <div className="dorder-container">
                                                            <a href={link.uri} className="btn btn-theme bg-pri" type="button">Acessar <i className="fas fa-angle-right"/></a>
                                                        </div>
                                                    </div>
                                                :
                                                    <div className="col-2 d-flex justify-content-end text-right mt-2">
                                                        <a href={link.uri} target="_blank"> {link.idioma} <i className="fas fa-angle-right"/></a>
                                                    </div>
                                            );
                                        })
                                    }
                                </div>
                        </div>
                        <br/>
                    </div>

                    );
                })
            }*/}


            {pagination}

            {/*<div className="col-md-12 text-center">
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
            </div>*/}

        </div>
    );
};
