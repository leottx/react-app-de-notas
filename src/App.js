import React from 'react'
import ReactDOM from 'react-dom';
import NoteForm from './components/NotesForm/NotesForm';
import NotesList from './components/NotesList/NotesList';
import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import CategoriesList from './components/CategoriesList/CategoriesList';
import './reset.css';
import './general.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [], // Lista de notas criadas
      categories: []
    }
  }

  // Função para criar uma nova nota
  createNewNote(title, message, category) {
    const notes = [...this.state.notes, {title, message, category}];
    
    this.setState({
      notes
    });
  }

  createNewCategory(category) {
    const categories = [...this.state.categories, category];

    this.setState({
      categories
    });
  }

  removeCategory(index) {
    const {categories} = this.state;
    categories.splice(index, 1);

    this.setState({
      categories
    });
  }

  removeNote(index) {
    const {notes} = this.state;
    notes.splice(index, 1);

    this.setState({
      notes
    });
  }

  render() {
    return (
      <>
        <NoteForm
          createNewNote={this.createNewNote.bind(this)}
          categoriesList={this.state.categories}
        />
        <section>
          <CategoriesForm
            createNewCategory={this.createNewCategory.bind(this)}
          />
          <NotesList
            notesList={this.state.notes}
            removeNote={this.removeNote.bind(this)}
          />
        </section>
        <section className="categories">
          <CategoriesList
            removeCategory={this.removeCategory.bind(this)}
            categoriesList={this.state.categories}
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