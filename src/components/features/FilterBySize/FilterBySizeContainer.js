import { connect } from 'react-redux';
import FilterBySize from './FilterBySize';

const mapStateToProps = state => ({
  sizes: state.sizes,
});

export default connect(mapStateToProps)(FilterBySize);
