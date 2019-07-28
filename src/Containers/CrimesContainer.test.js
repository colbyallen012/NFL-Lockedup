import { shallow } from 'enzyme';
import React from 'react';
import CrimesContainer from './CrimesContainer';

describe('CrimesContainer', () => {
  let wrapper;
  const mockCrimes = [{
    Category: "DUI",
    arrest_count: "224"
    },
    {
    Category: "Drugs",
    arrest_count: "107"
  }]

  const mockPlayers = [{
    Name: "Kenny Britt",
    Team: "TEN",
    Team_name: "Titans",
    Team_city: "Nashville",
    Position: "WR",
    arrest_count: "7"
  }]

  const mockPositions = [{
    Position: "WR",
    arrest_count: "148"
    },
    {
    Position: "LB",
    arrest_count: "127"
  }]

  beforeEach(() => {
    wrapper = shallow(<CrimesContainer crimes={mockCrimes} players={mockPlayers} positions={mockPositions} key={1}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  }); 
})