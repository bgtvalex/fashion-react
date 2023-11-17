import './arrivals.css'
import img1 from './../../img/arrivals/01.jpg'
import img2 from './../../img/arrivals/02.jpg'
import img3 from './../../img/arrivals/03.jpg'
import arrow from './../../img/icons/arrow.svg'
import Card from '../UI/card/Card'

const Arrivels = () => {
  return (
    <section class="arrivals">
      <div class="container">
        <div class="arrivals__title">
          <h2 class="title-2">NEW ARRIVALS</h2>
        </div>
        <div class="arrivals__row">
					<Card title="Hoodies & Sweetshirt" img={img1} />
					<Card title="Coats & Parkas" img={img2} />
					<Card title="Tees & T-Shirt" img={img3} />
        </div>
      </div>
    </section>
  )
}

export default Arrivels
