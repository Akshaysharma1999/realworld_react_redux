import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getCurrentUser,logout,userSettings} from '../actions'

class Header extends React.Component {

  componentDidMount =()=>{
      this.props.getCurrentUser()
  }

  logoutClick = ()=>{
    this.props.logout()
  }

  renderChangeOnSignIn = () => {
    if (this.props.user) {
      return (
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/createarticle" className="nav-link" >
              <i className="ion-compose"></i>&nbsp;New Post
         </Link>
          </li>
         <li className="nav-item">
            <Link to={`/profile/${this.props.user.username}`} className="nav-link" >
            {this.props.user.username}
         </Link>
          </li>
          <li className="nav-item">
          <Link to="/" onClick={this.logoutClick} className="nav-link" >
           Logout
          </Link>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign up</Link>
          </li>
        </ul>
      )
    }
  }

  render() {
    //console.log(this.props)
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">conduit</Link>
          {this.renderChangeOnSignIn()}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { user:state.profile.user}
}

export default connect(mapStateToProps, {getCurrentUser,logout,userSettings})(Header)