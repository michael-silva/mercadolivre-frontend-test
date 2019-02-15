import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';


describe('ErrorBoundary', () => {

  it('Should render the children if not occur any error', () => {

    const Child = ({ title }) => <h1>{title.length}</h1>;

    const wrapper = mount(
      <ErrorBoundary>
        <Child title="test" />
      </ErrorBoundary>
    );

    const children = wrapper.find(Child);

    expect(children.length).toEqual(1);
  });

  it('Should not render the children if ocurred an error', () => {

    const Child = ({ title }) => <h1>{title.length}</h1>;

    const wrapper = mount(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    const children = wrapper.find(Child);

    expect(children.length).toEqual(0);
  });
});
