import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Nav = () => {
    const handleMenuClick = () => {
        document.getElementById('nav-menu').classList.add('show-menu');
    };

    const handleNavClose = () => {
        document.getElementById('nav-menu').classList.remove('show-menu');
    }


    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="#home" className='nav__logo'>
                    <img src="https://user-images.githubusercontent.com/82244776/137649850-db7e8b2e-36cb-420e-8493-7d93c712990d.png" alt="Portfolio logo" />
                </a>

                <div id='nav-menu' className='nav__menu'>
                    <ul className='nav__list'>
                        <li className='nav__item' onClick={handleNavClose}>
                            <Link to="/" className='nav__link'>About</Link>
                        </li>
                        <li className='nav__item' onClick={handleNavClose}>
                            <Link to="/technologies" className='nav__link'>Technologies</Link>
                        </li>
                        <li className='nav__item' onClick={handleNavClose}>
                            <Link to="/projects" className='nav__link'>Projects</Link>
                        </li>
                        <li className='nav__item' onClick={handleNavClose}>
                            <Link to="/contact" className='nav__link'>Contact</Link>
                        </li>
                    </ul>

                    <div onClick={handleNavClose} className='nav__close'>
                        <RiCloseLine />
                    </div>
                </div>
                <div onClick={handleMenuClick} className='nav__toggle'>
                    <RiMenuLine />
                </div>
            </nav>
        </header>
    )
}

export default Nav;