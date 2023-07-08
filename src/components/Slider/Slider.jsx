import { useContext } from 'react';
import BtnClose from '../Buttons/ButtonClose/BtnClose';
import Logo from '../Logo/Logo';
import './Slider.css';
import { ThemeContext } from '../theme-provider/Theme';
import Navigation from './Navigation/Navigation';

function Slider() {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className='slider'>
      <div className='slider__header'>
        <Logo theme={theme} />
        <BtnClose theme={theme} />
      </div>
      <Navigation theme={theme} />
      <div className='slider__footer'>
        <button type='button' aria-label='add new tasks' className='btn btn_action_add-task btn_place_slider'>
          <div className='btn__icon_action_add'></div>
          <p className='text btn__text'>add new tasks</p>
        </button>
        <div className='theme'>
          <input type='checkbox' id='theme-toggle'></input>
          <label htmlFor='theme-toggle' className='theme__toggle'>
            <span></span>
          </label>
        </div>
        <div className='user-info'>
          <div className='profile__image'></div>
          <div className='user-info__text-container'>
            <h2 className='user-info__name text'>George</h2>
            <p className='user-info__email text'>george@icloud.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Slider;
