import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
		<BrowserRouter>
			<Route exact path="/" component={ Home } />
			<Route path="/projetos" component={ Projects } />
			<Route path="/sobre" component={ About } />
			<Route path="/contato" component={ Contact } />
			<Route component={ NotFound } />
		</BrowserRouter>
  );
}

export default App;
