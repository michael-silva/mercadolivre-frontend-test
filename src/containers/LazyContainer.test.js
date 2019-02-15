import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LazyContainer from './LazyContainer';
import Error from '../components/Error';
import Loading from '../components/Loading';

describe('LazyContainer', () => {

  it('Should render the children if not has error or loading', () => {
    const Child = () => <h1>teste</h1>;
    const loading = false;
    const error = false;

    const wrapper = mount(
      <LazyContainer loading={loading} error={error}>
        <Child />
      </LazyContainer>
    );

    const children = wrapper.find(Child);
    expect(children.length).toEqual(1);
  });

  it('Should not render the children if has error', () => {
    const Child = () => <h1>teste</h1>;
    const loading = false;
    const error = true;

    const wrapper = mount(
      <LazyContainer loading={loading} error={error}>
        <Child />
      </LazyContainer>
    );

    const children = wrapper.find(Child);
    expect(children.length).toEqual(0);
    const errorChild = wrapper.find(Error);
    expect(errorChild.length).toEqual(1);
  });

  it('Should not render the children if is loading', () => {
    const Child = () => <h1>teste</h1>;
    const loading = true;
    const error = false;

    const wrapper = mount(
      <LazyContainer loading={loading} error={error}>
        <Child />
      </LazyContainer>
    );

    const children = wrapper.find(Child);
    expect(children.length).toEqual(0);
    const loadingChild = wrapper.find(Loading);
    expect(loadingChild.length).toEqual(1);
  });
});
