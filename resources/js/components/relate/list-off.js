const ListOff = (props) => {


    const {useState, useEffect} = React;
    const [listMap, setListMap] = useState([]);
    const [varTrash, setVarTrash] = useState(0);

    const [idRelate, setIdRelate] = useState(0);

    /*useEffect(() => {
        listGet();
    }, []);*/

    useEffect(() => {
        listGet();
    }, [props]);

    const listGet = async () => {
        try {
            //const result = await axios.get('api/resposta_relate/');
            const result = await axios.get('api/resposta_relate/perguntaRelate/'+props.pergunta_id+'/user/'+id_user);
            setListMap(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const clickDell = async (id) => {
        try {
            const result = await axios.delete('api/resposta_relate/'+id);
            listGet();
        } catch (error) {
            console.log(error);
        }
    }

    const clickTrash = (id) => {
        setVarTrash(id);
    }

    const clickEdit = (id) => {
        console.log(id);
        setIdRelate(id);
    }

    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                {
                    listMap.map((item, key) => {
                        return(
                            <tr key={'table_'+key}>
                                <td>{item.descricao}</td>

                                <th>
                                    <div className={"badge "+(item.status === 0 ? 'bg-warning text-dark': 'bg-success')}>
                                        {item.status === 0 ? 'Em analise' : 'Aprovado'}
                                    </div>
                                </th>
                                <td>
                                    <div style={{display: item.id_resposta===varTrash ? 'none' : ''}}>
                                        <span className="cursor" data-bs-toggle="modal" data-bs-target={"#putModal"+props.pergunta_id} onClick={() => clickEdit(item.id_resposta)}>
                                            <i className="far fa-edit fa-2x" />
                                        </span>
                                         &nbsp;
                                        <span onClick={() => clickTrash(item.id_resposta)} className="cursor">
                                            <i className="far fa-trash-alt fa-2x"/>
                                        </span>
                                    </div>
                                    <div style={{display: item.id_resposta===varTrash ? '' : 'none'}}>
                                        <span className="badge bg-secondary cursor" onClick={() => clickTrash(0)}>Cancelar</span>&nbsp;
                                        <span className="badge bg-danger cursor" onClick={() => clickDell(item.id_resposta)}>Excluir</span>
                                    </div>
                                </td>

                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

            {/*Modal Put*/}
            {
                <div className="modal fade" id={"putModal"+props.pergunta_id} tabIndex="-1" aria-labelledby={"putModalLabel"+props.pergunta_id} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"putModalLabel"+props.pergunta_id}>Editar</h5>
                                {/*<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/}
                            </div>
                            <div className="modal-body">
                                <Edit
                                    id_resposta={idRelate}
                                    listGet={listGet}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};
