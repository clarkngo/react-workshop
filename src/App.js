import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='greeting' 
        style={{ background: 'black', color: 'white' }}
        onClick={ ()=> alert('hello') }
        >
        Hello 
      </div>
  
    </div>
  );
}

export default App;
