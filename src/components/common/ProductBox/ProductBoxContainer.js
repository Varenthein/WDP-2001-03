import { connect } from 'react-redux';
import ProductBox from './ProductBox';

import { getAll, setFavorite } from '../../../redux/productsRedux';
import { getProductsToCompare, addToCompare } from '../../../redux/comparisonRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  comparison: getProductsToCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  setFavorite: (id, isFav) => dispatch(setFavorite({ id, isFav })),
  addToCompare: () =>
    dispatch(
      addToCompare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
