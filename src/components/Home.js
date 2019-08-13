import React from 'react'
import { globalFeed, getFeedArticles ,favArticle } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

let cyname = ''
let cgname = 'active'

let favbtn = '-outline'

class Home extends React.Component {

    componentDidMount() {
        this.props.globalFeed()
    }

    favArticle = (slug)=>{
        favbtn=''
        this.props.favArticle(slug)
    }

    renderArticle = (article) => {
        return (
            <div className="article-preview" key={article.slug}>
                <div className="article-meta">
                    <Link to={`/profile/${article.author.username}`}><img src={article.author.image} /></Link>
                    <div className="info">
                        <Link to={`/profile/${article.author.username}`} className="author">{article.author.username}</Link>
                        <span className="date">{article.createdAt}</span>
                    </div>
                    <button onClick={()=>this.favArticle(article.slug)} className={`btn btn${favbtn}-primary btn-sm pull-xs-right`}>
                        <i className="ion-heart"></i> {article.favoritesCount}
                    </button>
                </div>
                <Link to={`/article/${article.slug}`} className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                </Link>
            </div>)
    }

    globalOnClick = () => {
        cyname = ''
        cgname = 'active'
        this.props.globalFeed()
    }

    yourOnClick = () => {
        cgname = ''
        cyname = 'active'
        this.props.getFeedArticles()
    }

    feedToggle = () => {
        return (
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                        <Link className={`nav-link ${cyname}`} to="" onClick={this.yourOnClick} >Your Feed</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${cgname}`} to="" onClick={this.globalOnClick} >Global Feed</Link>
                    </li>
                </ul>
            </div>
        )
    }

    feed = () => {
        return (

            this.props.articles.slice(0, 2).map((article) => {

                return (
                    this.renderArticle(article)
                )

            })

        )
    }

    render() {

        return (
            <div className="home-page" >

                <div className="banner">
                    <div className="container">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>

                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            {this.feedToggle()}
                            {this.feed()}
                        </div>
                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tags</p>

                                <div className="tag-list">
                                    <a href="" className="tag-pill tag-default">programming</a>
                                    <a href="" className="tag-pill tag-default">javascript</a>
                                    <a href="" className="tag-pill tag-default">emberjs</a>
                                    <a href="" className="tag-pill tag-default">angularjs</a>
                                    <a href="" className="tag-pill tag-default">react</a>
                                    <a href="" className="tag-pill tag-default">mean</a>
                                    <a href="" className="tag-pill tag-default">node</a>
                                    <a href="" className="tag-pill tag-default">rails</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { articles: state.profile.articles }
}

export default connect(mapStateToProps, { globalFeed, getFeedArticles , favArticle})(Home)