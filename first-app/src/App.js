import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld'
import PersonCard from './components/personCard';
import MyNewComponent from './components/MyNewComponent';
import Button from './components/buttonClick';
import NewComponent from './components/state';

function App() {
  return (
    <div className="App">
      <HelloWorld someString={"Stuff"}/>
      <PersonCard firstname='Drew' lastname='Adorno' age={28} haircolor='black'/>
      <PersonCard firstname='Bob' lastname='Bob' age={100} haircolor='none'/>
      <PersonCard firstname='John' lastname='Smith' age={35} haircolor='brown'/>
      <PersonCard firstname='Joe' lastname='Exotic' age={50} haircolor='blonde'/>
      <MyNewComponent header={"Header Prop"}>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    <Button text={'You have clicked this button'} click={()=>console.log('Clicked')}/>
    <NewComponent/>
    </div>
  );
}

export default App;
