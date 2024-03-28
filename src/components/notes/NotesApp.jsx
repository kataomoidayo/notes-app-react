import React from "react";
import Header from "../element/Header";
import NotesCard from "../element/NotesCard";
import { getInitialData } from "../../utils/books";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: getInitialData(),
            unfilteredList: getInitialData(),
        }

        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.deleteNotesHandler = this.deleteNotesHandler.bind(this);
        this.archiveNotesHandler = this.archiveNotesHandler.bind(this);
        this.unarchiveNotesHandler = this.unarchiveNotesHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    addNoteHandler({ title, body }) {
        this.setState((previousState) => {
            return {
                lists: [
                    ...previousState.lists,
                    {
                        id: + new Date(),
                        createdAt: Date.now(),
                        title,
                        body,
                        archived: false,
                    }
                ],

                unfilteredList: [
                    ...previousState.unfilteredList,
                    {
                        id: + new Date(),
                        createdAt: Date.now(),
                        title,
                        body,
                        archived: false,
                    }
                ]
            }
        });
    }

    deleteNotesHandler(id) {
        const lists = this.state.lists.filter(list => list.id !== id);
        this.setState({ lists });
    }

    archiveNotesHandler(id) {
        const findNotes = this.state.lists.filter((lists) => lists.id === id);
        const archiveNotes = (findNotes[0].archived = true);
        this.setState({ archiveNotes });
    }

    unarchiveNotesHandler(id) {
        const findNotes = this.state.lists.filter((lists) => lists.id === id);
        const unarchiveNotes = (findNotes[0].archived = false);
        this.setState({ unarchiveNotes });
    }

    searchHandler(txt) {
        if (txt.length !== 0 && txt.trim() !== '') {
            this.setState({
                lists: this.state.unfilteredList.filter(lists => lists.title.toLowerCase().includes(txt.toLowerCase())),
            })
        } else {
            this.setState({
                lists: this.state.unfilteredList,
            })
        }
    }

    render() {
        return (
            <>
                <Header onSearch={this.searchHandler} />
                <NotesCard addnote={this.addNoteHandler} lists={this.state.lists} onDelete={this.deleteNotesHandler} onArchive={this.archiveNotesHandler} onUnarchive={this.unarchiveNotesHandler} />
            </>
        )
    }
}

export default NotesApp;