import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ lists, onDelete, onArchive, onUnarchive }) => {
    return (
        <>
            {
                lists.length !== 0
                    ? <div className="notes-list">
                        {
                            lists.map((list) => (
                                <NotesItem
                                    key={list.id}
                                    id={list.id}
                                    lists={list}
                                    onDelete={onDelete}
                                    onArchive={onArchive}
                                    onUnarchive={onUnarchive}
                                    {...list}
                                />
                            ))
                        }
                    </div>
                    : <p className="notes-list__empty-message">There is no notes yet</p>
            }
        </>
    )
}

export default NotesList;

