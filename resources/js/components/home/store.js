const HomeContext = React.createContext({});

const HomeProvider = ({children}) => {

    const {useState} = React;

    const [showMenuDiagnostico, setShowMenuDiagnostico] = useState(false);

    return (
        <HomeContext.Provider value={{showMenuDiagnostico, setShowMenuDiagnostico}}>
            {children}
        </HomeContext.Provider>
    );
};
