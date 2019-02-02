import React from "react";
import logo from './Assets/Logo_ML.png';
import logo2x from './Assets/Logo_ML@2x.png.png';
import searchIcon from './Assets/ic_Search.png';
import searchIcon2x from './Assets/ic_Search@2x.png.png';

import './SearchBar.scss';

const SearchBar = ({ term, onChange }) => (
  <header className="header-bar">
    <div className="container">
      <div className="row header-content">
        <div className="logo col-sm-offset-1 col-sm-1">
          <img src={logo} srcSet={`${logo2x} 2x`} className="image" alt="Mercado Livre" />
        </div>
        <div className="col-sm-9 search">
          <form className="search-form">
            <input className="input" placeholder="Nunca deixe de procurar" value={term} onChange={(e) => onChange(e.target.value, term)} />
            <button className="button"><img src={searchIcon} srcSet={`${searchIcon2x} 2x`} className="icon" alt="Ícone de busca" /></button>
          </form>
        </div>
      </div>
    </div>
  </header>
);

export default SearchBar;
