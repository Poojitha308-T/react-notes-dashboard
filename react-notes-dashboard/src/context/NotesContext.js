import React, {createContext, useEffect, useState} from "react";

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [selectNote, setSelectNote] = useState(null);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        if(savedNotes){
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        const newNote = {
            id: Date.now(),
            text 
        };
        setNotes([...notes, newNote]);
    };

    return(
        <NotesContext.Provider value= {{notes, addNote, selectNote, setSelectNote}} >
            {children}
        </NotesContext.Provider>
    );
};