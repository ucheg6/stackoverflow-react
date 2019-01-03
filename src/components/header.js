import React, { Component } from 'react'

class header extends Component {
  render() {
    return (
        <div className="header">
        <div className="imgBanner">
          <h3 className="search-title">Have a Question?</h3>
          <p className="search-tag-line">If you have any question signup to ask or search for what you are looking for!</p>
          <form method="get" className="search-form clearfix" id="search-form">
            {/* <input type="text" id="myInput" placeholder="Type your search terms here" className="search-term "></input> */}
            <input type="submit" value="Search" className="search-btn"></input>
            <ul id="myUL">
               
            </ul>
          </form>
        </div>
        </div>
    )
  }
}
export default header;