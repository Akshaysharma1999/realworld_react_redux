import React from 'react'
import { connect } from 'react-redux'
import { getArticle, getComments } from '../actions'


class Article extends React.Component {

  componentDidMount() {
    this.props.getArticle(this.props.match.params.slug)
    this.props.getComments(this.props.match.params.slug)
  }

  renderComment = (comment) => {
    return (
      <div className="card">
        <div className="card-block">
          <p className="card-text">{comment.body}</p>
        </div>
        <div className="card-footer">
          <a href="" className="comment-author">
            <img src="" className="comment-author-img" />
          </a>
          &nbsp;
             <a href="" className="comment-author"></a>
          <span className="date-posted"></span>
          <span className="mod-options">
            <i className="ion-edit"></i>
            <i className="ion-trash-a"></i>
          </span>
        </div>
      </div>
    )
  }

  renderComments = () => {

    return (
      <div className="card">
        <div className="card-block">
          <p className="card-text">comment.body</p>
        </div>
        <div className="card-footer">
          <a href="" className="comment-author">
            <img src="" className="comment-author-img" />
          </a>
          &nbsp;
    <a href="" className="comment-author"></a>
          <span className="date-posted"></span>
          <span className="mod-options">
            <i className="ion-edit"></i>
            <i className="ion-trash-a"></i>
          </span>
        </div>
      </div>
    )

  }

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
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-plus-round"></i>
                  &nbsp;
            Follow {this.props.article.author.username}
                  <span className="counter"></span>
                </button>
                &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart"></i>
                  &nbsp;
            Favorite Post <span className="counter">{this.props.article.favoritesCount}</span>
                </button>
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

                <form className="card comment-form">
                  <div className="card-block">
                    <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                  </div>
                  <div className="card-footer">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    <button className="btn btn-sm btn-primary">
                      Post Comment
              </button>
                  </div>
                </form>
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
  return { article: state.profile.article.article, comments: state.profile.comments }
}

export default connect(mapStateToProps, { getArticle, getComments })(Article)
