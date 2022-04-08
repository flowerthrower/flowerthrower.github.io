import present from './present.svg';
import './App.css';
import Emoji from './emoji';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://escape-at-home.de/produkt/das-filmset/">
          <img src={present} className="App-logo" alt="logo" />
        </a>
        <h1>
          Happy Birthday Jessica!
          <Emoji symbol="🕵🏻‍♀️🕵🏻‍♂️" label="sheep"/>
        </h1>
      </header>
    </div>
  );
}

export default App;
