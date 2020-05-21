import React from 'react'
import axios from 'axios'
import Style from '../styles/contact-form.module.scss'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  }

  resetForm() {
    this.setState({ name: '', email: '', phone: '', message: '' })
  }

  render() {
    return (
      <div className={Style.inner}>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '6em' }}>
              <p className={Style.italic}>Enter Your Name *</p>
              <input
                type="text"
                className={Style.input}
                value={this.state.name}
                placeholder="Full Name"
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className={Style.formGroup}>
              <p className={Style.italic}>Enter Your Email *</p>
              <input
                type="text"
                className={Style.input}
                aria-describedby="emailHelp"
                value={this.state.email}
                placeholder="Email Address"
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
          </div>
          <p className={Style.italic}>Enter Your Phone</p>
          <div className={Style.formGroup}>
            <input
              type="text"
              className={Style.input}
              aria-describedby="emailHelp"
              value={this.state.phone}
              placeholder="Phone Number"
              onChange={this.onPhoneChange.bind(this)}
            />
          </div>
          <p className={Style.italic}>Enter Your Message *</p>
          <div className={Style.formGroup}>
            <textarea
              className={Style.input}
              rows="7"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
              placeholder="Write your Request"
              style={{ resize: 'none' }}
            />
          </div>
          <div className={Style.miniContainer}>
            <button type="submit" className={Style.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: this.state,
    }).then(response => {
      if (response.data.status === 'success') {
        alert('Message Sent.')
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.')
      }
    })
  }
}

export default ContactForm
