const Edit = (props) => {

    const {useState, useEffect} = React;
    const [form, setForm] = useState([]);
    const [notify, setNotify] = useState({type:null, text:null, spin:false});

    const [requireds, setRequireds] = useState({
        status: 2,
        descricao: true,
    });

    useEffect(() => {
        if(props.id_resposta > 0){
            Detail();
        }
    }, [props.id_resposta]);

    const Detail = async () => {
        console.log(props.id_recurso);
        try {
            const result = await axios.get('api/resposta_relate/'+props.id_resposta);
            setForm(result.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleNotify = (notify) =>{
        setNotify(notify);
    }


    const Update = async () => {
        handleNotify({type: null, text: null, spin: true});

        const params = new URLSearchParams();
        params.append('descricao', form.descricao);

        try {
            const result = await axios.put('api/resposta_relate/'+form.id_resposta, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            handleNotify({type: 'success', text: 'Recurso inserido, cadastre o links!', spin: false});
        } catch (error) {
            console.log(error);
            handleNotify({type: 'danger', text: 'Recurso não foi inserido, tente novamente!', spin: false});
        }
        props.listGet();
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
                    <div className="col-md-12">
                        <div className="label-float">
                            <textarea
                                id="descricao"
                                name="descricao"
                                rows="5"
                                cols="33"
                                placeholder={"Deixe um descrição"}
                                onChange={handleForm}
                                value={form.descricao}
                                required={requireds.descricao ? '' : 'required'}
                                style={{width: '100%'}}/>
                        </div>
                        <div className="dorder-container">
                            <button className="btn btn-theme bg-pri" type="button"  onClick={Update} >
                                <span style={{marginLeft: '10px', display: notify.spin ? '' : 'none'}}><i className="fas fa-spinner float-end fa-spin" /></span>
                                Alterar <i className="fas fa-angle-right"/>
                            </button>
                        </div>
                        <br/>
                        <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none'}}>
                            <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2" /></span>
                            <div>{notify.text}</div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Fechar</button>
            </div>
        </div>
    );
};
