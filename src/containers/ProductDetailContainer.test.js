import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ProductDetailContainer } from './ProductDetailContainer';
import ProductDetail from '../components/ProductDetail';
import ProductsService from '../shared/ProductsService';


describe('ProductDetailContainer', () => {
  
  it('Should dispactch getProductAction when mount and has search param', () => {
    const mockDispatch = jest.fn();
    const match = { params: { id: '123' } }

    const wrapper = mount(
      <ProductDetailContainer match={match} dispatch={mockDispatch} />
    );

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  
  it('Should not render the ProductDetail when when not has product', () => {
    const mockDispatch = jest.fn();
    const match = { params: { id: '123' } }

    const wrapper = mount(
      <ProductDetailContainer match={match} dispatch={mockDispatch} />
    );

    const result  = wrapper.find(ProductDetail);
    expect(result.length).toEqual(0);
  });
  
  it('Should render the ProductDetail when when not has product', () => {
    const product = ProductsService.formatProduct({ id: '123', price: { amount: 1, decimals: 0 } });
    const mockDispatch = jest.fn();
    const match = { params: { id: '123' } }

    const wrapper = mount(
      <ProductDetailContainer product={product} match={match} dispatch={mockDispatch} />
    );

    const result  = wrapper.find(ProductDetail);
    expect(result.length).toEqual(1);
  });
});