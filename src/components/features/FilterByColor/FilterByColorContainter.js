import { connect } from 'react-redux';
import FilterByColor from './FilterByColor';

const mapStateToProps = state => ({
  colors: state.colors,
});

export default connect(mapStateToProps)(FilterByColor);
