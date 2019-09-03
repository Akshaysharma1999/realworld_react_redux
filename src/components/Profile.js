import React from 'react'
import { getProfile, userSettings, getMyArticles, getMyFavArticles, favArticle, unFavArticle ,followUser,unfollowUser} from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Settings from './Settings'

let myA = 'active'
let myFA = ''
let temp = 0
let foll = 0 

class Profile extends React.Component {

  componentDidMount = () => {
    this.props.getProfile(this.props.username)
    this.props.getMyArticles(this.props.username)
  }

  renderfUbtn = () => {
    return (
      <Link className="btn btn-sm btn-outline-secondary action-btn" to="/settings" >
        <i className="ion-gear-a"></i> Follow 
      </Link>

    )
  }

  followBtn=()=>{
    this.props.followUser(this.props.currentProfile.profile.username)
  }

  unfollowBtn=()=>{
    this.props.unfollowUser(this.props.currentProfile.profile.username)
  }

  settingsOrFollow = () => {
    if (this.props.currentProfile === this.props.user) {
      return <Link className="btn btn-sm btn-outline-secondary action-btn" to="/settings" ><i className="ion-gear-a"></i> Edit Profile Settings</Link>
    }
    else {
      if(!this.props.currentProfile.profile.following)
      {
        return <Link onClick={this.followBtn} className="btn btn-sm btn-outline-secondary action-btn" to={`/profile/${this.props.currentProfile.profile.username}`} ><i className="ion-plus-round"></i> Follow  {this.props.currentProfile.profile.username}</Link>
      }
      else
      {
        return <Link onClick={this.unfollowBtn} className="btn btn-sm btn-outline-secondary action-btn" to={`/profile/${this.props.currentProfile.profile.username}`} ><i className="ion-minus-round"></i> UnFollow  {this.props.currentProfile.profile.username}</Link>
      }
    }
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
              {this.settingsOrFollow()}

            </div>
          </div>
        </div>
      )
    }

  }

  myAC = () => {

    myA = 'active'
    myFA = ''
    this.props.getMyArticles(this.props.username)
    temp = 0
  }


  myFAC = () => {

    myFA = 'active'
    myA = ''
    this.props.getMyFavArticles(this.props.username)
    temp = 1
  }


  articlesToggle = () => {
    return (
      <div className="articles-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className={`nav-link ${myA}`} onClick={this.myAC} to="">My Articles</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${myFA}`} onClick={this.myFAC} to="">Favorited Articles</a>
          </li>
        </ul>
      </div>
    )
  }

  favArticle = async (slug) => {
    await this.props.favArticle(slug)
    if (temp == 0) {
      await this.props.getMyArticles(this.props.username)
    }
    else {
      await this.props.getMyFavArticles(this.props.username)
    }
  }

  unFavArticle = async (slug) => {
    await this.props.unFavArticle(slug)
    if (temp == 0) {
      await this.props.getMyArticles(this.props.username)
    }
    else {
      await this.props.getMyFavArticles(this.props.username)
    }
  }

  renderFavBtn = (article) => {
    if (!article.favorited) {
      return (
        <button onClick={() => this.favArticle(article.slug)} className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      )
    }
    else {
      return (
        <button onClick={() => this.unFavArticle(article.slug)} className="btn btn-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      )
    }
  }

  renderArticle = () => {
    return this.props.articles.slice(0, 2).map((article) => {
      return (
        <div className="article-preview">
          <div className="article-meta">
            <a to=""><img src={article.author.image} /></a>
            <div className="info">
              <a href="" className="author">{article.author.username}</a>
              <span className="date">{article.createdAt}</span>
            </div>
            {this.renderFavBtn(article)}
          </div>
          <Link to={`/article/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <span>Read more...</span>
          </Link>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props.currentProfile)
    return (

      <div className="profile-page">
        {this.renderProfile()}


        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">
              {this.articlesToggle()}
              {this.renderArticle()}
            </div>

          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { currentProfile: state.profile.currentProfile, username: ownProps.match.params.username, articles: state.profile.articles, user: state.profile.user }
}

export default connect(mapStateToProps, { getProfile, getMyArticles, getMyFavArticles, favArticle, unFavArticle,followUser,unfollowUser})(Profile)