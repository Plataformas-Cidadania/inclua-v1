const Item = (props) => {

    const propsData = props.propsData;

    let icon = {
        1:'far fa-file-pdf',
        2:'far fa-file-word',
        3:'far fa-file-image',
        4:'far fa-file-video',
        5:'fas fa-link',
    };

    //console.log('***props: ', propsData);

    return (
        <div className={"row"}>
            {
                propsData.map((item, key) => {
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
                                                item.links !== undefined ?
                                                    item.links.map((link, key) => {
                                                        return (
                                                            <a href={link.uri} target="_blank" title={link.idioma}>
                                                                {link.idioma}
                                                                {item.links.length !== key+1 ? ', ' : ''}
                                                            </a>
                                                        );
                                                    })
                                                    : null
                                            }
                                        </p>
                                        <p><strong>Tipo: </strong><span>{(item.tipo_recurso ? item.tipo_recurso.nome : '')}</span></p>
                                        <p>
                                            <strong>Autoria: </strong>
                                            {
                                                item.autoria !== undefined ? item.autoria.map((autoria, key) => {
                                                    return (
                                                        <span>
                                                            {autoria.autor.nome}
                                                            {item.autoria.length !== key+1 ? ', ' : ''}
                                                        </span>
                                                    );
                                                }) : null
                                            }
                                        </p>
                                        <br/>
                                    </div>

                                    {
                                        item.links !== undefined ?
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
                                        : null
                                    }
                                </div>
                            </div>
                            <br/>
                        </div>

                    );
                })
            }
        </div>
    );
};
