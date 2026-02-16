import { useEffect } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { PageTitleSetter } from './components/PageTitleSetter/PageTitleSetter'
import { Toggle } from './components/Toggle/Toggle'

function App() {
	useEffect(() => console.log("Velkommen Til Min Side"), []);
	return (
		<>
			<PageTitleSetter />
			<Counter />
			<Toggle />
		</>
	)
}

export default App
