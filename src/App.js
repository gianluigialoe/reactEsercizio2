
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mynavbar from './components/Mynavbar';
import Jumbotron from './components/Jumbotron';
import Libbri from './components/libbri';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-body-secondary">
      <Mynavbar testoAddizionale="I libri" />
      <main>
        <Jumbotron />
       <div>
        <Libbri />
       </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
