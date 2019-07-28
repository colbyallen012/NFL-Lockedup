import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

describe('Team', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Team 
        player='Colby Allen' 
        position='QB'
        arrest='Bank Robbery'
        description='Robbed a bank for 100 million dollars'
        outcome='Still on the lamb'
        season='Off season' 
        key={1}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})