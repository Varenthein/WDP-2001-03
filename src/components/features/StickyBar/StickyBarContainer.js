import { connect } from 'react-redux';
import StickyBar from './StickyBar';
import { getProductsToCompare } from '../../../redux/comparisonRedux';

const mapStateToProps = state => ({
  comparison: getProductsToCompare(state),
});

export default connect(mapStateToProps)(StickyBar);
