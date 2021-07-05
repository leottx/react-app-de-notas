import React from 'react';
import './css/form.css';

class NotesForm extends React.Component {
  constructor(props) {
    super(props);

    this.title = '';
    this.message = '';
    this.category = 'No category';

    this._handleTitle = this._handleTitle.bind(this);
    this._handleMessage = this._handleMessage.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCategory = this._handleCategory.bind(this);
  }

  _handleTitle(event) {
    this.title = event.target.value;
  }

  _handleMessage(event) {
    this.message = event.target.value;
  }
  
  _handleCategory(event) {
    this.category = event.target.value;
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.title && this.message ? 
      this._createNewNote(this.title, this.message, this.category):
      alert('Please fill both fields to create a note');
  }

  _createNewNote(title, message, category) {
    this.props.createNewNote(title, message, category);
  }

  render() {
    const {categoriesList} = this.props;

    return (
      <form 
        onSubmit={this._handleSubmit}
      >
        <select
          onChange={this._handleCategory}
        >
          <option>No category</option>
          {categoriesList.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>
        <input 
          type="text"
          onChange={this._handleTitle}
        />
        <textarea 
          rows="10"
          onChange={this._handleMessage}
        />
        <button>Criar nota</button>
      </form>
    )
  }
}

export default NotesForm;