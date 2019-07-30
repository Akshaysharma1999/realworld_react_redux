import React from 'react'
import { getProfile } from '../actions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.username)
  }

  renderProfile = () => {
    if (this.props.currentProfile == null) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="user-info">
          <div className="container">
            <div className="row">

              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={this.props.currentProfile.profile.image} className="user-img" />
                <h4>{this.props.currentProfile.profile.username}</h4>
                <p>
                  {this.props.currentProfile.profile.bio}
                </p>
                {/* <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp;
                Follow Eric Simons 
              </button> */}
              </div>

            </div>
          </div>
        </div>
      )
    }

  }

  render() {
    // console.log(this.props.currentProfile)
    return (

      <div className="profile-page">
        {this.renderProfile()}


        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link className="nav-link active" to="">My Articles</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">Favorited Articles</Link>
                  </li>
                </ul>
              </div>

              {/* <div className="article-preview">
          <div className="article-meta">
            <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href="" className="author">Eric Simons</a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> 29
            </button>
          </div>
          <a href="" className="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div> */}

              {/* <div className="article-preview">
          <div className="article-meta">
            <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div className="info">
              <a href="" className="author">Albert Pai</a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> 32
            </button>
          </div>
          <a href="" className="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
            <ul className="tag-list">
              <li className="tag-default tag-pill tag-outline">Music</li>
              <li className="tag-default tag-pill tag-outline">Song</li>
            </ul>
          </a>
        </div> */}


            </div>

          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {

  return { currentProfile: state.profile.currentProfile,username:ownProps.match.params.username }
}

export default connect(mapStateToProps, { getProfile })(Profile)