import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Bob'} lastName={'Roberts'} age={'23'} hairColor={'brown'}/>
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={'30'} hairColor={'red'}/>
      <PersonCard firstName={'Drew'} lastName={'Adorno'} age={'28'} hairColor={'black'}/>
    </div>
  );
}

export default App;
