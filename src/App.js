// import logo from './logo.svg';
import './index.css';
import Herosection from './Herosection';
import Section1 from './Section1';
import Section2 from './Section2';

function App() {

  return (
    <div className="App">
  <Herosection />
    <div className="content">
      <Section1 />
      <Section2 />
    </div>
    </div>
  );
}


export default App;
