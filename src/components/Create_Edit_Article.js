import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {newPost} from '../actions'

class create_edit_article extends React.Component {

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
        <input onChange={input.onChange} value={input.value} className="form-control form-control-lg" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.newPost(formValues)
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-10 offset-md-1 col-xs-12">

              <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="error"
              >
                <Field name="title" component={this.renderInput} label="Article Title" />
                <Field name="description" component={this.renderInput} label="What's this article about?" />
                <Field name="body" component={this.renderInput} label="Write your article (in markdown)" />
                <Field name="tagList" component={this.renderInput} label="tag-list" />

                <button className="btn btn-lg btn-primary pull-xs-right">Publish Article</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  if (!formValues.body) {
    errors.body = 'You must enter a body'
  }

  if (!formValues.tagList) {
    errors.tagList = 'You must enter a tagList'
  }

  return errors
}



export default connect(null,{newPost})(reduxForm({
  form: "articleForm",
  validate
})(create_edit_article))
