import { connect } from 'react-redux';

import Subreddit from './component';
//import * as actions from './actions';

const mapStateToProps = state => ({
	// statistics: state.table.statistics,
	// searchParam: state.searchParam.searchParam,
	// currentPage: state.table.currentPage,
})

const mapDispatchToProps = {
  // getStatistics: actions.getStatistics,
}

export default connect(null, null)(Subreddit);
