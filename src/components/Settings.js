import React from 'react'
import Form from './SettingsForm'
import { connect } from 'react-redux'
import {userSettings} from '../actions'

class Settings extends React.Component{

  onSubmit = (formValues)=>{
      this.props.userSettings(formValues)
  }

  render(){
    return(
      <Form onSubmit={this.onSubmit}/>
    )
  }
}

export default connect(null,{userSettings})(Settings)