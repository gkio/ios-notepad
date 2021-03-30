import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContent } from 'redux/actions/note';
import './styles.scss';

const selector = ({ noteList, note }) => {
  const activeNote = noteList.find(({ isActive }) => isActive)
  if(activeNote) {
    return note.find(({ id }) => id === activeNote.noteId)
  }
  return {};
}

export default function Editor(props) {
  const note = useSelector(selector);
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const updateContent = (text) => {
    dispatch(setContent({ content: text, noteId: note.id }))
  }

  const onChange = (e) => {
    const { target: { value } } = e
    if (value === '' || value) {
      updateContent(value)
    }
  }

  return (
    <textarea
      disabled={!note.id}
      ref={editorRef}
      className="editor"
      onChange={onChange}
      value={note.content || ''}
    />
  )
}