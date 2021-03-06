import React, { useState, useContext } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default () => {
    const [newToDo, setNewToDo] = useState("");
    const dispatch = useDispatch();
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
    return(
        <>
            <h1>Add To Dos</h1>
            <form onSubmit={onSubmit}>
                <input value={newToDo} type="text" placeholder="Write to dos" onChange={onChange} />
            </form>
        </>
    )
};