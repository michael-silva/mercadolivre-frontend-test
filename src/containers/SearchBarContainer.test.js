import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { SearchBarContainer } from './SearchBarContainer';


describe('SearchBarContainer', () => {
  
  it('Should do search and do change when mount and has search param', () => {
    const location = { search : '?q=temp' };
    const mockSearch = jest.fn();
    const mockChange = jest.fn();

    const wrapper = mount(
        <SearchBarContainer location={location} onSearch={mockSearch} onChange={mockChange} />
    );
    
    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledTimes(1);
  });
  
  it('Should not do search when mount and not has search param', () => {
    const location = { search : '?q=' };
    const mockSearch = jest.fn();
    const mockChange = jest.fn();

    const wrapper = mount(
        <SearchBarContainer location={location} onSearch={mockSearch} onChange={mockChange} />
    );
    
    expect(mockSearch).not.toHaveBeenCalled();
    expect(mockChange).not.toHaveBeenCalled();
  });

  it('Should do change url when do search ', () => {
    const query = 'test';
    const location = { search : '?q=' + query };
    const mockSearch = jest.fn();
    const mockChange = jest.fn();
    const history = { push: jest.fn() }
    const e = { preventDefault: jest.fn() };

    const wrapper = shallow(
        <SearchBarContainer location={location} history={history} onSearch={mockSearch} onChange={mockChange} query={query} />
    );

    wrapper.instance().searchHandler(e);
    
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockSearch).toHaveBeenCalledTimes(2);
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
  });
});