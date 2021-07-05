import React from 'react'
import './css/categories-form.css'

class CategoriesForm extends React.Component {
  constructor(props) {
    super(props);

    this.newCategory = '';

    this._handleNewCategory = this._handleNewCategory.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNewCategory(event) {
    this.newCategory = event.target.value;
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._createNewCategory(this.newCategory);
  }

  _createNewCategory(newCategory) {
    this.props.createNewCategory(newCategory);
  }

  render() {
    return (
      <form
        onSubmit={this._handleSubmit}
        className='cat-form'
      >
        <div className='search-wrapper'>
          <input type="text" placeholder='Search by category id'/>
          <button>Search</button>
        </div>
        <div className='create-categorie-wrapper'>
          <input placeholder='Create a new category id'
            onChange={this._handleNewCategory}
          />
          <button>Create</button>
        </div>
      </form>
    )
  }
}

export default CategoriesForm;