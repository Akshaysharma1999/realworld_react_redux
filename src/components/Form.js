import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Form extends React.Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <ul className="error-messages">
          <li>{error}</li>
        </ul>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
  // console.log(meta)
    return (
      <div className="form-group">
        <label>{label}</label>
        <input onChange={input.onChange} value={input.value} className="form-control form-control-lg"  />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="error"
      >
        <Field name="username" component={this.renderInput} label="Enter UserName" />
        <Field name="email" component={this.renderInput} label="Enter Email" />
        <Field name="password" component={this.renderInput} label="Enter password" />

        <button className="btn btn-lg btn-primary pull-xs-right">Sign Up</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.username) {
    errors.username = 'You must enter a name'
  }

  if (!formValues.email) {
    errors.email = 'You must enter a email'
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password'
  }

  return errors
}

export default reduxForm({
  form: 'Form',
  validate
})(Form)