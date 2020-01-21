import { connect } from 'react-redux';

import Promotion from './Promotion';

import { getNew } from '../../../redux/promotionRedux.js';

const mapStateToProps = state => ({
  hotproducts: getNew(state),
});
// eslint-disable-next-line no-console
console.log(getNew);
export default connect(mapStateToProps)(Promotion);
