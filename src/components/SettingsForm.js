import React from 'react'
import { Field, reduxForm } from 'redux-form'


class SettingsForm extends React.Component{  

  renderInput = ({ input, label, meta }) => {
    // console.log(meta)
      return (
        <div className="form-group">
          <label>{label}</label>
          <input onChange={input.onChange} value={input.value} className="form-control form-control-lg"  />         
        </div>
      )
    }

    onSubmit= (formValues)=>{
      // console.log(formValues)
      //this.props.userSettings(formValues)
    this.props.onSubmit(formValues)
      
    }

   render(){ return(
        <div className="settings-page">
  <div className="container page">
    <div className="row">

      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Your Settings</h1>

        <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
         
              <Field name="image" component={this.renderInput} label="Url of Image"></Field>
              <Field name="username" component={this.renderInput} label="Your Name"></Field>              
              <Field name="bio" component={this.renderInput} label="Bio"></Field>       
              <Field name="email" component={this.renderInput} label="Email"></Field>  
              <Field name="password" component={this.renderInput} label="Password"></Field>       
                   
              <button className="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          
        </form>

      </div>

    </div>
  </div>
</div>
    )}
}

export default reduxForm({
  form:'settingsForm'
})(SettingsForm)