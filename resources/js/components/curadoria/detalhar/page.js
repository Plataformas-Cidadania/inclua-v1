const PageDetalhar = () => {

    const {useState, useEffect} = React;
    const [curadorias, setCuradorias] = useState([]);
    const [title, setTitle] = useState('');
    const [ultimo, setUltimo] = useState([]);

    const [activeDiv, setActiveDiv] = useState(0);

    useEffect(() => {
        CuradoriaDetalhar();
    }, []);

    const CuradoriaDetalhar = async () => {
        try {
            const result = await axios.get('api/curadoria', {
            });
            const filterData =  result.data.data.filter((obj) => obj.id_curadoria === curadoria_id)

            const ultimasCuradorias = []
            const filterDataUltimos =  result.data.data.filter((obj) => obj.id_curadoria !== curadoria_id)

            filterDataUltimos.map((item, key) => {
                if(key < 4){
                    ultimasCuradorias.push(item)
                }

            })
            setUltimo(ultimasCuradorias)

            setCuradorias(filterData);
            setTitle(filterData[0]?.tema_recorte)

        } catch (error) {
            console.log(error);
        }
    }

    const clickBox = (id) => {
        setActiveDiv(id);
    }

    return (
        <>
            <div className="bg-lgt">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">&nbsp;</div>
                        <div className="col-md-7">
                            <div>
                                <br/><br/>
                                <h1>{title}</h1>
                                <br/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src="/img/bg-top.png" alt="" width="40%" className="float-end" />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    curadorias.map((item, key) => {

                                        let recursos = [];
                                        //////////////////
                                        item.curadoria_recurso.map((item2) => {
                                            recursos.push(item2.recursos);
                                        });
                                        //////////////////

                                        return (
                                            <div  key={'curadoria'+key}>
                                                <div className={"p-4 "+ (key === 0 ? 'bg-lgt' : '')}>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={item.curador.url_imagem} alt="" width="100%" style={{marginBottom: '20px'}}/>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div>{item.mes}</div>
                                                           {/* <h2>{item.tema_recorte}</h2>*/}
                                                        </div>

                                                        <div className="col-md-12">
                                                            <h3><strong>{item.curador.nome}</strong></h3>
                                                            <p dangerouslySetInnerHTML={{__html: item.curador.minicv}}/>
                                                            <a href={item.curador.link_curriculo} target="_blank">Mais informações</a>
                                                            <br/><hr/>
                                                        </div>
                                                    </div>

                                                    <p dangerouslySetInnerHTML={{__html: item.texto}} />

                                                    {item.link_video ? (
                                                        <div className="text-center ">
                                                            <iframe width="80%" height="400"
                                                                    src={"https://www.youtube.com/embed/"+item.link_video.split("=")[1]}
                                                                    title="YouTube video player" frameBorder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowFullScreen /><br/>

                                                        </div>
                                                    ) : null}

                                                    <hr style={{display: key === 0 ? 'none' : ''}}/>


                                                    <br/><br/>

                                                </div>
                                                <br/>
                                                <div className="p-2">
                                                    <Item propsData={recursos}  grupo={item.id_curadoria}/>
                                                </div>
                                                <br/>
                                            </div>

                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2>Arquivo</h2>
                        <div>
                            {ultimo?.map((item, key) => {
                                      return (
                                          <a href={"curadoria/"+item.id_curadoria} key={'ultimo'+key}>
                                              <div className="">
                                                  {item.tema_recorte}
                                            {/*      <p>saiba mais</p>*/}
                                                  <hr/>
                                              </div>
                                          </a>

                                      )
                                    })}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};
