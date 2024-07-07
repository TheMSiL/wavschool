import {
	Route,
	Routes,
	Outlet,
	Navigate,
	BrowserRouter as Router,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import OfferAgreement from './components/OfferAgreement';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnPolicy from './components/ReturnPolicy';
import Header from './components/start/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'

const App = () => {
	const handleRouteChange = () => {
		window.scrollTo(0, 0);
	};
	return (
		<Router>
			<ScrollToTop />
			<div className='wrapper'>
				<Header />
				<Routes onUpdate={handleRouteChange}>
					<Route path='/' element={<Outlet />}>
						<Route index element={<MainPage />} />
						<Route path='offer-agreement' element={<OfferAgreement />} />
						<Route path='privacy-policy' element={<PrivacyPolicy />} />
						<Route path='return-policy' element={<ReturnPolicy />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
