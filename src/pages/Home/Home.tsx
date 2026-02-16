import { useNavigate } from 'react-router'
import './Home.css'
export const Home = () => {
	let navigate = useNavigate();
	return (
		<div className="home">
			<h1>Velkommen til min side</h1>
			<button onClick={() => navigate('/about')}>Go To About</button>
			<button onClick={() => navigate('/contact')}>Go To Contact</button>
		</div>
	)
}

