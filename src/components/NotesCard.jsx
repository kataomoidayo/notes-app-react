import React from "react";
import NotesList from "./NotesList";
import AddNotes from "./AddNotes";

function NotesCard({ addnote, lists, onDelete, onArchive, onUnarchive }) {
    const unarchivedNotes = lists.filter((lists) => lists.archived === false);
    const archivedNotes = lists.filter((lists) => lists.archived === true);

    return (
        <div className="note-app__body">
            <AddNotes addnote={addnote} />
            <h2 className="">Active Notes</h2>
            <NotesList lists={unarchivedNotes} onDelete={onDelete} onArchive={onArchive} />
            <h2 className="">Archived Notes</h2>
            <NotesList lists={archivedNotes} onDelete={onDelete} onUnarchive={onUnarchive} />
        </div>
    )
}

export default NotesCard;