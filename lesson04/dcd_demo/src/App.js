import logo from './logo.svg';
import './App.css';
import Dcd_EventForm1 from './components/Dcd_EventForm1';
import Dcd_EventForm2 from './components/Dcd_EventForm2';
import Dcd_EventForm3 from './components/Dcd_EventForm3';
import Dcd_EventForm4 from './components/Dcd_EventForm4';

function App() {
  return (
    <div className="App">
    <Dcd_EventForm1/>
    <Dcd_EventForm2/>
    <Dcd_EventForm3/>
    <Dcd_EventForm4 name={"Đinh Công Định"}/>
    </div>
  );
}

export default App;
