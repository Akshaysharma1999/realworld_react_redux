import React from 'react'
import { Field, reduxForm } from 'redux-form'

class CommentForm extends React.Component {

    renderInput = ({ input, label, meta }) => {
        // console.log(meta)
        return (
            <div className="card-block">               
                <textarea  onChange={input.onChange} value={input.value} className="form-control" placeholder={label} rows="3"></textarea>
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
        // console.log(formValues)
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="card comment-form"
            >
                <Field className="card-block" name='body' component={this.renderInput} label='Write Comments..'></Field>
                <div className="card-footer">
                    <img src={this.props.user.image} className="comment-author-img" />
                    <button className="btn btn-sm btn-primary">
                        Post Comment
                  </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'CommentForm' 
})(CommentForm)