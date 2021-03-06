import React from 'react'
import { connect } from 'react-redux'
import { getArticle, getComments, deleteComments, postComment } from '../actions'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'

class Article extends React.Component {

  componentDidMount() {
    this.props.getArticle(this.props.match.params.slug)
    this.props.getComments(this.props.match.params.slug)
  }

  renderDelete = (comment) => {
    if (comment.author.username === this.props.user.username) {
      return (
        <Link to='/'><span class="mod-options">
          <i class="ion-trash-a" onClick={() => this.props.deleteComments(this.props.match.params.slug, comment.id)}></i>
        </span></Link>
      )
    }
  }

  renderComments = () => {

    return this.props.comments.map((comment) => {
      return (
        <div class="card">
          <div class="card-block">
            <p class="card-text">{comment.body}</p>
          </div>
          <div class="card-footer">
            <Link to={`/profile/${comment.author.username}`} class="comment-author">
              <img src={comment.author.image} class="comment-author-img" />
            </Link>
            &nbsp;
        <Link to={`/profile/${comment.author.username}`} class="comment-author">{comment.author.username}</Link>
            <span class="date-posted">{comment.createdAt}</span>
            {this.renderDelete(comment)}
          </div>
        </div>
      )
    })
  }

  onSubmit = (formValues) => {
    this.props.postComment(this.props.match.params.slug, formValues)
  }

  // editArticle = () => {
  //   if (this.props.article.author.username === this.props.user.username) {
  //     return (<button className="btn btn-sm btn-outline-secondary">
  //       <Link to={`/article/edit`}><i className="ion-edit"></i>
  //       &nbsp;
  //   Edit Article</Link>
  //   <span className="counter"></span>
  //     </button>)
  //   }
  //   else {
  //     return <div></div>
  //   }
  // }

  // deleteArticle = () => {
  //   if (this.props.article.author.username === this.props.user.username) {
  //     return (
  //       <button className="btn btn-sm btn-outline-danger">
  //         <i className="ion-trash-a"></i>
  //         &nbsp;
  //     Delete Article
  // </button>
  //     )
  //   }
  //   else
  //   {
  //     return <div></div>
  //   }

  // }

  renderArticle = () => {
    if (this.props.article) {
      return (
        <div className="article-page">

          <div className="banner">
            <div className="container">

              <h1>{this.props.article.title}</h1>

              <div className="article-meta">
                <a href=""><img src={this.props.article.author.image} /></a>
                <div className="info">
                  <a href="" className="author">{this.props.article.author.username}</a>
                  <span className="date">{this.props.article.createdAt}</span>
                </div>

                {/* {this.editArticle()} */}

                &nbsp;&nbsp;

                {/* {this.deleteArticle()} */}
              </div>

            </div>
          </div>

          <div className="container page">

            <div className="row article-content">
              <div className="col-md-12">
                <p>
                  {this.props.article.description}
                </p>
                <h2 id="introducing-ionic">{this.props.article.body}</h2>

              </div>
            </div>

            <hr />

            <div className="row">

              <div className="col-xs-12 col-md-8 offset-md-2">
                <CommentForm user={this.props.user} onSubmit={this.onSubmit} />
                {this.renderComments()}

              </div>

            </div>

          </div>

        </div>

      )
    }
    else {
      return <div>...Loading</div>
    }
  }

  render() {
    //console.log(this.props)
    return (
      this.renderArticle()
    )
  }
}

const mapStateToProps = (state) => {
  return { article: state.profile.article.article, comments: state.profile.comments, user: state.profile.user }
}

export default connect(mapStateToProps, { getArticle, getComments, deleteComments, postComment })(Article)


