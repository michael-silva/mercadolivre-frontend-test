import { connect } from 'react-redux';
import App from '../components/App';
import SEOService from '../shared/SEOService';

const mapStateToProps = state => ({
  title: SEOService.getTitle(state.products.items, state.query.text),
  meta: [
    { name: 'description', content: SEOService.getDescription(state.products.items, state.query.text) },
  ]
});

export default connect(
  mapStateToProps
)(App);
