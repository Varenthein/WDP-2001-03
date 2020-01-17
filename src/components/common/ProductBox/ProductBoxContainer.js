import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setFavorite } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  favorite: state.favorite,
});

const mapDispatchToProps = dispatch => ({
  setFavorite: (id, isFav) => dispatch(setFavorite({ id, isFav })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
