import React from 'react';
import './css/categories-list.css';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(index) {
    this._removeCategory(index);
  }

  _removeCategory(index) {
    this.props.removeCategory(index);
  }

  render() {
    const {categoriesList} = this.props;
    return (
      <ul className="cat-list">
        {categoriesList.map((category, index) => {
          return (
            <li key={index}>
              {category}
              <button
                onClick={() => this._handleClick(index)}
              >x</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CategoriesList