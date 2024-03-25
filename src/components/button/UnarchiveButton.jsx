import React from "react";

function UnarchiveButton({ id, onUnarchive }) {
    const actionButton = () => {
        onUnarchive(id);
    }
    return <button className="note-item__archive-button" onClick={actionButton}>Unarchive</button>
}

export default UnarchiveButton;