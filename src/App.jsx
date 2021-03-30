import './App.scss';
import { Gallery } from './components/block/gallery/Gallery';
import { Header } from './components/block/header/Header';
import { Home } from './components/block/home/Home';

function App() {
	return (
		<>
			<Header />
			<Home />
			<Gallery/>
		</>
	);
}
export default App;
