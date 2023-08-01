import React, { useState, useEffect } from "react";
import MyControlledInputs from "./components/MyControlledInputs";
import "./style/antd.css";
import Sidebar from "./sidebar";
import { createRoot } from "react-dom/client";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="layout">
      <Sidebar notes={notes} onAddNote={() => addNote({ id: Date.now(), title: "New Note", content: "" })} onDeleteNote={deleteNote} />
    <div className="main">
      <MyControlledInputs />
      </div>
    </div>
  );
}

const ComponentDemo = App;
const mountNode = document.getElementById("root");
createRoot(mountNode).render(<ComponentDemo />);
