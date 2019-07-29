import React from 'react'
import Form from './LoginForm'
import { connect } from 'react-redux'
import {login} from '../actions'

class Login extends React.Component {

    onSubmit=(formvalues)=>{
       this.props.login(formvalues)
    }

    render() {
        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Login</h1>
                            <p className="text-xs-center">
                                
                            </p>
                            <Form onSubmit={this.onSubmit}/>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default connect(null,{login})(Login)