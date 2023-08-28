import { NavLink } from 'react-router-dom';
import './navigation.scss'
import Logo from '../../assets/logo_kasa.png';

function Navigation() {
    return (
    <header className="header">
        <NavLink to="/">
            <img src={Logo} alt="Logo Kasa" className="logo" />
        </NavLink>
        <nav>
            <ul>
                <li>
                <NavLink to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}>Acceuil</NavLink>
                </li>
                <li>
                <NavLink to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}>A Propos</NavLink>
                </li>
            </ul>
            </nav>
      </header>
    )
}

export default Navigation;