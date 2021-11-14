import React from "react";
import AddNote from "./AddNote";
import NoteList from "./NotesList";

const NotesContainer = (props) => {
  return (
    <div>
      <h2>My notes</h2>
      <NoteList />
      <AddNote />
    </div>
  );
};

export default NotesContainer;
