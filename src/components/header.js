import React, { Component } from 'react'
import Modal from '../components/Modal';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    const modal = this.refs.modal;
    modal.style.display = 'none';
  }
  displayModal(e) {
    e.preventDefault();
    const modal = this.refs.modal;
    modal.style.display = 'block';
  }
  render() {
    return (
      <div>
      <div className="header">
        <div className="imgBanner">
          <h3 className="search-title">Have a Question?</h3>
          <p className="search-tag-line">Don't waste time just ask right away!</p>
          <form method="get" className="search-form clearfix" id="search-form">
            <button data-testid="open" id="postQuestion" onClick={this.displayModal}>
              Post Questions
          </button>    
          </form>
        </div>
      </div>
       <div ref="modal" id="entryModal" className="modal">
       <Modal close={this.closeModal} />
     </div>
     </div>
    )
  }
}
export default header;