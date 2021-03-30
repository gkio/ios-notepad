import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const baseName = 'NOTE';

export const NOTE = {
  ADD: `${baseName}/ADD`,
  DELETE: `${baseName}/DELETE`,
  UPDATE: `${baseName}/UPDATE`,
  SET_CONTENT: `${baseName}/SET_CONTENT`,
  SET_ACTIVE: `${baseName}/SET_ACTIVE`,
}

export const addNote = createAction(NOTE.ADD, ({ title }) => ({ payload: { title, id: uuidv4() } }))
export const deleteNote = createAction(NOTE.DELETE, ({ noteId }) => ({ payload: { noteId } }))
export const setContent = createAction(NOTE.SET_CONTENT, ({ content, noteId }) => ({ payload: { content, noteId } }))
export const setActive = createAction(NOTE.SET_ACTIVE, ({ isActive, noteId }) => ({ payload: { isActive, noteId } }))
export const setUpdate = createAction(NOTE.UPDATE, ({ title, noteId }) => ({ payload: { title, noteId } }))