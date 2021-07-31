import { BrowserRouter, Route } from 'react-router-dom';
import Fritos from './Fritos';
import Gatorade from './Gatorade';
import Cookies from './Cookies';
import VendingMachine from './VendingMachine';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/gatorade'>
          <Gatorade />
        </Route>
        <Route exact path='/fritos'>
          <Fritos />
        </Route>
        <Route exact path='/cookies'>
          <Cookies />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
