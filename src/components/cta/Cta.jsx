import './cta.css'

const Cta = () => {
	return ( 
		<section className="cta">
			<div className="container cta__row">
				<div className="cta__title">
					<h4 className="title-4">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h4>
				</div>
				<div className="cta__text">Type your email down below and be young wild generation</div>
				<form action="" className="cta__form">
					<input type="text" className="cta__input" placeholder='Add your email here' />
					<button className='form__btn btn'>SEND</button>
				</form>
			</div>
		</section>
	 );
}
 
export default Cta;