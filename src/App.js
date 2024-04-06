import './App.css';
import Home from './Home';
import { Route,Routes} from 'react-router-dom'

import Food from './Categories/Food'
import Medication from './Categories/Medication';
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
import Education from './Categories/Education'
import Rent from './Categories/Rent';

function App() {
  return (
    <div className="App">
     <Bar />
   
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/rent' element={<Rent/>}/>
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
    <Route path='/school' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/coaching' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/tution' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/doctors' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/clinics' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/medical_shop' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/animals_medical_shop' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/blood_bank' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/nurses' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/animals_doctor' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/labour' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/electrician' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/plumber' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/beauty' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/house_rent' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/room_rent' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/car_rent' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/restraunts' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/kitchen_shop' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/hotels' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/catering' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/sweet_shop' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/maid' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/chef' element={<ServiceProviderSearchPage/>}/> 
    <Route path='/grocery_shop' element={<ServiceProviderSearchPage/>}/> 
   
    <Route path='/college' element={<ServiceProviderSearchPage/>}/> 
    {/* <Route path='/educations/categories' element={<Educationcategories/>}/> */}
    <Route path='/serviceproviderregistration' element={<ServiceProviderRegistration/>}/> 
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
