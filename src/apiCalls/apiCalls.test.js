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
  });
})