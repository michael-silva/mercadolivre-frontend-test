import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import searchAction from '../actions/searchAction';
import changeQueryAction from '../actions/changeQueryAction';
import SearchBar from "../components/SearchBar";

export class SearchBarContainer extends Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const query = params.get('q') || '';
    if (query.length > 0) {
      const { onSearch, onChange } = this.props;
      onChange(query);
      onSearch(encodeURI(query));
    }
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

