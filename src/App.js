import React from "react";
import Lang from "./context";
import translations from "./translations";
import Screen from "./Screen";

function App() {
    return (
        <Lang defaultLang="en" traslations={translations}>
            <Screen />
        </Lang>
    );
}

export default App;