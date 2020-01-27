import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { getViewportMode, changeViewport } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  viewportMode: getViewportMode(state),
});

const mapDispatchToProps = dispatch => ({
  changeViewportMode: newMode => dispatch(changeViewport(newMode)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
