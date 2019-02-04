import React from 'react'; 
import { shallow, mount, render } from 'enzyme';
import BreadcrumbContainer from './BreadcrumbContainer';

describe('BreadcrumbContainer', () => {
  const category='temp';
  const path = ['temp'];

  it('Should get currrency for USA', () => {
    const wrapper = shallow(
      <BreadcrumbContainer  category={category} path={path} />
    );
    wrapper.instance().forceUpdate();
    wrapper.update();
    const baseThings = wrapper.find('.li');
    expect(baseThings).toHaveLength(2);
  });
});