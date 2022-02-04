const Inserts = () => {
    const {useState} = React;
    const [icon, setIcon] = useState(0);
    const [varValid, setValid] = useState(false);
    const [teste, setTeste] = useState(false);


    const [notify, setNotify] = useState({type:null, text:null, spin:false});
    const [form, setForm] = useState({
        icone: 1,
        descricao: '',
        status: 0,
        id_user: id_user,

    });

    const ClickIcon = (id) => {
        setIcon(id);
        let newForm = {
            ...form,
            icone: id
        }
        setForm(newForm);
        validate(newForm);
    }

    const [requireds, setRequireds] = useState({
        icone: true,
        descricao: true,
    });


    const Insert = async () => {
        handleNotify({type: null, text: null, spin: true});
        try {
            handleNotify({type: 'success', text: 'Depoimento registrado, Obrigado!', spin: false});
            const result = await axios.post('api/depoimento', form);
            //Limpar form
            let newForm = {
                ...form,
                descricao: "",
            }
            setForm(newForm);
            setTeste(true);

        } catch (error) {
            handleNotify({type: 'danger', text: 'Depoimento não foi registrado! Tente novamente!', spin: false});
        }
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

        setValid(valid);
        return valid;
    }

    const handleNotify = (notify) =>{
        setNotify(notify);
    }

    return (
        <div>

                <div className="dorder-container">
                    <div className="dorder-container-mai p-4 ">
                        <form>
                            <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
                        <div className="row">
                            <p>Avatar</p>
                            <img src="img/d1.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 1 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(1)}/>
                            <img src="img/d2.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 2 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(2)}/>
                            <img src="img/d3.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 3 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(3)}/>
                            <img src="img/d4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 4 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(4)}/>
                            <img src="img/d5.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 5 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(5)}/>
                            <img src="img/d6.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 6 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(6)}/>
                            <img src="img/d7.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 7 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(7)}/>
                            <img src="img/d8.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 8 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(8)}/>
                            <img src="img/d9.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 9 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(9)}/>
                            <img src="img/d10.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 10 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(10)}/>
                            <br/><br/>

                            <textarea id="descricao" name="descricao" rows="5" cols="33" placeholder={"Deixe um comentário"}   className="mt-2" onChange={handleForm} defaultValue={form.descricao}/>

                            <div className="dorder-container justify-content-end mt-2" >
                                <button className="btn btn-theme bg-pri "
                                        type="button"
                                        onClick={() => Insert()}
                                >Enviar <i className="fas fa-angle-right"/>
                                    <span style={{marginLeft: '10px', display: notify.spin ? '' : 'none'}}><i className="fas fa-spinner float-end fa-spin" /></span>
                                </button>
                            </div>
                            <br/>
                            <div className={"mt-3 alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none'}}>
                                <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2" /></span>
                                <div>{notify.text}</div>
                            </div>
                        </div>
                        </form>

                        <List teste={teste}/>

                    </div>
                </div>
                <br/>


        </div>

    );
};
