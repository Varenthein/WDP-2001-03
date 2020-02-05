import { connect } from 'react-redux';
import ProductBox from './ProductBox';

import { getAll, setFavorite, setStars } from '../../../redux/productsRedux';
import { getProductsToCompare, addToCompare } from '../../../redux/comparisonRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  comparison: getProductsToCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  setFavorite: (id, isFav) => dispatch(setFavorite({ id, isFav })),
  setStars: (id, isUlub) => dispatch(setStars({ id, isUlub })),
  addToCompare: () =>
    dispatch(
      addToCompare({
        id: props.id,
        ...props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
