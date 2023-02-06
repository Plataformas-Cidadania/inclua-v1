const ItemDetalhar = (props) => {
    const {useState, useEffect} = React;
    const [formato, setFormato] = useState([]);
    const [modal, setModal] = useState({
        id: 0,
        nome: '111',
        resumo: '222'
    });


    const propsData = props.propsData;

    let icon = {
        1:'far fa-file-pdf',
        2:'far fa-file-word',
        3:'far fa-file-image',
        4:'far fa-file-video',
        5:'fas fa-link',
    };

    //console.log('***props: ', propsData);
    useEffect(() => {
        Formato();
    }, []);

    /*useEffect(() => {

    }, [modal]);*/

    const Formato = async () => {
        try {
            const result = await axios.get('/api/formatorecurso/', {});
            setFormato(result.data.data);

            // Não se esqueça de usar var!

        } catch (error) {
            console.log(error);
        }
    }




    const callModal = (id, nome, resumo) => {
        setModal(
            {
                id: id,
                nome: nome,
                resumo: resumo
            }
        );
        $('#exampleModal').modal('show');

    }



    return (
        <div className={"row"}>
            {
                propsData.map((item, key) => {

                    function isCherries(fruit) {
                        return fruit.id_formato === item.id_formato;
                    }
                    let nomeFormato = formato.find(isCherries);


                    //console.log('***link: ', item.links[0].uri);
                    return(
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"  key={key}>
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
                                    <div className="col-6 text-center">
                                        <div className="bg-lgt2 box-list-formato">
                                            {nomeFormato ? nomeFormato.nome : ''}
                                            {/*<i className={icon[item.id_formato]+" fa-3x"}/>*/}
                                        </div>

                                    </div>
                                    <div className="col-2">&nbsp;</div>
                                </div>
                                <div className="row">
                                    <div className="col-12 box-list-p">
                                        <br/>
                                        <p><strong>Esfera: </strong><span>{item.esfera}</span></p>
                                        <p><strong>Idioma: </strong>
                                            {/*{
                                                item.links !== undefined ?
                                                    item.links.map((link, key) => {
                                                        return (
                                                            <a href={link.uri} target="_blank" title={link.idioma} key={"linksIdoma"+key}>
                                                                {link.idioma}
                                                                {item.links.length !== key+1 ? ', ' : ''}
                                                            </a>
                                                        );
                                                    })
                                                    : null
                                            }*/}
                                            {
                                                item.links[0] !== undefined ?
                                                    <a href="" target="_blank" title={item.links[0].idioma} key={"linksIdoma"+key}>
                                                        {item.links[0].idioma}
                                                    </a>
                                                    : null
                                            }
                                        </p>
                                        <p><strong>Tipo: </strong><span>{(item.tipo_recurso ? item.tipo_recurso.nome : '')}</span></p>
                                        <p>
                                            <strong>Autoria: </strong>
                                            {
                                                item.autoria !== undefined ? item.autoria.map((autoria, key) => {
                                                    return (
                                                        <span key={"autoria"+key}>
                                                            {autoria.autor.nome}
                                                            {item.autoria.length !== key+1 ? ', ' : ''}
                                                        </span>
                                                    );
                                                }) : null
                                            }
                                        </p>
                                        <br/>
                                    </div>

                                    <div className="col-12">
                                        {
                                            item.links[0] !== undefined ?
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="dorder-container">
                                                            <a href={item.links[0].uri} className="btn btn-theme bg-pri" type="button" target="_blank">Acessar <i className="fas fa-angle-right"/></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="dorder-container" onClick={() => callModal(item.id_recurso, item.nome, item.resumo)}>
                                                            <a  className="btn btn-theme bg-pri" type="button" target="_blank">Detalhar <i className="fas fa-angle-right"/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>

                                    {/*{
                                        item.links !== undefined ?
                                            item.links.map((link, key) => {
                                                return (
                                                    key===0 ?
                                                        <div className="col-6" key={"btn1"+key}>
                                                            <div className="dorder-container">
                                                                <a href={link.uri} className="btn btn-theme bg-pri" type="button" target="_blank">Acessar <i className="fas fa-angle-right"/></a>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="col-2 d-flex justify-content-end text-right mt-2" key={"btn2"+key}>
                                                            <a href={link.uri} target="_blank"> {link.idioma} <i className="fas fa-angle-right"/></a>
                                                        </div>
                                                );
                                            })
                                            : null
                                    }*/}
                                </div>
                            </div>
                            <br/>
                        </div>

                    );
                })
            }


            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{modal.nome}</h5>
                            </div>
                            <div className="modal-body">
                                {modal.resumo===null ? "Este conteúdo não está disponível no momento!" : modal.resumo}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};
