const Insert = () => {

    const {useState, useEffect} = React;
    const [tipoMap, setTipoMap] = useState([]);
    const [formatoMap, setFormatoMap] = useState([]);
    const [listLinks, setListLinks] = useState(1);
    const [id_recurso, setIdRecurso] = useState(0);

    const [form, setForm] = useState({
        ultimo_acesso: '1992-02-10 13:21:37',
        id_tipo_recurso: 0,
        id_formato: 0,
    });



    const [tipoSelected, setTipoSelected] = useState(0);
    const [formatoSelected, setFormatoSelected] = useState(0);


    const [notify, setNotify] = useState({type:null, text:null, spin:false});


    const [requireds, setRequireds] = useState({
        nome: true,
        esfera: true,
        ultimo_acesso: true,
        id_tipo_recurso: true,
        id_formato: true,
    });

    useEffect(() => {
        Tipo();
        Formato();
    }, []);

    const Tipo = async () => {
        //handleNotify({type: 'danger', text: null, spin: false});
        try {
            const result = await axios.get('api/tipo_recurso');
            setTipoMap(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const Formato = async () => {
        try {
            const result = await axios.get('api/formatorecurso');
            setFormatoMap(result.data.data)
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
            const result = await axios.post('api/recurso', form);
            setIdRecurso(result.data.data.id_recurso)
            handleNotify({type: 'success', text: 'Recurso inserido, cadastre o links!', spin: false});
        } catch (error) {
            console.log(error);
            handleNotify({type: 'danger', text: 'Recurso não foi inserido, tente novamente!', spin: false});
        }
    }

    const clickTipo = (id) => {
        setTipoSelected(id);
        let newForm = {
            ...form,
            id_tipo_recurso: id
        }
        setForm(newForm);
        validate(newForm);
    }

    const clickFormato = (id) => {
        setFormatoSelected(id);
        let newForm = {
            ...form,
            id_formato: id
        }
        setForm(newForm);
        validate(newForm);
    }

    const handleForm = (event) => {
        let { value, id } = event.target;
        let newForm = {
            ...form,
            [id]: value
        }
        setForm(newForm);
        validate(newForm);
    }

    const validate = (form) => {

        let valid = true;
        let newRequireds = requireds;

        for(let index in requireds){
            if(!form[index] || form[index]===''){
                requireds[index] = false;
                valid = false;
            }else{
                requireds[index] = true;
            }
        }

        setRequireds(newRequireds);

        return valid;
    }


    return (
        <div>
            <form>
                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                <div className="row">
                    <div className="col-md-12" style={{display: notify.type==='success' ? 'none' : ''}}>
                        <div className="label-float">
                            <input className={"form-control form-g "+(requireds.nome ? '' : 'invalid-field')} type="text" name="nome" id="nome"  placeholder=" " required={requireds.nome ? '' : 'required'} onChange={handleForm}/>
                            <label htmlFor="nome">Nome</label>
                            <div className="label-box-info">
                                <p style={{display: requireds.nome ? 'none' : ''}}><i className="fas fa-exclamation-circle"/> Digite o nome e sobre nome</p>
                            </div>
                        </div>
                        <div className="label-float">
                            <input className={"form-control form-g "+(requireds.esfera ? '' : 'invalid-field')} type="text" name="esfera" id="esfera"  placeholder=" " required={requireds.esfera ? '' : 'required'} onChange={handleForm}/>
                            <label htmlFor="esfera">Esfera</label>
                            <div className="label-box-info">
                                <p style={{display: requireds.esfera ? 'none' : ''}}><i className="fas fa-exclamation-circle"/> Digite uma esfera</p>
                            </div>
                        </div>

                        <p>Selecione um tipo:</p>
                        <ul className="toggle">
                            {
                                tipoMap.map((item, key) => {
                                    return(
                                        <li
                                            key={'tipo_'+key}
                                            onClick={() => clickTipo(item.id_tipo_recurso)}
                                            style={{background: item.id_tipo_recurso===tipoSelected ? '#E6DACE' : ''}}>
                                            {item.nome}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <br/>

                        <p>Selecione um formato:</p>
                        <ul className="toggle">
                            {
                                formatoMap.map((item, key) => {
                                    return(
                                        <li
                                            key={'formato_'+key}
                                            onClick={() => clickFormato(item.id_formato)}
                                            style={{background: item.id_formato===formatoSelected ? '#E6DACE' : ''}}>
                                            {item.nome}
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <br/>

                        <div className="col-md-12">
                            <div className="dorder-container">
                                <button className="btn btn-theme bg-pri" type="button"  onClick={Insert} >
                                    <span style={{marginLeft: '10px', display: notify.spin ? '' : 'none'}}><i className="fas fa-spinner float-end fa-spin" /></span>
                                    Próximo <i className="fas fa-angle-right"/>
                                </button>
                            </div>
                            <br/>

                            <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none'}}>
                                <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2" /></span>
                                <div>{notify.text}</div>
                            </div>
                        </div>

                    </div>

                </div>
            </form>

            <div className="col-md-12" style={{display: notify.type === "success" ? '' : 'none'}}>
                <ListLinks
                    listLinks={listLinks}
                    id_recurso={id_recurso}
                />
                <Link
                    listLinks={listLinks}
                    setListLinks={setListLinks}
                    id_recurso={id_recurso}
                />
            </div>
        </div>
    );
};
