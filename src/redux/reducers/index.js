import note from './note';
import noteList from './noteList';
import { combineReducers } from '@reduxjs/toolkit'

const combinedReducers = combineReducers({
  note,
  noteList
});

export default combinedReducers;