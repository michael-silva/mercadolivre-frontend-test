import React from 'react';
import { shallow, mount } from 'enzyme';
import { BreadcrumbContainer } from './BreadcrumbContainer';

describe('BreadcrumbContainer', () => {

  it('Should call action when mount component', () => {
    const category = 'temp';
    const path = [];
    const loading = false;
    const dispatchMock = jest.fn();

    const wrapper = shallow(
      <BreadcrumbContainer loading={loading} category={category} path={path} dispatch={dispatchMock} />
    );

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().props.category).toEqual(category);
  });

  it('Should call action if category change', () => {
    const category = 'temp';
    const newCategory = 'temp 2';
    const path = [];
    const loading = false;
    const dispatchMock = jest.fn();

    const wrapper = shallow(
      <BreadcrumbContainer loading={loading} category={category} path={path} dispatch={dispatchMock} />
    );

    wrapper.setProps({ category: newCategory });

    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(wrapper.instance().props.category).toEqual(newCategory);
  });

  it('Should not call action if category not change', () => {
    const category = 'temp';
    const path = [];
    const loading = false;
    const dispatchMock = jest.fn();

    const wrapper = shallow(
      <BreadcrumbContainer loading={loading} category={category} path={path} dispatch={dispatchMock} />
    );

    wrapper.setProps({ category });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().props.category).toEqual(category);
  });

  it('Should render one item list <li> for each path step if not loading', () => {
    const category = 'temp';
    const loading = false;
    const path = ['temp', 'temp 2'];
    const dispatchMock = jest.fn();
    const wrapper = mount(
      <BreadcrumbContainer loading={loading} category={category} path={path} dispatch={dispatchMock} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();

    const items = wrapper.find('li');
    expect(items.length).toEqual(path.length);
  });

  it('Should render any one item list <li> if loading', () => {
    const category = 'temp';
    const loading = true;
    const path = ['temp', 'temp 2'];
    const dispatchMock = jest.fn();
    const wrapper = mount(
      <BreadcrumbContainer loading={loading} category={category} path={path} dispatch={dispatchMock} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();

    const items = wrapper.find('li');
    expect(items.length).toEqual(0);
  });
});
