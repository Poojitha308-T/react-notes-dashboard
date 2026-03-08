import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from './../context/NotesContext';

function AddNote() {
    const [note, setNote] = useState("");
    const { addNote } = useContext(NotesContext);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleAdd = () => {
        if(note.trim() === "") return;
        addNote(note);
        setNote("");
        inputRef.current.focus();
    };

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Enter a note" value={note} onChange={(e) => setNote(e.target.value)} />

            <button onClick={handleAdd}>Add Note</button>
        </div>
    );
} 

export default AddNote;