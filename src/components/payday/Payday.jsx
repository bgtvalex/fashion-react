import './payday.css'
import paydayImg from './../../img/payday/01.jpg'
import Button from '../UI/button/Button';

const Payday = () => {
	return ( 
		<section className="payday">
			<div className="container">
				<div className="payday__row">
					<div className="payday__img">
						<img src={paydayImg} alt="img" />
					</div>
					<div className="payday__desc">
						<div className="payday__title">
							<h2 className="title-1">
								<span className="highlight"><span>PAYDAY SALE NOW</span></span>
								</h2>
						</div>
						<div className="payday__text">Spend minimal $100 get 30% off voucher code for your next purchase</div>
						<div className="payday__date">1 June - 10 June 2021</div>
						<div className="payday__terms">*Terms & Conditions apply</div>
						<Button text='SHOP NOW' />
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default Payday;