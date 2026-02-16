import './Navigation.css'
import { Link } from "react-router"

export const Navigation = () => {
	return (
		<>
			<nav>
				<ul className="navigation">
					<li>
						<Link to='/home' >Home</Link>
					</li>
					<li>
						<Link to='/contact' >Contact</Link>
					</li>
					<li>
						<Link to='/about' >About</Link>
					</li>
					<li>
						<Link to='/products' >Products</Link>
					</li>
				</ul>
			</nav>

		</>
	)
}

