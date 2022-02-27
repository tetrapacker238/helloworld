import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' //Exportamos con parentesis en {} porque es una funcion de Greet.js
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Alejandro"/>
      <Greet name="Rocio"/>
      <Greet name="Vishwas"/>
      <Welcome name="Alejandro"/>
      <Welcome name="Rocio"/>
    </div>
  );
}

export default App;
