import React from "react";

class AddNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(ev) {
        this.setState(() => {
            return {
                title: ev.target.value.slice(0, this.state.limit),
            }
        });
    }

    onBodyChangeEventHandler(ev) {
        this.setState(() => {
            return {
                body: ev.target.value
            }
        });
    }

    onSubmitEventHandler(ev) {
        ev.preventDefault();
        this.props.addnote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <form onSubmit={this.onSubmitEventHandler}>
                    <h2>Add Notes</h2>
                    <p className="note-input__title__char-limit">Remaining characters : {this.state.limit - this.state.title.length}</p>
                    <input className="note-input__title" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
                    <input className="note-input__body" type="text" placeholder="Contents" value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddNotes;