import React from "react";
import NotesItemBody from "../notes/NotesItemBody";
import DeleteButton from "../button/DeleteButton";
import ArchiveButton from "../button/ArchiveButton";
import UnarchiveButton from "../button/UnarchiveButton";
import { showFormattedDate } from "../../utils/books";

const NotesItem = ({ lists, id, title, createdAt, body, onDelete, onArchive, onUnarchive }) => {
    return (
        <div className="note-item">
            <NotesItemBody lists={lists} title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    lists.archived === false
                        ? <ArchiveButton id={id} onArchive={onArchive} />
                        : <UnarchiveButton id={id} onUnarchive={onUnarchive} />
                }
            </div>
        </div>
    );
}

export default NotesItem;