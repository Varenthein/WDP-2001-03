import { connect } from 'react-redux';
import ComparedProduct from './ComparedProduct';
import { removeFromCompare } from '../../../redux/comparisonRedux';

const mapDispatchToProps = (dispatch, props) => ({
  removeFromCompare: () =>
    dispatch(
      removeFromCompare({
        ...props,
      })
    ),
});

export default connect(null, mapDispatchToProps)(ComparedProduct);
