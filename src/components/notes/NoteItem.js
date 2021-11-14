import React from "react";

const NoteItem = (props) => {
  const { title, body } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default NoteItem;
