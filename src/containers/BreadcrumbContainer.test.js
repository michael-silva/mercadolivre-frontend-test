import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { BreadcrumbContainer } from './BreadcrumbContainer';
import Breadcrumb from '../components/Breadcrumb';


describe('BreadcrumbContainer', () => {
  
  it('Should call action if category change', () => {
    const category='temp';
    const newCategory = 'temp 2';
    const path = [];
    const dispatchMock = jest.fn();

    const wrapper = mount(
        <BreadcrumbContainer  category={category} path={path} dispatch={dispatchMock} />
    );

    wrapper.setProps({ category: newCategory });
    
    expect(dispatchMock).toHaveBeenCalled();
    expect(wrapper.instance().props.category).toEqual(newCategory);
  });
  
  it('Should not call action if category not change', () => {
    const category='temp';
    const path = [];
    const dispatchMock = jest.fn();

    const wrapper = mount(
        <BreadcrumbContainer  category={category} path={path} dispatch={dispatchMock} />
    );

    wrapper.setProps({ category });
    
    expect(dispatchMock).not.toHaveBeenCalled();
    expect(wrapper.instance().props.category).toEqual(category);
  });

  it('Should render breadcrumb if path is not empty', () => {
    const category='temp';
    const path = ['temp', 'temp 2'];
    const wrapper = mount(
      <BreadcrumbContainer  category={category} path={path} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();
    
    const breadcrumbs = wrapper.find(Breadcrumb);
    expect(breadcrumbs.length).toEqual(1);
  });

  it('Should not render breadcrumb if path is empty', () => {
    const category='temp';
    const path = [];
    const wrapper = mount(
      <BreadcrumbContainer  category={category} path={path} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();
    
    const breadcrumbs = wrapper.find(Breadcrumb);
    expect(breadcrumbs.length).toEqual(0);
  });
});