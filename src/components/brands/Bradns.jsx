import './bradns.css'

import img1 from './../../img/brands/hm.png'
import img2 from './../../img/brands/obey.png'
import img3 from './../../img/brands/shopify.png'
import img4 from './../../img/brands/lacoste.png'
import img5 from './../../img/brands/levis.png'
import img6 from './../../img/brands/amazon.png'

const Brands = () => {
	return ( 
		<section className="brands">
			<div className="container">
				<ul className="brands__list">
					<li className="brands__item"><a href="#!"><img src={img1} alt="HM" /></a></li>
					<li className="brands__item"><a href="#!"><img src={img2} alt="OBEY" /></a></li>
					<li className="brands__item"><a href="#!"><img src={img3} alt="shopify" /></a></li>
					<li className="brands__item"><a href="#!"><img src={img4} alt="lacoste" /></a></li>
					<li className="brands__item"><a href="#!"><img src={img5} alt="levis" /></a></li>
					<li className="brands__item"><a href="#!"><img src={img6} alt="amazon" /></a></li>

				</ul>
			</div>
		</section>
	 );
}
 
export default Brands;