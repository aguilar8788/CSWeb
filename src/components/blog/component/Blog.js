import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as blogActions from '../action/blogActions'

class Blog extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {}
    }

    componentWillMount() {
        this.props.actions.loadBlogPosts()
    }



    render() {
        return (
            <div className="BlogContainer container-fluid">
                <h1>Blog</h1>
            </div>
        )
    }
}

Blog.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(blogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
