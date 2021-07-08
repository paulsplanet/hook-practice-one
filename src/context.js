import React from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    return(
         <UserContext.Provider value={{ name: "Paul" }}>
        {children}
    </UserContext.Provider>
    )
};

export default UserContextProvider;