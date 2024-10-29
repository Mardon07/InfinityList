
import React from 'react';
import './App.css'
// import ItemList from './components/ItemList'

const ItemList = React.lazy(() => import('./components/ItemList'));

const App: React.FC = () => {
  return (
    <div className="App" data-testid="item-list">
      <h1>Список элементов с бесконечным скроллом</h1>
      <ItemList />
    </div>
  );
};

export default App
