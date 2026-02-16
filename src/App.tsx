import { useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import { MainLayout } from './layouts/MainLayout'
import { About } from './pages/About/About'
import { Home } from './pages/Home/Home'
import { Contact } from './pages/Contact/Contact'
import { Products } from './pages/Products/Products'

function App() {
	useEffect(() => console.log("Velkommen Til Min Side"), []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/about' element={<About />} />
						<Route path='/products' element={<Products />} />
						<Route path='/home' element={<Home />} />
						<Route path='/contact' element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
