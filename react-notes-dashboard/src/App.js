import React from "react";
import { NotesProvider } from "./context/NotesContext";
import NotesCount from './components/NotesCount';
import AddNote from "./components/AddNote";
import NotesList from './components/NotesList';

function App(){
  return(
    <NotesProvider>
      <div className="App">
        <h1>Notes Dashboard</h1>

        <AddNote/>

        <NotesCount/>

        <NotesList/>

      </div>
    </NotesProvider>
  );
}

export default App;