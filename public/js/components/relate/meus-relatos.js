const MeusRelatos = props => {
  const {
    useState,
    useEffect
  } = React;
  const [respostas, setRespostas] = useState([]);
  useEffect(() => {
    listRelatos();
  }, []);

  const listRelatos = async () => {
    try {
      const result = await axios.get('api/resposta_relate/user/' + props.id_user);
      let idRelate = 0;
      let respostas = result.data.data.map((item, key) => {
        let showRelate = false;

        if (item.relate.id_relate !== idRelate) {
          idRelate = item.relate.id_relate;
          showRelate = true;
        }

        var dataInput = item.relate.created_at.slice(0, 10);
        let data = new Date(dataInput);
        dataFormatada = data.toLocaleDateString('pt-BR', {
          timeZone: 'UTC'
        });
        return /*#__PURE__*/React.createElement("div", {
          key: "relate" + key
        }, /*#__PURE__*/React.createElement("p", {
          style: {
            display: showRelate ? '' : 'none'
          },
          className: "bg-lgt p-3"
        }, /*#__PURE__*/React.createElement("strong", null, "Relato ", item.relate.id_relate, " - ", dataFormatada)), /*#__PURE__*/React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: item.pergunta.descricao
          }
        }), /*#__PURE__*/React.createElement("div", null, item.descricao), /*#__PURE__*/React.createElement("hr", null));
      });
      setRespostas(respostas);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, respostas);
};

ReactDOM.render( /*#__PURE__*/React.createElement(MeusRelatos, {
  id_user: id_user
}), document.getElementById('meus-relatos'));