import './App.css';
import MainPage from './layouts/main-page/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' index element={<MainPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
