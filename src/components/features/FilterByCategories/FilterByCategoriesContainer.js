import { connect } from 'react-redux';
import FilterByCategories from './FilterByCategories';

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(FilterByCategories);
