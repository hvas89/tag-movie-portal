import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/darkly/bootstrap.min.css'
import Header from './components/Header';
import MoviesPortal from './components/MoviesPortal';

function App() {
  return (
    <div>
      <Header />
      <br/>
      <div className='container'>
        <MoviesPortal/>
      </div>
    </div>
  );
}

export default App;
