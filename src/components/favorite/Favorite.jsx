import Card from '../UI/card/Card';
import './favorite.css'
import img1 from './../../img/favorite/01.jpg'
import img2 from './../../img/favorite/02.jpg'

const Favorite = () => {
	return ( 
		<section className="favorite">
			<div className="container">
				<div className="favorite__title">
					<h2 className="title-2">Young’s Favourite</h2>
				</div>
				<div className="favorite__row">
					<Card title="Trending on instagram" img={img1} />
					<Card title="All Under $40" img={img2} />
				</div>
			</div>
		</section>
	 );
}
 
export default Favorite;