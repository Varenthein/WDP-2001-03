import { connect } from 'react-redux';
import Swipe from './Swipe';

import { getViewportMode } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  viewportMode: getViewportMode(state),
});

export default connect(mapStateToProps)(Swipe);
