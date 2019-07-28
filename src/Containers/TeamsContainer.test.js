import { shallow } from 'enzyme';
import React from 'react';
import TeamsContainer from './TeamsContainer';

describe('TeamsContainer', () => {
  let wrapper;
  const mockTeam = [{
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
    wrapper = shallow(<TeamsContainer arrests={mockTeam} key={1} />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  }); 
})