import { connect } from 'react-redux';

import PostsList from './component';

const mapStateToProps = state => ({
  posts: state.subreddit.posts,
  isFetching: state.subreddit.isFetching,
})

export default connect(mapStateToProps, null)(PostsList);
