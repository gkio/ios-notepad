import { useSelector, useDispatch } from 'react-redux';
import _debounce from 'lodash.debounce';
import { addNote, deleteNote, setActive, setUpdate } from 'redux/actions/note';
import deleteIcon from 'resources/delete.svg';
import './styles.scss';

const selector = state => state.noteList

export default function List(props) {
  const notes = useSelector(selector);
  const dispatch = useDispatch();

  const addNewNote = () => {
    dispatch(addNote({ title: `New Note ${notes.length + 1}` }))
  }

  const removeNote = (noteId) => {
    dispatch(deleteNote({ noteId }))
  }

  const setActiveNote = (noteId) => {
    dispatch(setActive({ noteId, isActive: true }))
  }

  const onChange = _debounce((title, noteId) => {
    dispatch(setUpdate({ title, noteId }))
  }, 1500)

  return (
    <div className="list">
      <button onClick={addNewNote}>add note</button>
      <ul >
        {notes.map((note) => (
          <li className={note.isActive ? 'active' : ''} onClick={() => setActiveNote(note.noteId)} key={note.noteId}>
            <span
              onKeyDown={({ target: { textContent } }) => onChange(textContent, note.noteId)}
              contentEditable
              suppressContentEditableWarning
            >{note.title}</span>
            <img onClick={() => removeNote(note.noteId)} src={deleteIcon} alt="delete icon"/>
          </li>
        ))}
      </ul>
    </div>
  )
}