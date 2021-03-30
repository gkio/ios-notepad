import List from 'components/List';
import Editor from 'components/Editor';
import './styles.scss';

export default function Notepad(props) {
  return (
    <div className="notepad">
      <List />
      <Editor />
    </div>
  )
}