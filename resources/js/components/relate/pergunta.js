const Pergunta = () => {

    const {useState, useEffect} = React;
    const [perguntas, setPerguntas] = useState([]);
    const [notify, setNotify] = useState({type:null, text:null, spin:false});
    const [respostas, setRespostas] = useState([]);

    useEffect(() => {
        listPerguntas();
    }, []);

    useEffect(() => {
        console.log(respostas);
    }, [respostas]);

    const listPerguntas = async () => {
        try {
            const result = await axios.get('api/pergunta_relate');
            setPerguntas(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }


    const handleNotify = (notify) =>{
        setNotify(notify);
    }

    const Insert = async () => {
        handleNotify({type: null, text: null, spin: true});
        try {
            //const jsonRespostas = JSON.stringify({resposta: respostas});
            const jsonRespostas = JSON.stringify(respostas);
            const result = await axios.post('resposta_relate/insereRespostas', jsonRespostas, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(result.data.success){
                handleNotify({type: 'success', text: 'Obrigada por compartilhar suas experiências conosco!', spin: false});
                return;
            }

            handleNotify({type: 'danger', text: 'Resposta não foi inserido, tente novamente!', spin: false});
        } catch (error) {
            console.log(error);
            handleNotify({type: 'danger', text: 'Resposta não foi inserido, tente novamente!', spin: false});
        }
    }

    const handleAlternativaRespostas = (value, idPergunta) => {
        handleRespostas(value, idPergunta);
    }

    const handleTextRespostas = (event, idPergunta) => {
        handleRespostas(event.target.value, idPergunta);
    }

    const handleRespostas = (value, idPergunta) => {
        let newRespostas = respostas;
        let existeResposta = false;
        for(let i = 0; i < newRespostas.length; i++){
            if(newRespostas[i].id_pergunta === idPergunta){
                newRespostas[i].descricao = value;
                existeResposta = true;
                break;
            }
        };
        if(!existeResposta){
            newRespostas.push({
                descricao: value,
                id_pergunta: idPergunta,
                status: 0
            });
        }
        setRespostas(newRespostas);
        console.log(newRespostas);
    }

    return (
        <form>
            {
                perguntas.map((item, key) => {

                    const descricao = item.descricao

                    //console.log(item);

                    return(
                        <div key={'pergunta'+item.id_pergunta}>

                            <div className="dorder-container">
                                <div className="dorder-container-mai p-4 ">
                                    <div dangerouslySetInnerHTML={{__html: descricao}}/>
                                    <div className="row">
                                        <div className="col-md-12">
                                            {
                                                item.tipo_resposta === 1  ? (
                                                    <textarea
                                                        id="descricao"
                                                        name="descricao"
                                                        rows="5"
                                                        cols="33"
                                                        placeholder={"Deixe um descrição"}
                                                        onChange={e => handleTextRespostas(e, item.id_pergunta)}
                                                        style={{width: '100%'}}
                                                    />
                                                ) : (
                                                    <Alternativas
                                                        id_pergunta={item.id_pergunta}
                                                        handleAlternativaRespostas={handleAlternativaRespostas}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                    {/*<Tipo />*/}
                                    {/*<Insert
                                        id_pergunta={item.id_pergunta}
                                        id_user={id_user}
                                    />*/}
                                </div>
                            </div>
                            <br/>
                        </div>

                    );
                })
            }

            <div className="col-md-12">
                <br/>
                <div className="dorder-container justify-content-end">
                    <button className="btn btn-theme bg-pri "
                            type="button"  onClick={() => Insert()}>Enviar<i className="fas fa-angle-right"/>
                        <span style={{marginLeft: '10px', display: notify.spin ? '' : 'none'}}><i className="fas fa-spinner float-end fa-spin" /></span>
                    </button>
                </div>
                <br/>
                <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none'}}>
                    <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2" /></span>
                    <div>{notify.text}</div>
                </div>
            </div>
        </form>
    );
};
