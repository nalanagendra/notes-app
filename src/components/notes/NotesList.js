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
  const isLoading = useSelector((state) => state.notes.isLoading);
  const errorMessage = useSelector((state) => state.notes.errorMessage);
  const message = useSelector((state) => state.notes.message);

  useEffect(() => {
    dispatch(startGetNotes());
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading ...</div> : null}
      {message && <div>{message}</div>}
      {!isLoading && notes.length === 0 && (
        <div>Please add your first note</div>
      )}
      {!errorMessage && !isLoading ? (
        notes.map((note) => <NoteItem key={note._id} {...note} />)
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  );
};

export default NoteList;
