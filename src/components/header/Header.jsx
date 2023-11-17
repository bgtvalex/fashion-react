import './header.css'
import logoImg from './../../img/icons/logo.svg'
import Button from '../UI/button/Button';

const Header = () => {
	return ( 
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logoImg} alt="logo" className="logo" />
						<span>FASHION</span>
					</div>
					<nav className="header__nav nav">
						<ul className="nav__list">
							<li className="nav__item"><a href="#!">CATALOGUE</a></li>
							<li className="nav__item"><a href="#!">FASHION</a></li>
							<li className="nav__item"><a href="#!">FAVORITE</a></li>
							<li className="nav__item"><a href="#!">LIFESTYLE</a></li>
						</ul>
						<Button text='SIGN UP' />
					</nav>
				</div>
			</div>
		</header>
	 );
}
 
export default Header;