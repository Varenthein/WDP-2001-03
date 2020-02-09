import { connect } from 'react-redux';
import FilterByTag from './FilterByTag';

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(FilterByTag);
