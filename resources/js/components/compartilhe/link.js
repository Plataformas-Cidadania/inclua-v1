const Link = (props) => {


    const {useState, useEffect} = React;
    const [form, setForm] = useState({
        id_recurso: props.id_recurso,
        idioma: "",
    });

    useEffect(() => {
        let newForm = {
            ...form,
            id_recurso: props.id_recurso,
        }
        setForm(newForm);
    }, [props.id_recurso]);

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

    const handleNotify = (notify) =>{
        setNotify(notify);
    }

    const Insert = async () => {
        handleNotify({type: null, text: null, spin: true});
        try {
            const result = await axios.post('api/link', form);
            handleNotify({type: 'success', text: 'Link inserido!', spin: false});
            props.setListLinks(props.listLinks+1);

            //Limpar form
            let newForm = {
                ...form,
                idioma: "",
                uri: "",
            }
            setForm(newForm);
            setIdiomaSelected(null)
            ////

        } catch (error) {
            //console.log(error);
            handleNotify({type: 'danger', text: 'Link não foi inserido, tente novamente!', spin: false});
        }
    }

    const clickIdioma = (idioma) => {
        setIdiomaSelected(idioma);
        let newForm = {
            ...form,
            idioma: idioma
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
        //console.log('newForm', newForm);
        setForm(newForm);
        validate(newForm);
    }

    const validate = (form) => {
        console.log(form);
        let valid = true;
        let newRequireds = requireds;
        console.log(newRequireds);

        for(let index in requireds){
            console.log(index);
            if(!form[index] || form[index]===""){
                requireds[index] = false;
                valid = false;
            }else{
                requireds[index] = true;
            }

            console.log('form', form[index]);
            console.log('requireds', requireds[index]);
            console.log('valid', valid);
        }

        console.log(newRequireds);

        setRequireds(newRequireds);

        return valid;
    }

    return (
        <form>
            <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
            <div className="row">
                <div className="col-md-12">
                    <div className="label-float">
                        <input className={"form-control form-g "+(requireds.uri ? '' : 'invalid-field')} type="text" name="uri" id="uri"  placeholder=" " required={requireds.uri ? '' : 'required'} onChange={handleForm} value={form.uri}/>
                        <label htmlFor="uri">Link</label>
                        <div className="label-box-info">
                            <p style={{display: requireds.uri ? 'none' : ''}}><i className="fas fa-exclamation-circle"/> Digite o link</p>
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
                        <div className="dorder-container float-start">
                            <button className="btn btn-theme bg-pri" type="button"  onClick={Insert} >
                                <span style={{marginLeft: '10px', display: notify.spin ? '' : 'none'}}><i className="fas fa-spinner float-end fa-spin" /></span>
                                Adicionar <i className="fas fa-angle-right"/>
                            </button>
                        </div>

                        <br/><br/>

                        <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none', clear: 'both'}}>
                            <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2"/></span>
                            <div>{notify.text}</div>
                        </div>

                    </div>
                </div>

            </div>
        </form>
    );
};
