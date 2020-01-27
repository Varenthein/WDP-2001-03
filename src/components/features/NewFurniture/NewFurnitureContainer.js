import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getViewportMode } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewportMode: getViewportMode(state),
});

// eslint-disable-next-line no-console
console.log(getNew);

export default connect(mapStateToProps)(NewFurniture);
