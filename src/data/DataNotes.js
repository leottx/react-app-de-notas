export default class DataNotes {
  constructor() {
    this.notesList = [];
  }

  addNewNote(title, message, category) {
    const newNote = new Note(title, message, category);
    this.notesList.push(newNote);
  }

  removeNote(index) {
    this.notesList.splice(index, 1);
  }
}

class Note {
  constructor(title, message, category) {
    this.title = title;
    this.message = message;
    this.category = category;
  }
}