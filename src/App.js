import React from 'react';
import './App.css';
import Dinner from './dinner';
function App(){
  return (
    <div className="App">
    <header className="App-header">
    {/* This is comment tag*/}
    <Dinner dishName="Mutton Biryani" sweetDish="Kheer" />
    <hr />
    <Dinner dishName="Nihari" sweetDish="Gajir ka Halwa" />
    <hr/>
    <Dinner dishName="Sabzi Pulao" sweetDish="Green Tea" />
    </header>
    </div>
  );
}
export default App
