import present from './present.svg';
import './App.css';
import Emoji from './emoji';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.escape-at-home.de/mission/briefing.php" target="_blank" rel="noreferrer">
          <img src={present} className="App-logo" alt="logo" />
        </a>
        <h1>
          Happy Birthday Jessica!
          <a href="https://www.escape-at-home.de/mission/" target="_blank" rel="noreferrer">
            <Emoji symbol="🕵🏻‍♀️🕵🏻‍♂️" label="sheep"/>
          </a>
        </h1>
      </header>
    </div>
  );
}
export default App;
