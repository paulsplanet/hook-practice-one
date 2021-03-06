import React from "react";
import { useFns } from "./context";
import Header from "./Header";  

const Screen = () => {
    const { logUserIn } = useFns();
    return (
        <div>
            <Header />
            <h1>First Screen</h1>
            <button onClick={logUserIn}>Log User In</button>
        </div>
    )
    
};

export default Screen;