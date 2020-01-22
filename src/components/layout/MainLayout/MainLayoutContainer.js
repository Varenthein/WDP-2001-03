import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { getViewportMode } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  viewportMode: getViewportMode(state),
});

export default connect(mapStateToProps)(MainLayout);
