import {
    LOAD_BLOG_POST_SUCCESS
} from '../../../actions/actionTypes'
import mockApi from '../../../MockApi/blogApi'

export function loadBlogPostsSuccess(post) {
    return {type: LOAD_BLOG_POST_SUCCESS, post}
}

export function loadBlogPosts() {
    return function(dispatch, getState) {
        console.log("mock", mockApi)
        dispatch(loadBlogPostsSuccess(mockApi))
    }
}