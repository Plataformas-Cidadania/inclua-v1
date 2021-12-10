const Link = () => {

    const {useState, useEffect} = React;
    const [form, setForm] = useState({
        id_recurso: 1,
    });

    let idiomaMap = [
        {id: 1, idioma: "PT-BR"},
        {id: 2, idioma: "EN"},
        {id: 3, idioma: "ES"},
    ];

    const [idiomaSelected, setIdiomaSelected] = useState();

    const [notify, setNotify] = useState({type:null, text:null, spin:false});


    const [requireds, setRequireds] = useState({
        uri: true,
        idioma: true,
    });

    useEffect(() => {

    }, []);

    const handleNotify = (notify) =>{
        setNotify(notify);
    }

    const Insert = async () => {
        handleNotify({type: null, text: null, spin: true});
        try {
            const result = await axios.post('api/link', form);
            handleNotify({type: 'success', text: 'Link inserido!', spin: false});
        } catch (error) {
            console.log(error);
            handleNotify({type: 'danger', text: 'Link não foi inserido, tente novamente!', spin: false});
        }
    }

    const clickIdioma = (idioma) => {
        console.log(idioma);
        let newForm = {
            ...form,
            idioma: idioma
        }
        setForm(newForm);
        validate(newForm);
        setIdiomaSelected(idioma);
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
        <form>
            <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
            <div className="row">
                <div className="col-md-12">
                    <div className="label-float">
                        <input className={"form-control form-g "+(requireds.uri ? '' : 'invalid-field')} type="text" name="uri" id="uri"  placeholder=" " required={requireds.uri ? '' : 'required'} onChange={handleForm}/>
                        <label htmlFor="uri">Link</label>
                        <div className="label-box-info">
                            <p style={{display: requireds.uri ? 'none' : ''}}><i className="fas fa-exclamation-circle"/> Digite o link e sobre uri</p>
                        </div>
                    </div>
                    <ul className="toggle">
                        {
                            idiomaMap.map((item, key) => {
                                return(
                                    <li
                                        key={'idioma_'+key}
                                        onClick={() => clickIdioma(item.idioma)}
                                        style={{background: item.idioma===idiomaSelected ? '#E6DACE' : ''}}>
                                        {item.idioma}
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
                                Adicionar <i className="fas fa-angle-right"/>
                            </button>
                        </div>
                        <br/>
                        {
                            notify.type ?
                                <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert">
                                    <i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2"/>
                                    <div>{notify.text}</div>
                                </div>
                                :
                                <div></div>
                        }
                        <br/><br/>
                    </div>
                </div>

            </div>
        </form>
    );
};
