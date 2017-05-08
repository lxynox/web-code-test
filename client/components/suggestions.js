import React, {Component} from 'react'

const style = {
  succeedLabel: {
    width: '50%',
    padding: '6px',
    backgroundColor: 'lightgreen',
    borderRadius: '5px 5px 5px 5px'
  }
}

export default class Suggestions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      invalidName: false,
      invalidEmail: false,
      invalidSuggestion: false,
      succeedLabelText: ''
    }
  }

  /**
   * User action to submit the *suggestions* form
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  handleSubmit(e) {
    e.preventDefault()

    const form = document.querySelector('form')
    const formData = new FormData(form)
    const userInput = {}

    for (const [key, value] of formData.entries()) {
      userInput[key] = value
    }

    if (this._validate(userInput)) {
      const submitSuggestion = async () => {
        const response = await fetch('/api/suggestions', {
          method: 'POST',
          body: formData
        })
        const json = await response.json()
        this.setState({
          succeedLabelText: json.message
        })
      }

      submitSuggestion()
    }
  }

  // User input validation (name, email etc)
  _validate(input) {
    const {name, email, suggestion} = input
    let isValid = true

    if (name && name.trim()) {
      this.setState({
        invalidName: false
      })
    } else {
      isValid = false
      this.setState({
        invalidName: true
      })
    }

    if (suggestion && suggestion.trim()) {
      this.setState({
        invalidSuggestion: false
      })
    } else {
      isValid = false
      this.setState({
        invalidSuggestion: true
      })
    }

    if (validateEmail(email)) {
      this.setState({
        invalidEmail: false
      })
    } else {
      isValid = false
      this.setState({
        invalidEmail: true
      })
    }

    return isValid

    function validateEmail(email) {
      const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      return re.test(email)
    }
  }

  render() {
    const {succeedLabelText} = this.state
    return (
      <div id="content">
        <h2>Suggestions</h2>
        {succeedLabelText &&
          <p><span style={style.succeedLabel}>{succeedLabelText}</span></p>}
        <form className="mdl-grid" onSubmit={this.handleSubmit.bind(this)}>
          <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--2-offset-tablet mdl-textfield mdl-js-textfield">
            <label className="mdl-textfield__label" htmlFor="name">Names*</label><br/>
            <input required className="mdl-textfield__input" id="name" name="name" type="text"/>
            <span className="mdl-textfield__error">Name is required</span>
          </div>
          <div className="mdl-cell mdl-cell--2-offset-tablet mdl-textfield mdl-js-textfield">
            <label className="mdl-textfield__label" htmlFor="email">Email</label><br/>
            <input className="mdl-textfield__input" id="email" name="email" pattern="\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}" type="text"/>
            <span className="mdl-textfield__error">Must be a valid email</span>
          </div>
          <div className="mdl-cell mdl-cell--2-offset-desktop mdl-cell--2-offset-tablet mdl-cell--8-col-desktop mdl-textfield mdl-js-textfield">
            <label className="mdl-textfield__label" htmlFor="suggestion">Suggestion*</label><br/>
            <textarea required className="mdl-textfield__input" id="suggestion" name="suggestion"/>
            <span className="mdl-textfield__error">Suggestion is required</span>
          </div>
          <div className="mdl-cell md-cell--2-offset-desktop mdl-textfield">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
