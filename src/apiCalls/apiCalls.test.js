import React from 'react';
import { getCrimesData, getOneTeamData, getPlayerData, getPositionData } from './apiCalls'

describe('apiCalls', () => {
  describe('getCrimesData', () => {
    let mockCrimes;

    beforeEach(() => {
      mockCrimes = [{
        Category: "DUI",
        arrest_count: "224"
        },
        {
        Category: "Drugs",
        arrest_count: "107"        
      }]

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockCrimes)
        });
      });
    });

    it('should be called with the correct url', async () => {
      const expected = 'http://nflarrest.com/api/v1/crime';
      getCrimesData();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return a parsed response', async () => {
      const result = await getCrimesData();
      expect(result).toEqual(mockCrimes)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'Error fetching people'
        })
      });

      expect(getCrimesData()).rejects.toEqual(Error('Error fetching crimes'));
    })
  });

  describe('getOneTeamData', () => {
    let mockTeam;

    beforeEach(() => {
      mockTeam = [{
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

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockTeam)
        });
      });
    });

    it('should be called with the correct url', async () => {
      const team = 'DEN'
      const expected = `http://nflArrest.com/api/v1/team/arrests/${team}`;
      getOneTeamData(team);
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return a parsed response', async () => {
      const result = await getOneTeamData();
      expect(result).toEqual(mockTeam)
    })

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'Error fetching team'
        })
      });

      expect(getOneTeamData()).rejects.toEqual(Error('Error fetching team'));
    })
  })

  describe('getPlayerData', () => {
    let mockPlayer;

    beforeEach(() => {
      mockPlayer = [{
        Name: "Kenny Britt",
        Team: "TEN",
        Team_name: "Titans",
        Team_city: "Nashville",
        Position: "WR",
        arrest_count: "7"
      }]

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPlayer)
        });
      });
    });

    it('should be called with the correct url', async () => {
      const expected = 'http://nflarrest.com/api/v1/player';
      getPlayerData();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return a parsed response', async () => {
      const result = await getPlayerData();
      expect(result).toEqual(mockPlayer)
    });

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: 'Error fetching players'
        })
      });

      expect(getPlayerData()).rejects.toEqual(Error('Error fetching players'));
    })
  })
})