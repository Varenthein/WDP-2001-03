import { connect } from 'react-redux';
import Brands from './Brands';

const mapStateToProps = state => ({
  brands: state.brands,
});

export default connect(mapStateToProps)(Brands);
