import { combineReducers } from 'redux';
import { crimeReducer, teamReducer, playerReducer } from './dataReducers'

export const rootReducer = combineReducers({
  crimes: crimeReducer,
  teams: teamReducer,
  players: playerReducer
})