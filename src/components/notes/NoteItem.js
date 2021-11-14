import React, { useState } from "react";
import { useDispatch } from "react-redux";

import EditNote from "./EditNote";
import { startDeleteNote } from "../../actions/notesActions";

const NoteItem = (props) => {
  const { title, body, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useDispatch();

  const handleToogle = () => {
    setEditToggle(!editToggle);
  };

  const handleDeleteNote = () => {
    dispatch(startDeleteNote(_id));
  };

  return (
    <div>
      {editToggle ? (
        <div>
          <EditNote />
          <button onClick={handleToogle}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
          <button onClick={handleToogle}>Edit</button>
          <button onClick={handleDeleteNote}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
