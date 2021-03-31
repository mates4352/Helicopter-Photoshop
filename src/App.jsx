import './App.scss';
import { Gallery } from './components/block/gallery/Gallery';
import { Header } from './components/block/header/Header';
import { Home } from './components/block/home/Home';
import { Person } from './components/block/person/Person';
import { Photos } from './components/block/photos/Photos';

function App() {
	return (
		<>
			<Header />
			<Home />
			<Gallery />
			<Photos />
			<Person/>
		</>
	);
}
export default App;
