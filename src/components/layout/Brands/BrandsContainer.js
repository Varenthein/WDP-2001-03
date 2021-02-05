import { connect } from 'react-redux';
import Brands from './Brands';
import { getViewportMode, changeViewport } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  brands1Desktop: state.brands1Desktop,
  brands2Desktop: state.brands2Desktop,
  brands1Tablet: state.brands1Tablet,
  brands2Tablet: state.brands2Tablet,
  brands3Tablet: state.brands3Tablet,
  brands1Phone: state.brands1Phone,
  brands2Phone: state.brands2Phone,
  brands3Phone: state.brands3Phone,
  brands4Phone: state.brands4Phone,
  viewportMode: getViewportMode(state),
});

const mapDispatchToProps = dispatch => ({
  changeViewportMode: newMode => dispatch(changeViewport(newMode)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Brands);
