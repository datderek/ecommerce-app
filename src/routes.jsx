import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Store from './routes/Store';
import ErrorPage from './routes/ErrorPage';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About />},
			{ path: 'store', element: <Store />},
		]
	}
];

export default routes;