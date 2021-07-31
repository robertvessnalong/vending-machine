import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div className='image'>
      <img
        src='https://m.media-amazon.com/images/I/81YMn2YZ0uL._SL1125_.jpg'
        alt='Grandma Cookies'
      />
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default Cookies;
