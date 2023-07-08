import './Navigation.css';
import { NAV_LINKS } from '../../../constants/navLinks';
import NavigationLink from './NavigationLink/NavigationLink';

function Navigation({ theme }) {
  return (
    <ul className='list navigation'>
      {NAV_LINKS.map((link) => {
        return <NavigationLink key={link.id} name={link.name} theme={theme} />;
      })}
    </ul>
  );
}

export default Navigation;
