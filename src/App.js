import './App.css';
import Header from './components/Header/Header';
import Search from './components/search/search';

function App() {



  return (
    <div className="App">
      <Header ></Header>
      <Search placeholder="enter reddit user name" />
    </div>
  );
}

export default App;
