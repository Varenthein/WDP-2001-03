import { connect } from 'react-redux';
import Brands from './Brands';

const mapStateToProps = state => ({
  brands1Desktop: state.brands1Desktop,
  brands2Desktop: state.brands2Desktop,
});

export default connect(mapStateToProps)(Brands);
