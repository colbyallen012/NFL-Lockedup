import { combineReducers } from 'redux';
import { crimeReducer, teamArrestsReducer, playerReducer, positionReducer } from './dataReducers'

export const rootReducer = combineReducers({
  crimes: crimeReducer,
  teamArrests: teamArrestsReducer,
  players: playerReducer,
  positions: positionReducer
})