import { Outlet } from "react-router"
import { Navigation } from "../components/Navigation/Navigation"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export const MainLayout = () => {
	return (
		<>
			<main>
				<Navigation />
				<Header />
				<Outlet />
				<Footer />
			</main>
		</>
	)
}

