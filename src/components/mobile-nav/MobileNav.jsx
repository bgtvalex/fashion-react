import './mobile-nav.css'
import Button from '../UI/button/Button';
import logo from './../../img/icons/logo.svg'
import star from './../../img/icons/star.svg'

const MobileNav = () => {
	return ( 
		<div className="mobile-nav">
			<img className='star' src={star} alt="звезда" />
			<img className='star' src={star} alt="звезда" />
			<img className='star' src={star} alt="звезда" />
			<img className='star' src={star} alt="звезда" />
			<ul className="nav__list">
				<li className="logo">
					<img src={logo} alt="Логотип" />
					<span>FASHION</span>
				</li>
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