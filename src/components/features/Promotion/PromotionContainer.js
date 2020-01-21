import { connect } from 'react-redux';

import Promotion from './Promotion';

import { getNewHot } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNewHot(state),
});

export default connect(mapStateToProps)(Promotion);
