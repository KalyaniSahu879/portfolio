
import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/productList'
import Contact from './components/contact/contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import {ThemeContext} from './context'
import Navbar from './components/navbar/Navbar';
import {Routes ,Route} from 'react-router-dom';
import { Nav , NavLink , Bars , NavMenu} from './components/navbar/NavbarElements'

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode ;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white" , color:darkMode ?"white" : "black"}}>
     
    <Navbar />
    
     <Toggle/>
     {/* <Navbar/> */}
     {/* <Intro/>
     <About/>
     <ProductList/>
     <Contact/> */}
     <Routes>
      <Route path='/' element={<Intro/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/project" element={<ProductList />}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     {/* <Route path='/' exact component={Intro} />
     <Route path='/about' component={About} />
     <Route path="/project" component={ProductList}/>
     <Route path="/contact" component={Contact}/>

     </Routes>
      </Router> */}
    
    </div>
  );
}

export default App;
