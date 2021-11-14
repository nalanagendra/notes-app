import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NoteItem from "./NoteItem";
import { startGetNotes } from "../../actions/notesActions";

const NoteList = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) =>
    state.notes.notes.map((note) => {
      return { ...note };
    })
  );

  useEffect(() => {
    dispatch(startGetNotes());
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note._id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
