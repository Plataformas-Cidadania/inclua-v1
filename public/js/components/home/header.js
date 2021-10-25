var Header = function Header() {

    var context = React.useContext(HomeContext);

    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col", onClick: function onClick() {
                        return context.setShowMenuDiagnostico(!context.showMenuDiagnostico);
                    } },
                React.createElement(
                    "div",
                    { className: "dorder-container" },
                    React.createElement(
                        "div",
                        { className: "dorder-container-mai" },
                        React.createElement(
                            "div",
                            { className: "btn-icon" },
                            React.createElement("img", { src: "img/icon-diagnostico.png", alt: "Diagn\xF3stico", title: "Diagn\xF3stico", width: "100%" })
                        ),
                        React.createElement(
                            "h2",
                            { className: "btn-icon-h2" },
                            "Diagn\xF3stico"
                        ),
                        React.createElement("div", { className: "clear-both" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "div",
                    { className: "dorder-container" },
                    React.createElement(
                        "div",
                        { className: "dorder-container-mai" },
                        React.createElement(
                            "div",
                            { className: "btn-icon" },
                            React.createElement("img", { src: "img/icon-biblioteca.png", alt: "Biblioteca", title: "Biblioteca", width: "100%" })
                        ),
                        React.createElement(
                            "h2",
                            { className: "btn-icon-h2" },
                            "Biblioteca"
                        ),
                        React.createElement("div", { className: "clear-both" })
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "row", style: { display: context.showMenuDiagnostico ? '' : 'none' } },
            React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "p-3" },
                    "\xA0"
                ),
                React.createElement(
                    "div",
                    { className: "dorder-container" },
                    React.createElement(
                        "div",
                        { className: "bg-lgt dorder-container-mai" },
                        React.createElement(
                            "div",
                            { className: "dorder-container-line" },
                            React.createElement(
                                "h2",
                                null,
                                "Diagn\xF3stico"
                            ),
                            React.createElement("div", { className: "dorder-container-box bg-lgt" })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "p-3" },
                    "\xA0"
                )
            ),
            React.createElement(
                "div",
                { className: "col-md-12" },
                React.createElement("br", null),
                React.createElement("br", null)
            ),
            React.createElement(
                "div",
                { className: "col text-center cursor" },
                React.createElement(
                    "div",
                    { className: "btn-icon btn-icon-hover", style: { top: 0 } },
                    React.createElement("img", { src: "img/icon-completo.png", alt: "Completo", title: "Completo", width: "75%" })
                ),
                React.createElement(
                    "p",
                    { className: "mt-2" },
                    "Completo"
                )
            ),
            React.createElement(
                "div",
                { className: "col text-center cursor" },
                React.createElement(
                    "div",
                    { className: "btn-icon btn-icon-hover", style: { top: 0 } },
                    React.createElement("img", { src: "img/icon-parcial.png", alt: "Parcial", title: "Parcial", width: "75%" })
                ),
                React.createElement(
                    "p",
                    { className: "mt-2" },
                    "Parcial"
                )
            ),
            React.createElement(
                "div",
                { className: "col text-center  opacity-5" },
                React.createElement(
                    "div",
                    { className: "btn-icon btn-icon-hover", style: { top: 0 } },
                    React.createElement("img", { src: "img/icon-analise.png", alt: "Resultado", title: "Resultado", width: "75%" })
                ),
                React.createElement(
                    "p",
                    { className: "mt-2" },
                    "Resultado"
                )
            ),
            React.createElement(
                "div",
                { className: "col text-center  opacity-5" },
                React.createElement(
                    "div",
                    { className: "btn-icon btn-icon-hover", style: { top: 0 } },
                    React.createElement("img", { src: "img/icon-recurso.png", alt: "Recursos", title: "Recursos", width: "75%" })
                ),
                React.createElement(
                    "p",
                    { className: "mt-2" },
                    "Recursos"
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "float-start cursor", style: { position: 'absolute', left: '15px' }, onClick: function onClick() {
                            return context.setShowMenuDiagnostico(!context.showMenuDiagnostico);
                        } },
                    " ",
                    React.createElement("i", { className: "fas fa-angle-left" }),
                    " Voltar"
                ),
                React.createElement(
                    "div",
                    { className: "float-end", style: { position: 'absolute', right: '15px' } },
                    "Biblioteca ",
                    React.createElement("i", { className: "fas fa-angle-right" })
                )
            )
        )
    );
};