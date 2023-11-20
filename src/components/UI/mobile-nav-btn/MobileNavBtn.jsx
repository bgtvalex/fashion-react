import './mobile-nav-btn.css'
import {useState, useEffect, useRef} from 'react'

const MobileNavBtn = () => {
	
	const [show, setShow] = useState(false)
	const btnRef = useRef(null)

	useEffect(() => {
		if (show) {
			document.querySelector('.mobile-nav').classList.add('mobile-nav--open')
			btnRef.current.classList.add('nav-icon--active')
		} else {
				document.querySelector('.mobile-nav').classList.remove('mobile-nav--open')
				btnRef.current.classList.remove('nav-icon--active')
		}
	}, [show])
	
	const toggleShowMobileNav = () => {
		setShow(!show)
	}

	return ( 
		<button className="mobile-nav-btn" onClick={toggleShowMobileNav}>
			<div ref={btnRef} className="nav-icon"></div>
		</button>
	 );
}
 
export default MobileNavBtn;