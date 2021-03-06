import {
    LOAD_BLOG_POST_SUCCESS
} from '../../../actions/actionTypes'
import * as steem from 'steem'

export function loadBlogPostsSuccess(post) {
    return {type: LOAD_BLOG_POST_SUCCESS, post}
}

export function loadBlogPosts() {
    let postsArray = []
    steem.api.setOptions({ url: 'https://api.steemit.com'});

    var query = {
        tag: 'thecryptosavages',
        limit: 100
    }
     return (dispatch, getState) => {
         steem.api.getDiscussionsByTrending(query, function (err, result) {
             if (err) {
                 console.log("error: ", err)
             }
             if (result) {
                 for (var i = 0; i < result.length; i++) {
                     if (result[i].author === 'kv151' || result[i].author === "paguilarjr") {
                                 postsArray.push(result[i])
                     }

                 }
             }
             dispatch(loadBlogPostsSuccess(postsArray))
         })
     }
}