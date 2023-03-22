import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import ButtonComponent from './components/ButtonComponent';
import CardsComponent from './components/CardsComponent';

function App() {
  return (
    <div className="App">
      
        <HomeComponent/>
        
        <div className="col-4">
        <ButtonComponent/>
        </div>
        <div className="col-8">
        <CardsComponent/>
          </div>
        
      
    </div>
  );
}

export default App;
