import './promo.css'
import promImg from './../../img/promo/header-img.jpg'
import listImg from './../../img/icons/list.svg'

const Promo = () => {
	return ( 
		<section className="promo">
			<div className="container">
				<div className="promo__row">
					<div className="promo__desc">
						<div className="promo__title">
							<h1 className="title-1">
								<span className="highlight"><span>LET’S</span></span><br/> EXPLORE<br/> <span className="highlight highlight--yellow"><span>UNIQUE</span></span><br/> CLOTHES.
								 
							</h1>
						</div>
						<div className="promo__text">
							<p>Live for Influential and Innovative fashion!</p>
						</div>
						<div className="promo__btn-wrapper">
							<a href='#!' className="promo__btn btn">SHOP NOW</a>
						</div>
					</div>
					<div className="promo__img">
						<img src={promImg} alt="girl" />
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default Promo;