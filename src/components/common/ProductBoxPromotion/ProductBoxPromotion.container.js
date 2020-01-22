import { connect } from 'react-redux';

import ProductBoxPromotion from './ProductBoxPromotion';

import { getNewHot } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNewHot(state),
});

export default connect(mapStateToProps)(ProductBoxPromotion);
