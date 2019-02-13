import QueryString from 'query-string';
import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import searchAction from '../actions/searchAction';
import changeQueryAction from '../actions/changeQueryAction';
import SearchBar from "../components/SearchBar";
import ServerSideComponent from '../shared/ServerSideComponent';

export class SearchBarContainer extends ServerSideComponent {
  componentDidMount() {
    if (window) {
      window.onpopstate = this.handlePopState.bind(this);
    }
    this.fetchInitialData();
  }

  componentWillUnmount() {
    if (window) {
      window.onpopstate = null;
    }
  }

  handlePopState(event) {
    event.preventDefault();
    this.fetchInitialData();  
  }

  fetchInitialData() {
    const { history, location } = this.props;
    const lastSearch = location.search;
    const currentSearch = history.location.search;
    const params = QueryString.parse(currentSearch);
    const query = params.q || '';
    if (query.length > 0 ) {
      const { onChange, onSearch } = this.props;
      onChange(query)
      return onSearch(encodeURI(query));
    }
    else if(lastSearch !== currentSearch) {
      this.props.onChange('');
    }
    
    return Promise.resolve();
  }

  searchHandler(e) {
    e.preventDefault();
    const { history, query, onSearch } = this.props;
    const text = encodeURI(query);
    history.push(`/items?q=${text}`);
    onSearch(text);
  }

  render() {
    const { query, onChange } = this.props;
    return <SearchBar query={query} onChange={(e) => onChange(e.target.value)} onSearch={this.searchHandler.bind(this)}></SearchBar>
  }
}

const mapStateToProps = (state, props) => ({
  query: state.query.text,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSearch: (query) => dispatch(searchAction(query)),
  onChange: (query) => dispatch(changeQueryAction(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBarContainer));

