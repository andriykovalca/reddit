import './App.css';

import Search from './components/search/search';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        Reddit analytics
      </header>
      <Search placeholder="enter reddit user name" />
    </div>
  );
}

export default App;
