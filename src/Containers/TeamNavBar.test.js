import React from 'react';
import { shallow } from 'enzyme';
import { TeamNavBar, mapStateToProps, mapDispatchToProps } from './TeamNavBar';
import { showTeamArrests, showCrimes, showPlayers, emptyState } from '../Actions';

describe('TeamNavBar', () => {
  let wrapper;
  let mockEmptyState;
  let mockShowCrimes;
  let mockShowPlayers;
  let mockShowTeamArrests;

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

  const mockTeamArrests = [{
    arrest_stats_id: "903",
    Date: "2018-10-22",
    Team: "DEN",
    Team_name: "Broncos",
    Team_preffered_name: "Denver Broncos",
    Team_city: "Denver",
    Team_logo_id: "10",
    Team_Conference: "AFC",
    Team_Division: "West",
    Team_Conference_Division: "AFC West",
    Team_hex_color: "FC4C02",
    Team_hex_alt_color: "0C2340",
    reddit_group_id: "3",
    Name: "Chad Kelly",
    Position: "QB",
    Position_name: "Quarterback",
    Position_type: "O",
    Encounter: "Arrested",
    Category: "Trespassing",
    Crime_category: "Other",
    Crime_category_color: "BCBD22",
    Description: "The Englewood Colorado Police arrested and charged Kelly with first-degree criminal trespassing after a report of a man allegedly inside a home.",
    Outcome: "Resolution Undetermined.",
    Season: "2018",
    ArrestSeasonState: "InSeason",
    overall_category_id: "15",
    general_category_id: "15",
    legal_level_id: "1",
    resolution_category_id: "1",
    Year: "2018",
    Month: "10",
    Day: "22",
    Day_of_Week: "Monday",
    Day_of_Week_int: "2",
    YearToDate: "0",
    DaysSince: "244",
    DaysToLastArrest: "36",
    DaysToLastCrimeArrest: null,
    DaysToLastTeamArrest: "229"
  }]

  beforeEach(() => {
    mockEmptyState = jest.fn()
    mockShowCrimes = jest.fn()
    mockShowPlayers = jest.fn()
    mockShowTeamArrests = jest.fn()
    
    wrapper = shallow(
      <TeamNavBar
        crimes={mockCrimes}
        players={mockPlayers}
        teamArrests={mockTeamArrests}
      />
    )
  });

  it('should match snapshot',() => {
    expect(wrapper).toMatchSnapshot() 
  });

  describe('mapStateToProps', () => {
    it('should return arrays with the crimes, players, and arrests', () => {
      const mockState = {
        crimes: [{mockCrimes}],
        players: [{mockPlayers}],
        teamArrests: [{mockTeamArrests}]
      }
      const expected ={
        crimes: [{mockCrimes}],
        players: [{mockPlayers}],
        teamArrests: [{mockTeamArrests}]
      }
      const mappedProps = mapStateToProps(mockState)
  
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapdispatchToProps', () => {
    it('calls dispatch with showCrimes action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = showCrimes([{category: 'DUI', arrests: 20}]);
      const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.showCrimes([{category: 'DUI', arrests: 20}])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})