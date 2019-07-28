import { crimeReducer } from './dataReducers';

describe('crimeReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = crimeReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})