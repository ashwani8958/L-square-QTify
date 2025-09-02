import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import HeroSection from './components/heroSection.js';
import CardContainer from './components/CardContainer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <CardContainer name="Top Album" isAlbum />
      <CardContainer name="New Album" isAlbum />
      <CardContainer name="Songs"/>
    </div>
  );
}

export default App;
