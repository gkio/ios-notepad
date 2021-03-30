import { NOTE } from 'redux/actions/note';

const initialState = []


export default function notesListReducer(state = initialState, action) {
  switch (action.type) {
    case NOTE.ADD: {
      return [
        ...state.map((note) => ({ ...note, isActive: false})),
      {
        noteId: action.payload.id,
        title: action.payload.title,
        isActive: true,
      }]
    }
    case NOTE.DELETE: {
      return state.filter(({ noteId }) => noteId !== action.payload.noteId)
    }
    case NOTE.UPDATE: {
      return state.map((note) => note.noteId === action.payload.noteId ? ({
        ...note,
        title: action.payload.title
      }) : note)
    }
    case NOTE.SET_ACTIVE: {
      return state.map((note) => note.noteId === action.payload.noteId ? ({
        ...note,
        isActive: action.payload.isActive || note.isActive || false,
      }) : ({ ...note, isActive: false }))
    }
    default:
      return state;
  }
}