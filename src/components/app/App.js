import Article from '../article/Article';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './App.css';
import Nav from '../nav/Nav';

function App(props) {
  let {title, slogan, navigation, db, txt} = props; // сохраняем передаваемые значения в переменную и используем
  return (
    <div className="App">
      <Header title={title} slogan={slogan} />
      <Nav navigation={navigation} />
      <Article db={db} />
      <Footer copyright={txt} />
    </div>
  );
}

export default App;
