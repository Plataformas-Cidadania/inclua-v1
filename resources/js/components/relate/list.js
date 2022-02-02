const List = () => {


    const {useState, useEffect} = React;
    const [listMap, setListMap] = useState([]);
    const [varTrash, setVarTrash] = useState(0);


    const [idRedurso, setIdRecurso] = useState(0);

    useEffect(() => {
        listGet();
    }, []);

    const listGet = async () => {
        try {
            const result = await axios.get('api/resposta_relate/');
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

    /*const clickEdit = (id) => {
        setIdRecurso(id);
    }*/

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
                                    <div className={"badge "+(item.status === 1 ? 'bg-success' : 'bg-warning text-dark')}>
                                        {item.status === 1 ? 'Aprovado' : 'Em analise'}
                                    </div>
                                </th>
                                <td>
                                    <div style={{display: item.id_recurso===varTrash ? 'none' : ''}}>
                                        {/*<span className="cursor" data-bs-toggle="modal" data-bs-target="#putModal" onClick={() => clickEdit(item.id_recurso)}>*/}
                                        <span className="cursor" data-bs-toggle="modal" data-bs-target="#putModal" >
                                            <i className="far fa-edit fa-2x" />
                                        </span>
                                         &nbsp;
                                        <span onClick={() => clickTrash(item.id_recurso)} className="cursor">
                                            <i className="far fa-trash-alt fa-2x"/>
                                        </span>
                                    </div>
                                    <div style={{display: item.id_recurso===varTrash ? '' : 'none'}}>
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
            {/*Modal Insert*/}
            {
                <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="insertModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="insertModalLabel">Inserir</h5>
                                {/*<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/}
                            </div>
                            <div className="modal-body">
                                {/*<Insert listGet={listGet}/>*/}
                            </div>
                            {/*<div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>*/}
                        </div>
                    </div>
                </div>
            }
            {/*Modal Put*/}
            {
                <div className="modal fade" id="putModal" tabIndex="-1" aria-labelledby="putModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="putModalLabel">Editar</h5>
                                {/*<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/}
                            </div>
                            <div className="modal-body">
                                {/*<Edit
                                    id_recurso={idRedurso}
                                    listGet={listGet}/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};