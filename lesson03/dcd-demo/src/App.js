import logo from './logo.svg';
import './App.css';
import DCD_funcDemo from './components/DCD_funcDemo';
import DCD_ClassComp from './components/DCD_ClassComp';
function App() {
  const user = {
  userName:"k22cntt4",
  password:"123456a@",
  fistName:"Đinh Công",
  lastname:"Định"
 } 
 function formatName(user){
  return <h2>Xin chào,{user.fistName} {user.lastName}</h2> 
 }
 return (
    <div className="App">
    {/* Bieu thuc jsx */}
    <div>
      <p> FullName: {user.fistName} {user.lastname} </p>
      {formatName(user)}
    </div>
    <div>
      <DCD_funcDemo/>
      <DCD_funcDemo userName="DCD" fullName="Đinh Công Định" age="20"/>
    </div>
    <DCD_ClassComp />
    </div>
  );
}

export default App;
