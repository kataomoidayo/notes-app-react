import React from "react";

function ArchiveButton({ id, onArchive }) {
    const actionButton = () => {
        onArchive(id);
    }
    return <button className="note-item__archive-button" onClick={actionButton}>Archive</button >
}

export default ArchiveButton;