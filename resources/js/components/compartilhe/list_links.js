const ListLinks = (props) => {

    const {useState, useEffect} = React;
    const [listMap, setListMap] = useState([]);
    const [varTrash, setVarTrash] = useState(0);

    useEffect(() => {
        listGet();
    }, [props.listLinks]);

    const listGet = async () => {
        try {
            const result = await axios.get('api/link');
            setListMap(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const clickDell = async (id) => {
        try {
            const result = await axios.delete('api/link/'+id);
            listGet();
        } catch (error) {
            console.log(error);
        }
    }

    const clickTrash = (id) => {
        setVarTrash(id);
    }

    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Uri</th>
                    <th scope="col">Idioma</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                {
                    listMap.map((item, key) => {
                        return(
                            <tr key={'table_'+key}>
                                <td>{item.uri}</td>
                                <td>{item.idioma}</td>
                                <td>
                                    <div style={{display: item.id_link===varTrash ? 'none' : ''}}>
                                        <span onClick={() => clickTrash(item.id_link)} className="cursor">
                                            <i className="far fa-trash-alt fa-2x"/>
                                        </span>
                                    </div>
                                    <div style={{display: item.id_link===varTrash ? '' : 'none'}}>
                                        <span className="badge bg-secondary cursor" onClick={() => clickTrash(0)}>Cancelar</span>&nbsp;
                                        <span className="badge bg-danger cursor" onClick={() => clickDell(item.id_link)}>Excluir</span>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>

        </div>
    );
};
