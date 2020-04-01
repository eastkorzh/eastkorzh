import { connect } from 'react-redux';

import Post from './component';
import * as actions from './actions';

const mapDispatchToProps = {
  likePost: actions.likePost,
  unlikePost: actions.unlikePost,
  deletePost: actions.deletePost,
}

export default connect(null, mapDispatchToProps)(Post);
