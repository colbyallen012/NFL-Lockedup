import { combineReducers } from 'redux';
import { crimeReducer, teamReducer } from './dataReducers'

export const rootReducer = combineReducers({
  crimes: crimeReducer,
  teams: teamReducer
})