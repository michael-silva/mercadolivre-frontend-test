import React, { memo } from "react";
import PropTypes from "prop-types";
import logo from '../assets/Logo_ML.png';
import logo2x from '../assets/Logo_ML@2x.png.png';
import searchIcon from '../assets/ic_Search.png';
import searchIcon2x from '../assets/ic_Search@2x.png.png';

import '../styles/SearchBar.scss';

const SearchBar = ({ query, onSearch, onChange }) => (
  <header className="header-bar">
    <div className="container">
      <div className="row header-content">
        <div className="logo col-sm-offset-1 col-sm-1">
          <img src={logo} srcSet={`${logo2x} 2x`} className="image" alt="Mercado Livre" />
        </div>
        <div className="col-xs-10 col-sm-9 search">
          <form className="search-form" onSubmit={onSearch}>
            <input className="input" placeholder="Nunca deixe de procurar" value={query} onChange={onChange} />
            <button type="submit" className="button"><img src={searchIcon} srcSet={`${searchIcon2x} 2x`} className="icon" alt="Ícone de busca" /></button>
          </form>
        </div>
      </div>
    </div>
  </header>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(SearchBar);
