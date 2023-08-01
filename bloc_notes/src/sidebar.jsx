function Sidebar({ notes, onAddNote, onDeleteNote }) {
  return (
    <div>
      <div className="sidebar-header">
        <h1>Notes</h1>
        <button className="add-btn" onClick={onAddNote}>
          Add
        </button>
      </div>
      <div className="sidebar-memo-list">
        {notes.map((note) => (
          <div className="sidebar-note" key={note.id}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.content && note.content.substr(0, 50) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
