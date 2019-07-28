import { crimeReducer } from './dataReducers';

describe('crimeReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = crimeReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with crimes array', () => {
    const expected = [{crime: 'DUI', arrests: 20}]
    const action = {
      type: 'SHOW_CRIMES',
      crimes: [{crime: 'DUI', arrests: 20}]
    }
    const result = crimeReducer([], action)

    expect(result).toEqual(expected)
  })
})