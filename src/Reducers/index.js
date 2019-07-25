import { combineReducers } from 'redux';
import { crimeReducer } from './dataReducers'

export const rootReducer = combineReducers({
  crimes: crimeReducer
})