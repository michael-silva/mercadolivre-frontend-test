import { connect } from "react-redux";
import App from "../components/App";
import SEOService from '../shared/SEOService';

const mapStateToProps = state => ({
  title: SEOService.getTitle(state.products.items, state.query.text),
  description: SEOService.getDescription(state.products.items, state.query.text),
  keywords: ''
});

export default connect(
  mapStateToProps
)(App);
