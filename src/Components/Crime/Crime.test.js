import React from 'react';
import { shallow } from 'enzyme';
import Crime from './Crime';

describe('Crime', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Crime category='DUI' arrests={20} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})