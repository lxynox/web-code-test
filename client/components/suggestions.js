import React, {Component} from 'react'

const style = {
  validationMsg: {
    display: 'none',
    color: 'red'
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
    const {invalidName, invalidEmail, invalidSuggestion, succeedLabelText} = this.state
    return (
      <div id="content">
        <h2>Suggestions</h2>
        <p className="">{succeedLabelText}</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name*</label><br/>
            <input name="name" type="text"/>
            <span style={{...style.validationMsg, display: invalidName ? 'inline' : 'none'}} className="">Name is required</span>
          </div>
          <div>
            <label>Email</label><br/>
            <input name="email" type="text"/>
            <span style={{...style.validationMsg, display: invalidEmail ? 'inline' : 'none'}} className="">Must be a valid email</span>
          </div>
          <div>
            <label>Suggestion*</label><br/>
            <textarea name="suggestion"/>
            <span style={{...style.validationMsg, display: invalidSuggestion ? 'inline' : 'none'}} className="">Suggestion is required</span>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
