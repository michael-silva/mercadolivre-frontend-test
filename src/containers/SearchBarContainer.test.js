import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SearchBarContainer } from './SearchBarContainer';


describe('SearchBarContainer', () => {
  
  it('Should not do search when mount and not has search param', () => {
    const location = { search : '?q=' };
    const history = { location };
    const loading = false;
    const query = '';
    const mockSearch = jest.fn();
    const mockChange = jest.fn();

    const wrapper = shallow(
        <SearchBarContainer query={query} history={history} location={location} loading={loading} onSearch={mockSearch} onChange={mockChange} />
    );
    
    expect(mockSearch).not.toHaveBeenCalled();
    expect(mockChange).not.toHaveBeenCalled();
  });
  
  it('Should do search and do change when mount and has search param', () => {
    const location = { search : '?q=temp' };
    const history = { location };
    const loading = false;
    const query = '';
    const queryParsed = 'temp';
    const mockSearch = jest.fn();
    const mockChange = jest.fn();

    const wrapper = shallow(
        <SearchBarContainer query={query} history={history} location={location} loading={loading} onSearch={mockSearch} onChange={mockChange} />
    );
    
    expect(mockSearch).toBeCalledWith(queryParsed);
    expect(mockChange).toBeCalledWith(queryParsed);
    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledTimes(1);
  });
  
  it('Should do search with parameter of history object when has diferece from location', () => {
    const location = { search: '?q=temp' };
    const history = { location: { search: '?q=test' } };  //most recent route
    const loading = false;
    const query = '';
    const queryParsed = 'test';
    const mockSearch = jest.fn();
    const mockChange = jest.fn();

    const wrapper = shallow(
        <SearchBarContainer query={query} history={history} location={location} loading={loading} onSearch={mockSearch} onChange={mockChange} />
    );
    
    expect(mockSearch).toBeCalledWith(queryParsed);
    expect(mockChange).toBeCalledWith(queryParsed);
    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  it('Should clear the query when navigate to detail', () => {
    const location = { search: '?q=temp' };
    const history = { location: { search: '' } }; //most recent route
    const loading = false;
    const query = '';
    const mockSearch = jest.fn();
    const mockChange = jest.fn();

    const wrapper = shallow(
        <SearchBarContainer query={query} history={history} location={location} loading={loading} onSearch={mockSearch} onChange={mockChange} />
    );
    
    expect(mockChange).toBeCalledWith('');
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockSearch).not.toBeCalled();
  });

  it('Should do an history push with url when do search ', () => {
    const query = 'test';
    const location = { search : '?q=' + query };
    const mockSearch = jest.fn();
    const mockChange = jest.fn();
    const history = { push: jest.fn(), location }
    const e = { preventDefault: jest.fn() };
    const loading = false;

    const wrapper = shallow(
        <SearchBarContainer loading={loading} location={location} history={history} onSearch={mockSearch} onChange={mockChange} query={query} />
    );

    wrapper.instance().searchHandler(e);
    
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockSearch).toHaveBeenCalledTimes(2);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
  });
});