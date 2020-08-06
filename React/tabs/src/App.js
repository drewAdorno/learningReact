import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabs=[
      {label:'Tab 1', content:'Tab 1 content is showing here'},
      {label:'Tab 2', content:'Tab 2 content is showing here'},
      {label:'Tab 3', content:'Tab 3 content is showing here'},
      {label:'Tab 4', content:'Other Stuff'},
      {label:'Tab 5', content:'More other stuff'},
      {label:'Tab 6', content:'Even more stuff'},
  ]
      
  
    return (
    <div className='container'>
        <Tabs  tabs={tabs}/>
    </div>
  );
}

export default App;
