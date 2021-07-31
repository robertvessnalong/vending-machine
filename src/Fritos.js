import { Link } from 'react-router-dom';

const Fritos = () => {
  return (
    <div className='image'>
      <img
        src='https://scene7.samsclub.com/is/image/samsclub/0002840044355_B?wid=400&hei=400'
        alt='Fritos'
      />
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default Fritos;
