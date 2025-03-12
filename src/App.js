import './App.css';
import Banner from './Banner';
import Cabecalho from './Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
    </div>
  );
}

export default App;
