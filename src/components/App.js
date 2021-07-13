import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

function App() {
    const { toDos, completed } = useState();
   
    return (
        <>
            <h1>Add To Dos</h1>
            <Add />
            <List name={"To Dos"}>
                {toDos.map((toDo) => (
                    <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
                ))}
            </List>
            <List name={completed.length !== 0 ? "Compeleted toDos" : ""}>
                {completed.map((toDo) => (
                    <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted={true} />
                ))}
            </List>
        </>
    );
}

export default App;