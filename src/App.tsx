import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footter';
import './App.scss';

const AuthContext = React.createContext(false);

function App() {
	const [isLogged, setLogged] = useState(false);

	const navigate = useNavigate();

	const handleLogin = () => {
		window.localStorage.setItem('isLogged', JSON.stringify(true));
		setLogged(true);
		navigate('/home');
	}

	const handleLogout = () => {
		window.localStorage.removeItem('isLogged');
		setLogged(false);
	}

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		const auth = !!window.localStorage.getItem('isLogged');
		setLogged(auth);
	}, []);

  return (
		<AuthContext.Provider value={isLogged}>
			<Header onLogin={handleLogin} onLogout={handleLogout} />
			<Body />
			<Footer />
			<img className='scrollToTop' onClick={scrollToTop} src="/image/component_scroll.svg" alt="scroll" />
		</AuthContext.Provider>
  );
}

export {
	AuthContext,
};

export default App;
