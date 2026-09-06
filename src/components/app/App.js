import Article from '../article/Article';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title = 'My site' slogan = "I'm learning React" />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
