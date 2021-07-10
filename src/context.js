import React, { useState } from "react";

const LangContext = React.createContext()

const Lang = ({ defaultLang, children, translations }) => {
    const [lang, setLang] = useState(defaultLang);
    return (
        <LangContext.Provider>
            {children}
        </LangContext.Provider>
    )
}

export default Lang;