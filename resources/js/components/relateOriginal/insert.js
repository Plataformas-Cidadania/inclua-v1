const Insert = (props) => {

    const {useState} = React;

    const [form, setForm] = useState({
        descricao: '',
        id_pergunta: props.id_pergunta,
        id_user: props.id_user,
        status: 0,
    });

    const [teste, setTeste] = useState(false);



    const [notify, setNotify] = useState({type:null, text:null, spin:false});

    const handleNotify = (notify) =>{
        setNotify(notify);
    }


    const Update = async () => {
        handleNotify({type: null, text: null, spin: true});
        try {
            const result = await axios.post('api/resposta_relate', form);

            handleNotify({type: 'success', text: 'Resposta inserida com sucesso!', spin: false});

            //Limpar form
            let newForm = {
                ...form,
                descricao: "",
            }
            setForm(newForm);
            ////

            setTeste(true);

        } catch (error) {
            console.log(error);
            handleNotify({type: 'danger', text: 'Resposta não foi inserido, tente novamente!', spin: false});
        }
    }

    const handleForm = (event) => {
        let { value, id } = event.target;
        let newForm = {
            ...form,
            [id]: value
        }
        setForm(newForm);

    }


    return (
        <div className="row">
            <textarea id="descricao" name="descricao" rows="5" cols="33" placeholder={"Deixe um descrição"}  onChange={handleForm} value={form.descricao}/>

            <div className="col-md-12">
                <br/>
                <div className="dorder-container justify-content-end">
                    <button className="btn btn-theme bg-pri "
                            type="button"  onClick={() => Update()}>Enviar<i className="fas fa-angle-right"/>
                            <span style={{marginLeft: '10px', display: notify.spin ? '' : 'none'}}><i className="fas fa-spinner float-end fa-spin" /></span>
                    </button>
                </div>
                <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none'}}>
                    <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2" /></span>
                    <div>{notify.text}</div>
                </div>
            </div>
            <List teste={teste} pergunta_id={props.id_pergunta}/>
        </div>
    );
};
