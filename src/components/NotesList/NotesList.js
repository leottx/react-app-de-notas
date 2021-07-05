import React from 'react'
import CardNote from '../CardNote/CardNote';
import './css/notes-list.css'

class NotesList extends React.Component {
  removeNote(index) {
    this.props.removeNote(index);
  }

  render() {
    let {notesList} = this.props;
  
    return (
      <ul className='notes-list'>
        {notesList.map((note, index) => {
          return <li key={index}>
            <CardNote
              noteTitle={note.title}
              noteMessage={note.message}
              noteCategory={note.category}
              noteIndex={index}
              removeNote={this.removeNote.bind(this)}
            />
          </li>
        })}
      </ul>
    )
  }
}

export default NotesList;