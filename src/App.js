import React from 'react'
import ReactDOM from 'react-dom';
import NoteForm from './components/NotesForm/NotesForm';
import NotesList from './components/NotesList/NotesList';
import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import CategoriesList from './components/CategoriesList/CategoriesList';
import DataNotes from './data/DataNotes';
import DataCat from './data/DataCat';
import './reset.css';
import './general.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.notes = new DataNotes();
    this.categories = new DataCat();

    // this.state = {
      // notes: [], // Lista de notas criadas
      // categories: []
    // }
  }

  // Cria uma nova nota
  // createNewNote(title, message, category) {
  //   const notes = [...this.state.notes, {title, message, category}];
    
  //   this.setState({
  //     notes
  //   });
  // }


  // Cria uma nova categoria
  // createNewCategory(category) {
  //   const categories = [...this.state.categories, category];

  //   this.setState({
  //     categories
  //   });
  // }

  // Remove uma categoria
  // removeCategory(index) {
  //   const {categories} = this.state;
  //   categories.splice(index, 1);

  //   this.setState({
  //     categories
  //   });
  // }


  // Remove uma nota
  // removeNote(index) {
  //   const {notes} = this.state;
  //   notes.splice(index, 1);

  //   this.setState({
  //     notes
  //   });
  // }

  render() {
    return (
      <>
        <NoteForm
          createNewNote={this.notes.addNewNote}
          categoriesList={this.categories.catList}
        />
        <section>
          <CategoriesForm
            createNewCategory={this.categories.addNewCategory}
          />
          <NotesList
            notesList={this.notes.notesList}
            removeNote={this.notes.removeNote}
          />
        </section>
        <section className="categories">
          <CategoriesList
            removeCategory={this.categories.removeCategory}
            categoriesList={this.categories.catList}
          />
        </section>
      </>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('container')
)