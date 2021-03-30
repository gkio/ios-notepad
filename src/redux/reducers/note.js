import { NOTE } from 'redux/actions/note';

const initialState = [];

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case NOTE.ADD: {
      return [...state, {
        id: action.payload.id,
        content: '',
      }]
    }
    case NOTE.SET_CONTENT: {
      return state.map((note) => note.id === action.payload.noteId ? ({
        ...note,
        content: action.payload.content
      }) : note)
    }
    default:
      return state
  }
}