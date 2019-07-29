import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import {signup} from '../actions'

class SignUp extends React.Component {

    onSubmit=(formvalues)=>{
       this.props.signup(formvalues)
    }

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign up</h1>
                            <p className="text-xs-center">
                                <a href="/login">Have an account?</a>
                            </p>
                            <Form onSubmit={this.onSubmit}/>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default connect(null,{signup})(SignUp)