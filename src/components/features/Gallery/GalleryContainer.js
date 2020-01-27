import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
