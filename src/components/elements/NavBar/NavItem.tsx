import { Link } from 'react-router-dom';

const NavItem = ({ label, path }: { label: string; path: string; }) => (
  <Link to={path} className="mx-2">{label}</Link>
);

export default NavItem;
