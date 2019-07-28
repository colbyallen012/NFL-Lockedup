import * as actions from './index'

describe ('actions', () => {
  it('should have a type of SHOW_CRIMES', () => {
    const crimes = [{
        Category: "DUI",
        arrest_count: "224"
        },
        {
        Category: "Drugs",
        arrest_count: "107"
    }]
    const expectedAction = {
      type: 'SHOW_CRIMES',
      crimes
    }
    const result = actions.showCrimes(crimes);

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SHOW_TEAM_ARRESTS', () => {
    const team = [{
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

    const expectedAction = {
      type: 'SHOW_TEAM_ARRESTS',
      team
    }
    const result = actions.showTeamArrests(team);

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SHOW_PLAYERS', () => {
    const players = [{
        Name: "Kenny Britt",
        Team: "TEN",
        Team_name: "Titans",
        Team_city: "Nashville",
        Position: "WR",
        arrest_count: "7"
    }]

    const expectedAction = {
      type: 'SHOW_PLAYERS',
      players
    }

    const result = actions.showPlayers(players);

    expect(result).toEqual(expectedAction)
  })

  it('should have a type SHOW_POSITIONS', () => {
    const positions = [{
        Position: "WR",
        arrest_count: "148"
        },
        {
        Position: "LB",
        arrest_count: "127"
    }]

    const expectedAction = {
      type: 'SHOW_POSITIONS',
      positions
    }

    const result = actions.showPositions(positions)

    expect(result).toEqual(expectedAction)
  })
})