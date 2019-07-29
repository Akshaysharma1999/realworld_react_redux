import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'

class test extends React.Component{
    
    onSubmit=(formvalues)=>{
        console.log(formvalues)
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect()(test)