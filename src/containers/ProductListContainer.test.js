import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ProductListContainer } from './ProductListContainer';
import ProductList from '../components/ProductList';


describe('ProductListContainer', () => {

  it('Should format product item to view model', () => {
    const product = { id: '123', price: { amount: 1234, currency: 'USD', decimals: 0 } };
    const productFormated = { id: '123', price: { amount: 1234, amount_label: '$ 1234', currency: 'USD', decimals: 0, decimals_label: '00' } };

    const wrapper = shallow(
      <ProductListContainer products={[]}  />
    );

    const result = wrapper.instance().formatProduct(product);
    expect(result).toEqual(productFormated);
  });

  it('Should navigate to product item', () => {
    const dispatchMock = jest.fn();
    const history = { push: jest.fn() }
    const products = [];

    const wrapper = mount(
      <ProductListContainer history={history} dispatch={dispatchMock} products={products} />
    );

    wrapper.instance().navigate({ id: '123' });
    
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it('Should render product list if path is not empty', () => {
    const products = [{ id: '123', price: { }}, { id: '223', price: { } }];
    const wrapper = mount(
      <ProductListContainer products={products} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();

    const component = wrapper.find(ProductList);
    expect(component.length).toEqual(1);
  });

  it('Should not render product list if products is empty', () => {
    const products = [];
    const wrapper = mount(
      <ProductListContainer products={products} />
    );

    wrapper.instance().forceUpdate();
    wrapper.update();

    const component = wrapper.find(ProductList);
    expect(component.length).toEqual(0);
  });
});