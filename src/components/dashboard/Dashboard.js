import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './dashboard.css';
import { fetchUserProfile } from '../../actions/dashboardAction';
import UserQuestions from './UserQuestions';
import Modal from '../Modal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserProfile();
  }
  closeModal() {
    const modal = this.refs.modal;
    modal.style.display = 'none';
  }
  displayModal() {
    const modal = this.refs.modal;
    modal.style.display = 'block';
  }

  render() {
    const { user } = this.props.user;
    return (
      <div>
        <div className="dashboard">
          <aside className="search-wrap">
            <div className="search">
              <label>
                <svg xmlns="http://www.w3.org/2000/svg" title="notifications" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                  />
                </svg>
                <input type="text" id="search" />
              </label>
            </div>

            <div className="user-actions">
              <button>
                <svg title="notifications" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z"
                  />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"
                  />
                  <path d="M11 2h2v10h-2z" />
                </svg>
              </button>
            </div>
          </aside>

          <header className="menu-wrap sidebar">
            <figure className="user">
              <div className="user-avatar">
                <img src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ebdb92a644e864e032a2ebccaa25b6&auto=format&fit=crop&w=100&q=80"
                  alt="Amanda King" />
              </div>
              <figcaption id="user_name">
                {user && user[0].fullname}

              </figcaption>
            </figure>

            <nav>
              <section className="dicover">
                <h3>Discover</h3>

                <ul>


                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.353 2.355-6.049-.002-8.416zm-1.412 7.002L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002 1.563 1.571 1.564 4.025.002 5.588z"
                        />
                      </svg>
                      Popular Questions
              </a>
                  </li>

                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12.707 2.293A.996.996 0 0 0 12 2H3a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l9 9a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9zM12 19.586l-8-8V4h7.586l8 8L12 19.586z"
                        />
                        <circle cx="7.507" cy="7.505" r="1.505" />
                      </svg>
                      Recent Questions
              </a>
                  </li>


                </ul>
              </section>


            </nav>
          </header>

          <main className="content-wrap">
            <header className="content-head">
              <h1>Activity Feed</h1>

              <div className="action">
                <button id="postQuestion" onClick={this.displayModal}>
                  Post Questions
          </button>
              </div>
            </header>

            <div className="content">
              <section className="info-boxes">
                <div className="info-box">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-1H5V5h14v14z" />
                      <path d="M10.381 12.309l3.172 1.586a1 1 0 0 0 1.305-.38l3-5-1.715-1.029-2.523 4.206-3.172-1.586a1.002 1.002 0 0 0-1.305.38l-3 5 1.715 1.029 2.523-4.206z"
                      />
                    </svg>
                  </div>

                  <div className="box-content">
                    <span id="questCount" className="big"></span>
                    Questions Count: {user && user[0].questioncount}

                  </div>
                </div>

                <div className="info-box">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z"
                      />
                    </svg>
                  </div>

                  <div className="box-content">
                    <span id="ansCount" className="big"></span>
                    Answers Count: {user && user[0].answercount}
                  </div>
                </div>

              </section>

            </div>
          </main>
        </div>
        <div id="p-page-wrap">

          <UserQuestions />
          <div ref="modal" id="entryModal" className="modal">
            <Modal close={this.closeModal} />
          </div>


        </div>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.profile
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchUserProfile }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
