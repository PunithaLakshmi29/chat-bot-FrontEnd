
import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter} from "react-router-dom";
// import Home from './pages/Home';
import Routing from './Router/Routing';
// import AddEdit from './pages/AddEdit';
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <ToastContainer position="top-center"/> 
          {/* <Routes>
            <Route exact path="/" component={Home}></Route>
             <Route path="/addContact" component={AddEdit}></Route>
          </Routes> */}
         <Index/>
            {/* <Home/>  */}
           <Routing/> 
     
        </div>
        </BrowserRouter>
  );
}

export default App;
