import Navbar from './components/Navbar/Navbar';
import {Route,Routes} from 'react-router-dom';
import New from './components/pages/New';
import Upload from "./components/pages/Upload";
import Folder from "./components/pages/Folder";
import Report from "./components/pages/Report";
import Patient from "./components/pages/Patient";
import Settings from './components/pages/Settings';
import Logout from "./components/pages/Logout";

function App() {
  return (
  
  <Navbar>
      <Routes>
        <Route path="*" element={<New/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/folder' element={<Folder/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/patient' element={<Patient/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </Navbar>
    
   
  
  )
  
}

export default App;
