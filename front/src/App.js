import './App.css';
import {useState, useEffect} from 'react'
import Cards from './components/Card/Cards.jsx';
import {Container, ContCartas} from './styles/styled-components.jsx';
import Nav from './components/Nav/Nav';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App () {
  
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "trechi@mail.com";
  const password = "trechi123";

  function login(userData){
   if(userData.password === password && userData.username === username){
      setAccess(true);
      navigate("/home");
   } else {alert("Datos incorrectos.")}
  }


  const logOut = () =>{
   setAccess(false);
   navigate("/");
  }

  useEffect(()=>{
   !access && navigate('/');
  },[access, navigate])

  function onSearch(character) {
    fetch (`http://localhost:3001/rickandmorty/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             const alreadyExists = characters.some(char => char.id === data.id);
             if (!alreadyExists) {
                setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert(`El personaje ${data.name} ya ha sido agregado.`);
             }
          } else {
             window.alert('Ingrese un ID entre 1 y 826');
          }
       });
 }

  function onClose(id){
    setCharacters(characters.filter(personaje => personaje.id !== id))
  }

  return (
    <Container>
    <div className='App'>

      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/> }

        <Routes>
          <Route path = "/home" element={<ContCartas><Cards characters={characters} onClose={onClose}/></ContCartas>}/>
          <Route path = "/about" element={<About />}/>
          <Route path = "/detail/:detailId" element={<Detail />}/>
          <Route path = "/" element={<Form login={login}/>}/>
          <Route path = "/favorites" element={<Favorites/>}/>
        </Routes>

    </div>
    </Container>
  )
}

export default App
