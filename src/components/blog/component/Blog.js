import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as blogActions from '../action/blogActions'
import * as steem from 'steem'

class Blog extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        this.props.actions.loadBlogPosts()
    }

    getUrlFromString(body) {
        var imageUrl = body.match(/\bhttps?:\/\/\S+/gi)
        console.log("image", imageUrl)

        return imageUrl.map((url) => {
            if (url.indexOf("steemitimages") >= 0) {
                return (
                    <img className="steemImage" src={url} />
                )
            }
        })
    }

    removeUrlsFromString(body) {
        let newBodyStr = []
        let join = ""
        let replace = ""
        let splitBody = body.split(" ")
        splitBody.map((subString, index) => {
            if (!subString.includes("https://steemitimages.com") && index < 90) {
                newBodyStr.push(subString)
            }
        })
        join = newBodyStr.join()
        replace = join.replace(/,/g , " ")
        return replace
    }

    renderPosts(arrayOfPosts) {
        return arrayOfPosts.map((posts, key) => {
            console.log("posts", posts)
            let title = posts.permlink
            let removeDashes = title.replace(/-/g, ' ')
            let removeImgUrls = this.removeUrlsFromString(posts.body)
            return (
                <div key={key} className="BlogContainer container-fluid">
                    <div className="blogPost">
                        <h1>{removeDashes.toUpperCase()}</h1>
                        <p>by: {posts.author}</p>
                        <p>{removeImgUrls}<a href={`https://steemit.com${posts.url}`}> ...Continue reading post</a></p>

                    </div>
                </div>
            )
        })
    }


    render() {
            console.log("state", this.state)
            console.log("props", this.props)
        return (
            <div className="BlogContainer container-fluid">
                {this.props.blogPost ? this.renderPosts(this.props.blogPost) : ''}
                {console.log("props", this.props)}
            </div>
        )
    }
}

Blog.propTypes = {
    actions: PropTypes.object.isRequired,
    blogPost: PropTypes.array
}

function mapStateToProps(state, ownProps) {
    console.log("red", state.blogReducer.post)
    return {
        blogPost: state.blogReducer.post
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(blogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
