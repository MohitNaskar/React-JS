import './App.css';
import Navbar from './components/navbar';
import PlaceList from './components/PlaceList';
function App() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="Main">
        <PlaceList />
      </div>
    </div>
  );
}

export default App;
