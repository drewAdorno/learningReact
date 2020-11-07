import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
        <div id='main-section'>
            <Sidebar />
            <Main>
                <Subcontent location={'side'}/>
                <Subcontent location={'middle'}/>
                <Subcontent location={'side'}/>
                <Advertisement />
            </Main>
        </div>
    </div>
  );
}

export default App;
