import React from 'react'
import { globalFeed, getFeedArticles, favArticle, unFavArticle, getTags, getByTag } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { async } from 'q';

let cyname = ''
let cgname = 'active'
let yf = 0
let tagToggle = 0
let tagname = ''

class Home extends React.Component {

    componentDidMount() {
        this.props.globalFeed()
        this.props.getTags()
    }

    favArticle = async (slug) => {
        await this.props.favArticle(slug)
        if (yf === 0) {
            await this.props.globalFeed()
        }
        else {
            await this.props.getFeedArticles()
        }

    }

    unFavArticle = async (slug) => {
        await this.props.unFavArticle(slug)
        if (yf === 0) {
            await this.props.globalFeed()
        }
        else {
            await this.props.getFeedArticles()
        }
    }


    renderFavBtn = (article) => {

        if (!article.favorited) {
            return (
                <button onClick={() => this.favArticle(article.slug)} className={`btn btn-outline-primary btn-sm pull-xs-right`}>
                    <i className="ion-heart"></i> {article.favoritesCount}
                </button>
            )
        }
        else {
            return (
                <button onClick={() => this.unFavArticle(article.slug)} className={`btn btn-primary btn-sm pull-xs-right`}>
                    <i className="ion-heart"></i> {article.favoritesCount}
                </button>
            )
        }

    }

    renderArticle = (article) => {
        return (
            <div className="article-preview" key={article.slug}>
                <div className="article-meta">
                    <Link to={`/profile/${article.author.username}`}><img alt="img" src={article.author.image} /></Link>
                    <div className="info">
                        <Link to={`/profile/${article.author.username}`} className="author">{article.author.username}</Link>
                        <span className="date">{article.createdAt}</span>
                    </div>
                    {this.renderFavBtn(article)}
                </div>
                <Link to={`/article/${article.slug}`} className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>Read more...</span>
                </Link>
            </div>)
    }

    globalOnClick = () => {
        this.props.globalFeed()
        tagToggle = 0
        cyname = ''
        cgname = 'active'
        yf = 0
    }

    yourOnClick = () => {
        this.props.getFeedArticles()
        tagToggle = 0
        cgname = ''
        cyname = 'active'
        yf = 1
    }

    renderTagToggle = () => {         
        if(tagToggle === 1)
        {
            cgname=''
            cyname=''            
            return (
                <li className="nav-item">
                    <Link className={`nav-link active`} to="" >{`# ${tagname}`}</Link>
                </li>
            )
        }          
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
                    {this.renderTagToggle()}
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

    renderTagList = (tags) => {

        return (
            tags.slice(0, 20).map((tag) => {
                return <Link to="" onClick={() => this.tagOnClick(tag)} className="tag-pill tag-default">{tag}</Link>
            })
        )
    }

    tagOnClick = (tag) => {
        this.props.getByTag(tag)
        tagToggle = 1
        tagname = tag
    }

    render() {
        // console.log(this.props.tags)

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
                                {this.renderTagList(this.props.tags)}

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { articles: state.profile.articles, tags: state.profile.tags }
}

export default connect(mapStateToProps, { globalFeed, getFeedArticles, favArticle, getTags, unFavArticle, getByTag })(Home)