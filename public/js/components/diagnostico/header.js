//import React from 'react';

var Header = function Header() {

    var context = React.useContext(DiagnosticoContext);

    return React.createElement(
        "div",
        { className: "bg-lgt" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-2" },
                    "\xA0"
                ),
                React.createElement(
                    "div",
                    { className: "col-md-7" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement(
                            "h1",
                            null,
                            "Diagn\xF3stico"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Instru\xE7\xF5es: essa atividade dura aproximadamente de XX a XX minutos e deve ser realizada com bastante aten\xE7\xE3o de forma a retratar com a maior precis\xE3o poss\xEDvel a situa\xE7\xE3o da oferta p\xFAblica na qual voc\xEA est\xE1 envolvido. Caso prefira, voc\xEA pode baixar o question\xE1rio, ler e reunir as informa\xE7\xF5es necess\xE1rias para ent\xE3o voltar aqui e responder \xE0s perguntas."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-6" },
                                React.createElement(
                                    "div",
                                    { className: "dorder-container cursor", onClick: function onClick() {
                                            return context.setTipo(1);
                                        } },
                                    React.createElement(
                                        "div",
                                        { className: "bg-lgt2 p-3" },
                                        React.createElement(
                                            "h2",
                                            { style: { marginTop: '15px' } },
                                            "Completo"
                                        ),
                                        React.createElement("i", { className: "fas fa-angle-right fa-3x float-end",
                                            style: { marginTop: '-52px' } })
                                    )
                                ),
                                React.createElement("br", null)
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-6" },
                                React.createElement(
                                    "div",
                                    { className: "dorder-container cursor", onClick: function onClick() {
                                            return context.setTipo(2);
                                        } },
                                    React.createElement(
                                        "div",
                                        { className: "bg-lgt2 p-3" },
                                        React.createElement(
                                            "h2",
                                            { style: { marginTop: '15px' } },
                                            "Parcial"
                                        ),
                                        React.createElement("i", { className: "fas fa-angle-right fa-3x float-end",
                                            style: { marginTop: '-52px' }
                                        })
                                    )
                                )
                            ),
                            React.createElement("br", null)
                        ),
                        React.createElement("br", null)
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-3" },
                    React.createElement("img", { src: "/img/bg-top.png", alt: "", width: "80%", className: "float-end" })
                )
            )
        )
    );
};

//export default Header;