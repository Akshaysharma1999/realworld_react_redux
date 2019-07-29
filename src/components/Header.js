import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component {

  renderChangeOnSignIn = () => {
    if (this.props.isSignedIn) {
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
            <Link to="/settings" className="nav-link" >
              <i className="ion-gear-a"></i>&nbsp;Settings
         </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link" >
            {this.props.username}
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
    console.log(this.props)
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
  return { isSignedIn: state.auth.isSignedIn , username:state.auth.username }
}

export default connect(mapStateToProps, {})(Header)