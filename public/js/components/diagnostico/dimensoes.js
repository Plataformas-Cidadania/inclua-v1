var Dimensoes = function Dimensoes() {

    var context = React.useContext(DiagnosticoContext);

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-12 text-center" },
                    React.createElement(
                        "div",
                        { className: "text-center nav-icons" },
                        context.dimensoes.map(function (item, key) {
                            //let classe =  ? 'nav-icons-select' : '';
                            var classe = "cursor ";
                            if (item.teaser.dimensao === context.dimensao) {
                                classe += "nav-icons-select ";
                            }
                            if (!context.dimensoesRespondidas.includes(item.teaser.dimensao) && item.teaser.dimensao !== context.dimensao) {
                                classe += "opacity-5";
                            }
                            return React.createElement("img", { key: "icone-dimensao-" + key,
                                src: "img/dimensao" + item.teaser.dimensao + ".png",
                                alt: "",
                                className: classe,
                                onClick: function onClick() {
                                    return context.setDimensao(item.teaser.dimensao);
                                }
                            });
                        }),
                        React.createElement("hr", null)
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "dorder-container", style: { marginLeft: '10px' } },
            context.dimensoes.map(function (item) {
                if (context.dimensao === item.teaser.dimensao) {
                    return React.createElement(
                        "div",
                        { className: "bg-pri" },
                        React.createElement(
                            "div",
                            { className: "container-fluid" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-3 text-center" },
                                    React.createElement("img", { src: "img/dimensao1-g.png", alt: "" }),
                                    React.createElement(
                                        "h2",
                                        null,
                                        "DIMENS\xC3O ",
                                        item.teaser.dimensao
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-9" },
                                    React.createElement(
                                        "h2",
                                        { className: "mt-5" },
                                        item.teaser.titulo
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "mb-5" },
                                        item.teaser.descricao
                                    )
                                )
                            )
                        )
                    );
                }
            })
        ),
        React.createElement("br", null),
        React.createElement(Indicadores, null)
    );
};