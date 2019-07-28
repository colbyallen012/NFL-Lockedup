import { crimeReducer, teamArrestsReducer, playerReducer } from './dataReducers';

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

describe('teamArrestsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = teamArrestsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with team arrests array', () => {
    const expected = [{player: 'Colby', team: 'DEN', crime:'Bank robbery'}]
    const action = {
      type: 'SHOW_TEAM_ARRESTS',
      team: [{player: 'Colby', team: 'DEN', crime:'Bank robbery'}]
    }
    const result = teamArrestsReducer([], action)

    expect(result).toEqual(expected)
  })
})

describe('playerReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = playerReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with players array', () => {
    const expected = [{player: 'Colby', position: 'WR'}]
    const action = {
      type: 'SHOW_PLAYERS',
      players: [{player: 'Colby', position: 'WR'}]
    }
    const result = playerReducer([], action)

    expect(result).toEqual(expected)
  })
})