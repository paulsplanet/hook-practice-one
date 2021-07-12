import React, { useReducer, useState } from "react";
import reducer, { ADD, COMPLETE, DEL, initialState, UNCOMPLETE } from "./reducer";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newToDo, setNewToDo] = useState("");
    const onSubmit = e => {
        e.preventDefault();
        dispatch({ type: ADD, payload: newToDo })
        setNewToDo("")
    };
    const onChange = e => {
        const {
            target: { value }
        } = e;
        setNewToDo(value);
    }
   
    return (
        <>
            <h1>Add To Dos</h1>
            <form onSubmit={onSubmit}>
                <input value={newToDo} type="text" placeholder="Write to dos" onChange={onChange} />
            </form>

            <ul>
                <h2>To Dos</h2>
                {state.toDos.map((toDo) => (
                    <li key={toDo.id}>
                        <span>{toDo.text}</span>
                        <button onClick={() => dispatch({ type: DEL, payload: toDo.id})}>DEL</button>
                        <button onClick={() => dispatch({ type: COMPLETE, payload: toDo.id})}>✅ </button>
                    </li>))}
            </ul>
            <ul>
                {state.completed.length !== 0 && (
                    <>
                        <h2>Completed toDos</h2>
                        {state.completed.map((toDo) => (
                            <li key={toDo.id}>
                                <span>{toDo.text}</span>
                                <button onClick={() => dispatch({ type: DEL, payload: toDo.id})}>DEL</button>
                                <button onClick={() => dispatch({ type: UNCOMPLETE, payload: toDo.id})}>🔙</button>
                            </li>))
                        }
                    </>)
                }
                
            </ul>
        </>
    );
}

export default App;