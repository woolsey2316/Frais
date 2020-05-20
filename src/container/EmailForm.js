import React from "react"
import Style from "../styles/email-form.module.scss"

class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
    }
  }

  resetForm() {
    this.setState({ name: "", email: ""})
  }

  render() {
    return (
      <div className={Style.formContainer}>
        <p className={Style.p} >Enter Email *</p>
        <form
          id="contact-form"
          onSubmit={this.resetForm.bind(this)}
          method="POST"
        >
          <div className={Style.inputWrapper}>
            <input
              type="email"
              className={Style.input}
              aria-describedby="emailHelp"
              value={this.state.email}
              placeholder="Email"
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className={Style.miniContainer}>
            <button type="submit" className={Style.button}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    )
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

}

export default EmailForm
