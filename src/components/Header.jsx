import React from "react";

const Header = ({ onSearch }) => {
    const onSearchChange = (ev) => {
        onSearch(ev.target.value);
    }

    return (
        <header className="note-app__header">
            <h1 className="">Notes App</h1>
            <div className="note-search">
                <input type="text" placeholder="Search Notes" onChange={onSearchChange} />
            </div>
        </header>
    );
}

export default Header;