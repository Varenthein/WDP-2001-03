import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getAll, setFavorite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  setFavorite: (id, isFav) => dispatch(setFavorite({ id, isFav })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
