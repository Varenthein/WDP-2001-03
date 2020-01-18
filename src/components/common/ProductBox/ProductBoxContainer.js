import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getProductsToCompare, addToCompare } from '../../../redux/comparisonRedux';

const mapStateToProps = state => ({
  comparison: getProductsToCompare(state),
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
