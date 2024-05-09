import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Store from './routes/Store';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About />},
			{ path: 'store', element: <Store />},
		]
	}
];

export default routes;