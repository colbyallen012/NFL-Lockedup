import React from 'react';
import { shallow } from 'enzyme';
import Position from './Position';

describe('Crime', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Position position='WR' arrests={200} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})