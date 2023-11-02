import { paths } from '../../../const/paths';

import NavItem from './NavItem';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <NavItem label='Home' path={paths.home} />
      <NavItem label='Cakes' path={paths.cakes} />
      <NavItem label='Pastries' path={paths.pastries} />
      <NavItem label='Bread' path={paths.bread} />
      <NavItem label='Contact' path={paths.contact} />
    </nav>
  );
}

export default NavBar;
