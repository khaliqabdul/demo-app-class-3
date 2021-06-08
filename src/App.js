import React from 'react';
import './App.css';
import Dinner from './dinner';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* This is comment tag*/}
        <Dinner title="Breakfast" dishName="'Anda(eag) Paratha'" sweetDish="'Green Tea'" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnz9861qmgV5UJxIXuRbZIo04CUUvEX4KrQ&usqp=CAU" />
        <hr />
        <Dinner title="Lunch" dishName="'Nihari'" sweetDish="'Gajir ka Halwa'" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnz9861qmgV5UJxIXuRbZIo04CUUvEX4KrQ&usqp=CAU" />
        <hr />
        <Dinner title="Dinner" dishName="'Sabzi Pulao'" sweetDish="'Kheer'" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnz9861qmgV5UJxIXuRbZIo04CUUvEX4KrQ&usqp=CAU" />
      </header>
    </div>
  );
}
export default App;
