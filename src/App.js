import './App.css';

import Survey from './Components/Survey/Survey';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Survey />} />


      </Routes>





    </div>
  );
}

export default App;
