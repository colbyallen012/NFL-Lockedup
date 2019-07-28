import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

describe('Player', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Player
        name='Colby Allen'
        city='Denver'
        team='Turing'
        position='Front End'
        arrests={0}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})