import { NavLink} from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className='Vending-machine'>
      <h1>Vending Machine</h1>
      <NavLink exact to='/gatorade'>
        Gatorade
      </NavLink>
      <NavLink exact to='/fritos'>
        Fritos
      </NavLink>
      <NavLink exact to='/cookies'>
        Cookies
      </NavLink>
    </div>
  );
};

export default VendingMachine;
