// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';



function App() {

  const props = "Bienvenidos a Adrian's Ecommerce"
  const links = [{title: 'Google', href: 'google.com'},{title: 'Facebook', href: 'facebook.com'}, {title: 'Twitter', href: 'twitter.com'}, {title: 'Instagram', href: 'instagram.com'}]


  return (
    <>
        <NavBar bienvenida = {props} agradecimeinto = 'Gracias por su compra' links = {links} />
        <ItemListContainer />
    </>

  );
}

export default App;
