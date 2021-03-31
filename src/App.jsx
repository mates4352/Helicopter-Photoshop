import './App.scss';
import { Gallery } from './components/block/gallery/Gallery';
import { Header } from './components/block/header/Header';
import { Home } from './components/block/home/Home';
import { Map } from './components/block/map/Map';
import { Person } from './components/block/person/Person';
import { Photos } from './components/block/photos/Photos';
import { Purchase } from './components/block/purchase/Purchase';

function App() {
	return (
		<>
			<Header />
			<Home />
			<Gallery />
			<Photos />
			<Person />
			<Purchase />
			<Map/>
		</>
	);
}
export default App;
