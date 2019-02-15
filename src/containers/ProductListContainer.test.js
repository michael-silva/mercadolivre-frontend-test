import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProductListContainer } from './ProductListContainer';
import ProductList from '../components/ProductList';
import ProductListEmpty from '../components/ProductListEmpty';

describe('ProductListContainer', () => {

  it('Should navigate to product item', () => {
    const dispatchMock = jest.fn();
    const history = { push: jest.fn() }
    const products = [];

    const wrapper = shallow(
      <ProductListContainer history={history} dispatch={dispatchMock} products={products} />
    );

    wrapper.instance().navigate({ id: '123' });
    
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it('Should render product list if products has items', () => {
    const products = [
      { id: '123', title: 'product 1', picture: '', state: 'new', free_shipping: true, price: { amount_label: '1', decimals_label: '0' }}, 
      { id: '223', title: 'product 2', picture: '', state: 'used', free_shipping: true, price: { amount_label: '1', decimals_label: '0' } }];
    const wrapper = mount(
      <ProductListContainer products={[]} />
    );

    wrapper.setProps({ products });
    wrapper.instance().forceUpdate();
    wrapper.update();

    const component1 = wrapper.find(ProductList);
    expect(component1.length).toEqual(1);
    const component2 = wrapper.find(ProductListEmpty);
    expect(component2.length).toEqual(0);
  });

  it('Should not render product list if products is empty', () => {
    const products = [];
    const wrapper = mount(
      <ProductListContainer products={products} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();

    const component1 = wrapper.find(ProductList);
    expect(component1.length).toEqual(0);
    const component2 = wrapper.find(ProductListEmpty);
    expect(component2.length).toEqual(1);
  });
});