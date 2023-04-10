import logo from './logo.svg';
import Profile from 'lessons/Props';
import Card from 'lessons/Children'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card>
          <Profile person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
          <Profile person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
        </Card>
      </header>
    </div>
  );
}

export default App;
