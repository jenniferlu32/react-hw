import Button from './Button';

const Header = ({ title, showTask, addOrClose }) => {

  return (
    <header className='container'>
      { title }
      <Button color={addOrClose ? 'pink': 'forestgreen'}
      text={addOrClose ? 'Close' : 'Add'}
      onClick={showTask}/>
    </header>
  )
}

export default Header;
