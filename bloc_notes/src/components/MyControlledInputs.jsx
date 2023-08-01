import React from "react";
import { useState } from "react";

function MyControlledInputs() {
  const [values, setValues] = useState({ title: "", content: "" });

  const getHandler = (name) => {
    return (event) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };

  return (
    <>
      <div className="preview-main-note">
        <div className="preview-memo-title"> <h1>Title : {values.title}</h1></div>
        <div className="preview-memo-content"><p>Content : {values.content}</p></div>
      </div>

      <div className="main-note-inputs">
        <div>
          <input value={values.title} onChange={getHandler("title")} />
        </div>
        <br></br>
        <div>
          <textarea placeholder="Write your note here..." value={values.content} onChange={getHandler("content")} />
        </div>
      </div>
    </>
  );
}

export default MyControlledInputs;
