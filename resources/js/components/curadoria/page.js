const Page = () => {

    const {useState, useEffect} = React;
    const [curadorias, setCuradorias] = useState([]);
    const [total, setTotal] = useState(0);
    const [activeDiv, setActiveDiv] = useState(0);


    useEffect(() => {
        Curadoria();
    }, []);

    const Curadoria = async () => {
        try {
            const result = await axios.get('api/curadoria', {

            });
            setCuradorias(result.data.data);
            setTotal(result.data.data.length);

        } catch (error) {
            console.log(error);
        }
    }

    const clickBox = (id) => {
        setActiveDiv(id);
    }

    return (
        <div className="row">
            <div className="rol-md-12">
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
                                    <div className={"p-4 "+ (key === 0 ? 'bg-lgt' : '')}>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="float-end badge bg-light text-dark">{item.curador.mes}</div>
                                                <h2>{item.tema_recorte}</h2>
                                            </div>
                                            <div className="col-md-3">
                                                <img src={item.curador.url_imagem} alt="" width="90%"/>
                                            </div>
                                            <div className="col-md-9">
                                                <h2>{item.curador.nome}</h2>
                                                {/*<p>{item.curador.minicv}</p>*/}
                                                <p dangerouslySetInnerHTML={{__html: item.curador.minicv}}/>
                                                <a href={item.curador.link_curriculo} target="_blank">Mais informações</a>
                                            </div>
                                        </div>

                                        <br/><br/>


                                        <p dangerouslySetInnerHTML={{__html: item.texto}}/>

                                        {
                                            item.link_video ? (
                                                <div className="text-center ">
                                                    {/*{item.link_video.split("=")[1]}
                                                    <div className="col-md-8 col-md-offset-2">
                                                        <img src={"http://img.youtube.com/vi/" + item.link_video.split("=")[1] + "/0.jpg"} alt="" width="100%"/>
                                                    </div>*/}

                                                    <iframe width="780" height="400"
                                                            src={"https://www.youtube.com/embed/"+item.link_video.split("=")[1]}
                                                            title="YouTube video player" frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen /><br/>
                                                </div>
                                            ) : null
                                        }

                                        <br/><hr style={{display: key === 0 ? 'none' : ''}}/><br/>

                                        <div
                                            className=" btn btn-primary float-end cursor"
                                            onClick={() => clickBox(item.id_curadoria)}
                                            style={{display: item.curadoria_recurso.length === 0 ? 'none' : ''}}

                                        >
                                            veja os {item.curadoria_recurso.length} recursos <i className="fas fa-angle-right"/>
                                        </div>
                                        <br/><br/>
                                        <div style={{display: activeDiv === item.id_curadoria ? '' : 'none'}}>
                                            <Item propsData={recursos}  grupo={item.id_curadoria}/>
                                        </div>

                                        {/*{
                                            item.curadoria_recurso.map((item2, key) => {
                                                console.log(item2.recurso);
                                                return(
                                                    <div key={'item_'+key}>
                                                        a
                                                        <Item propsData={item2.recurso}/>
                                                    </div>

                                                );
                                            })
                                        }*/}
                                        {/*<Item propsData={item.recursos}/>*/}

                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};
