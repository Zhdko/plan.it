import { useContext } from 'react';
import './BtnClose.css';
import { ThemeContext } from '../../theme-provider/Theme';

function BtnClose() {
  const { theme } = useContext(ThemeContext);
  return (
    <button type='button' aria-label='switch slidebar' className='btn close-btn close-btn_close' data-theme={theme}>
      <span></span>
    </button>
  );
}

export default BtnClose;
