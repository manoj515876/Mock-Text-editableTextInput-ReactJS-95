import {Component} from 'react'

import './index.css'

class TextInput extends Component {
  state = {
    text: '',
    isInput: true,
  }

  onSaveButton = () => {
    this.setState({isInput: false})
  }

  onText = event => {
    this.setState({text: event.target.value})
  }

  onEditButton = () => {
    this.setState({isInput: true})
  }

  render() {
    const {text, isInput} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>

          {isInput ? (
            <div className="text-card">
              <input
                type="text"
                className="input-text"
                onChange={this.onText}
                value={text}
              />
              <button
                type="button"
                className="button"
                onClick={this.onSaveButton}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-card">
              <p className="para">{text}</p>
              <button
                type="button"
                className="button"
                onClick={this.onEditButton}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TextInput
