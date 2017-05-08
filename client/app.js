import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Routes from './routes'

const style = {
  h1: {
    backgroundColor: '#3F51B5',
    color: 'rgba(164, 164, 164, 0.2)',
    padding: '24px',
    marginBottom: '0'
  },
  nav: {
    backgroundColor: 'rgba(3, 2, 1, 1)'
  },
  li: {
    padding: '0'
  },
  span: {
    width: '100%',
    display: 'inline-block',
    padding: '0 20px'
  },
  active: {
    backgroundColor: 'blueviolet'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'HOME'
    }
  }

  /**
   * User action switch `active` tab
   * @param  {[type]} tab [description]
   * @return {[type]}     [description]
   */
  handleClick(tab) {
    return e => {
      if (e.target.tagName === 'A') {
        this.setState({
          activeTab: tab
        })
      }
    }
  }

  render() {
    const {activeTab} = this.state
    return (
      <div>
        <h1 style={style.h1}>Front End Web Code Test</h1>
        <nav style={style.nav} className="mdl-tabs">
          <ul className="mdl-tabs__tab-bar">
            <li style={style.li} className="mdl-tabs__tab">
              <span className="home-link" style={activeTab === 'HOME' ? {...style.span, ...style.active} : style.span} onClick={this.handleClick('HOME').bind(this)}><Link to="/">Home</Link></span>
            </li>
            <li style={style.li} className="mdl-tabs__tab">
              <span className="suggestions-link" style={activeTab === 'SUGGESTIONS' ? {...style.span, ...style.active} : style.span} onClick={this.handleClick('SUGGESTIONS').bind(this)}><Link to="/suggestions">Submit Suggestions</Link></span>
            </li>
          </ul>
        </nav>
        <Routes/>
      </div>
    )
  }
}

export default App
