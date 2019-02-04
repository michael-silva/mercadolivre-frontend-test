import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ProductDetailContainer } from './ProductDetailContainer';
import ProductDetail from '../components/ProductDetail';


describe('ProductDetailContainer', () => {

  it('Should format product item to view model', () => {
    const product = { id: '123', description: 'Testes\ntetes\n', condition: 'new', price: { amount: 1234, currency: 'USD', decimals: 0 } };
    const productFormated = { id: '123', description: 'Testes<br />tetes<br />', condition: 'new', condition_label: 'Nuevo', price: { amount: 1234, amount_label: '$ 1,234', currency: 'USD', decimals: 0, decimals_label: '00' } };
    const match = { params: { id: '123' } };
    const mockDispatch = jest.fn();

    const wrapper = shallow(
      <ProductDetailContainer product={product} match={match} dispatch={mockDispatch} />
    );

    const result = wrapper.instance().formatProduct(product);
    expect(result).toEqual(productFormated);
  });

  it('Should do search and do change when mount and has search param', () => {
    const product = { id: '123' };
    const mockDispatch = jest.fn();
    const match = { params: { id: '123' } }

    const wrapper = mount(
      <ProductDetailContainer product={product} match={match} dispatch={mockDispatch} />
    );

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});