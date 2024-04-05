import './App.css';
import Home from './Home';
import { Route,Routes} from 'react-router-dom'
import Education from './Education'
import Food from './Food'
import Medication from './Medication';
import Contact from './Contact';
import Profile from './Profile';
import About from './About';
import SignUp from './register';
import Login from './Login';
import Bar from './Bar'
import Footer from './Footer'
import ServiceProviderRegistration from './ServiceProviderRegistration';
import SearchService from './SearchService';
import  ServiceProviderSearchPage from './ServiceProviderSearchPage'
function App() {
  return (
    <div className="App">
     <Bar style={{backgroundColor:'black'}}/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/find' element={<SearchService/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/medication' element={<Medication/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/profile' element={<Profile/>}/> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/signup' element={<SignUp/>}/> 
    <Route path='/setprofile' element={<Profile/>}/> 
    <Route path='/search' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/serviceproviderregistration' element={<ServiceProviderRegistration/>}/> 
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
