import { Link } from 'react-router-dom';

const Gatorade = () => {
  return (
    <div className='image'>
      <img
        src='https://lh3.googleusercontent.com/proxy/S1g3bemfRribn37hHbaz4GgMNM8pyKD9QPW-mycevR6OUZ3xFTiy92S8GEJU10uWZsUX2kkP5EWIxhmIsY-dCegaKjmGt1dBB1fy82zwpEi_sfa7SWSEg5i8UhlMfUQZINiGC4cA0p3jUJMnSBlyn4hLJkVcR_N8'
        alt='gatorade'
      />
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default Gatorade;
