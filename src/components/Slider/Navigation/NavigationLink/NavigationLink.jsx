import { NavLink } from 'react-router-dom';
import './NavigationLink.css';
import Icon from '../../../Icon/Icon';
import formatLinkName from '../../../../helpers/formatLinkName';

function NavigationLink({ name, theme }) {
  return (
    <li className='navigation__item'>
      <NavLink data-theme={theme} className='link navigation__link' to={`/${name}`}>
        <Icon className='navigation__icon' name={name} data-theme={theme} />
        <p className='navigation__text text'>{formatLinkName(name)}</p>
      </NavLink>
    </li>
  );
}

export default NavigationLink;
