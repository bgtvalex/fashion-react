import './footer.css'
import img1 from './../../img/icons/fb.svg'
import img2 from './../../img/icons/inst.svg'
import img3 from './../../img/icons/tw.svg'
import img4 from './../../img/icons/in.svg'

const Footer = () => {
	return ( 
		<footer className="footer">
			<div className="container">
				<div className="footer__row">
					<div className="footer__left">
						<div className="footer__logo">FASHION</div>
						<div className="footer__text">Complete your style with awesome<br /> clothes from us.</div>
						<ul className="footer__socials">
							<a href="#!" className="footer__link">
								<img src={img1} alt="facebook" />
							</a>
							<a href="#!" className="footer__link">
								<img src={img2} alt="instagram" />
							</a>
							<a href="#!" className="footer__link">
								<img src={img3} alt="twitter" />
							</a>
							<a href="#!" className="footer__link">
								<img src={img4} alt="in" />
							</a>
						</ul>
					</div>
					<div className="footer__right">
						<ul className="footer__nav">
							<li className="footer__item">Company</li>
							<li className="footer__item"><a href="#!">About</a></li>
							<li className="footer__item"><a href="#!">Contact us</a></li>
							<li className="footer__item"><a href="#!">Support</a></li>
							<li className="footer__item"><a href="#!">Careers</a></li>
						</ul>
						<ul className="footer__nav">
							<li className="footer__item">Quick Link</li>
							<li className="footer__item"><a href="#!">Share Location</a></li>
							<li className="footer__item"><a href="#!">Orders Tracking us</a></li>
							<li className="footer__item"><a href="#!">Size Guide</a></li>
							<li className="footer__item"><a href="#!">FAQs</a></li>
						</ul>
						<ul className="footer__nav">
							<li className="footer__item">Legal</li>
							<li className="footer__item"><a href="#!">Terms & conditions</a></li>
							<li className="footer__item"><a href="#!">Privacy Policy</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	 );
}
 
export default Footer;