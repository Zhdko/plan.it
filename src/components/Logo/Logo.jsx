import './Logo.css';
import { ReactComponent as LogoIcon } from './images/logo-icon.svg';

function Logo({ withIcon, theme }) {
  return (
    <div className='logo'>
      <h2 className='logo__text text'>Plan.it</h2>
      {withIcon && <LogoIcon className='logo__icon' alt='logo' data-theme={theme} />}
    </div>
  );
}

export default Logo;
