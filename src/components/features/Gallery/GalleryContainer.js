import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll } from '../../../redux/productsRedux';
import { getViewportMode } from '../../../redux/viewportRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  viewportMode: getViewportMode(state),
});

export default connect(mapStateToProps)(Gallery);
