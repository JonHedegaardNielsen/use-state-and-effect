import { useEffect } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter';
import { TitleSetter } from './components/TitleSetter/TitleSetter';
import { Toggle } from './components/Toggle/Toggle';

function App() {
	useEffect(() => console.log("Velkommen Til Min Side"), []);
	return (
		<>
			<Counter />
			<TitleSetter />
			<Toggle />
		</>
	)
}

export default App
