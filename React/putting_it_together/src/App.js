import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'}/>
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'}/>
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'}/>
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'}/>
    </div>
  );
}

export default App;
