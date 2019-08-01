import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Settings from './Settings'
import Create_Edit_Article from './Create_Edit_Article'
import Article from './Article'
import Form from './test'
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header/>
                    <Switch>
                        <Route path = "/" exact component={Home}/>
                        <Route path = "/login" exact component={Login}/>
                        <Route path = "/signup" exact component={SignUp}/>
                        <Route path = "/profile/:username" exact component={Profile}/>
                        <Route path ="/settings" exact component ={Settings}/>
                        <Route path = "/article" exact component={Article}/>
                        <Route path = "/createArticle" exact component={Create_Edit_Article}/>
                        <Route path = "/form" exact component={Form}/>
                    </Switch>
                <Footer/>
            </Router>
        </div>
           
        

    )
}

export default App