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

    renderPosts(arrayOfPosts) {
        return arrayOfPosts.map((posts, key) => {
            console.log(posts, 'osisfa')
            let title = posts.permlink
            let removeDashes = title.replace(/-/g, ' ')

            return (
                <div key={key} className="BlogContainer container-fluid">
                    <div className="blogPost">
                        <h1>{removeDashes}</h1>
                        <p>by: {posts.author}</p>
                        <p>{posts.body}</p>
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
