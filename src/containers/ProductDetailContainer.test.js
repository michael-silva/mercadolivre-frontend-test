import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ProductDetailContainer } from './ProductDetailContainer';
import ProductsService from '../shared/ProductsService';


describe('ProductDetailContainer', () => {
  
  it('Should do search and do change when mount and has search param', () => {
    const product = ProductsService.formatProduct({ id: '123', price: { amount: 1, decimals: 0 } });
    const mockDispatch = jest.fn();
    const match = { params: { id: '123' } }

    const wrapper = mount(
      <ProductDetailContainer product={product} match={match} dispatch={mockDispatch} />
    );

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});