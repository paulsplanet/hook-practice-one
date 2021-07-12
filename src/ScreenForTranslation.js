import React from "react";
import { useT, useSetLang } from "./contextForTranslation";

export default () => {
    const setLang = useSetLang();
    const t = useT();
    return (
      <>
        <h1>{t("Hello!")}</h1>
        <button onClick={() => setLang("es")}>{t("Translate")}</button>
    </>  
    )
}
