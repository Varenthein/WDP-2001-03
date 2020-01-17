import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getProductsToCompare } from '../../../redux/comparisonRedux';
import { addToCompare } from '../../../redux/comparisonRedux';

const mapStateToProps = (state, props) => ({
  comparison: getProductsToCompare(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCompare: () =>
    dispatch(
      addToCompare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
