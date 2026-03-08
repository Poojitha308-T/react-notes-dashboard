import React, { useContext } from "react";
import { NotesContext } from './../context/NotesContext';

function NotesList() {
    const { notes, selectNote, setSelectNote } = useContext(NotesContext);

    return(
        <div>
            <h3>Notes</h3>

            <ul>
                {notes.map((note) => (
                    <li key={note.id} onClick={() => setSelectNote(note.id)}
                    style={{cursor: "pointer", padding: "5px"}}>
                        {note.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotesList;