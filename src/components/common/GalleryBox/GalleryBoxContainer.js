import { connect } from 'react-redux';

import GalleryBox from './GalleryBox';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(GalleryBox);
