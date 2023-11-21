import './download.css'
import img1 from './../../img/download/phone.png'
import img2 from './../../img/icons/google-play.svg'
import img3 from './../../img/icons/app-store.svg'

const Download = () => {
	return ( 
		<section className="download">
			<div className="container">
				<div className="download__row">
				<div className="download__desc">
					<div className="download__title">
						<div className="title-3">DOWNLOAD APP & GET THE VOUCHER!</div>
					</div>
					<div className="download__text">Get 30% off for first transaction using Rondovision mobile app for now.</div>
					<div className="download__source">
						<a href="#!"><img src={img2} alt="img" /></a>
						<a href="#!"><img src={img3} alt="img" /></a>
					</div>
				</div>
				<img src={img1} alt="img" />
				</div>
			</div>
		</section>
	 );
}
 
export default Download;