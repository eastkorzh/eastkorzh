import { connect } from 'react-redux';

import Subreddit from './component';
import * as actions from './actions';

const mapDispatchToProps = {
	getRandomPosts: actions.getRandomPosts,
}

export default connect(null, mapDispatchToProps)(Subreddit);
