import logo from './logo.svg';
import './App.css';
import Class_DinhCongDinh from './compoments/Class_DinhCongDinh';
import Func_JSX_DinhCongDinh from './compoments/Func_JSX_DinhCongDinh';
function App() {
  return (
    <section className="App">
      <h1>Demo JSX</h1>
     {/* function Component demo*/}
     <Func_JSX_DinhCongDinh/>
     <Func_JSX_DinhCongDinh fullName=" Đinh Công Định" age="20" />
     <Class_DinhCongDinh/>
     <hr/>
     <Class_DinhCongDinh info="Hocj Reactjs" time="11"/>
    </section>

  );
}

export default App;
