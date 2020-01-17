import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setFavorite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  setFavorite: isFav => dispatch(setFavorite(isFav)),
});

export default connect(mapDispatchToProps)(ProductBox);
