import { combineReducers } from 'redux';
import { crimeReducer, teamArrestsReducer, playerReducer } from './dataReducers'

export const rootReducer = combineReducers({
  crimes: crimeReducer,
  teamArrests: teamArrestsReducer,
  players: playerReducer
})