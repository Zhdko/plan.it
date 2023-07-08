import { useContext } from 'react';
import './App.css';
import { ThemeContext } from '../theme-provider/Theme';
import { Route, Routes } from 'react-router-dom';
import Slider from '../Slider/Slider';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='page' data-theme={theme}>
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/home' element={<Slider />} />
      </Routes>
    </div>
  );
}

export default App;
