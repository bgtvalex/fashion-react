import './mobile-nav.css'
import Button from '../UI/button/Button';

const MobileNav = () => {
	return ( 
		<div className="mobile-nav">
			<ul className="nav__list">
				<li className="active"><a href="#!">CATALOGUE</a></li>
				<li><a href="#!">FASHION</a></li>
				<li><a href="#!">FAVORITE</a></li>
				<li><a href="#!">LIFESTYLE</a></li>
			</ul>
			<Button text='SIGN UP' />
		</div>
	 );
}
 
export default MobileNav;