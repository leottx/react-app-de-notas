import React from 'react';
import deleteSVG from '../../images/icon-trash.svg';

class CardNote extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }
  
  _handleClick(index) {
    this._removeNote(index);
  }

  _removeNote(index) {
    this.props.removeNote(index);
  }

  render() {
    let {noteTitle, noteMessage, noteCategory, noteIndex} = this.props;
    return (
      <>
        <header>
          <div className='wrapper'>
            <h2 className='card-title'>{noteTitle}</h2>
            <button
              onClick={() => this._handleClick(noteIndex)}
            >
              <img src={deleteSVG} alt='' width='20px' height='20px'/>
            </button>
          </div>
          <span>{noteCategory}</span>
        </header>
        <p className='card-message'>{noteMessage}</p>
      </>
    );
  }
}

export default CardNote;