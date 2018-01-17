import {
   LOAD_BLOG_POST_SUCCESS
} from '../../../actions/actionTypes'

export default function blogReducer(state = {}, action) {
    switch(action.type) {
        case LOAD_BLOG_POST_SUCCESS:
            return Object.assign({}, state, {post: action.post})
        default:
            return state
    }
}