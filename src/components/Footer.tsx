// Import the necessary dependencies
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4 h-16'>
      <div className='container mx-auto flex justify-center space-x-6'>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-500 transition-colors duration-300'
          aria-label='Facebook'
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400 transition-colors duration-300'
          aria-label='Twitter'
        >
          <FaTwitter size={24} />
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-pink-500 transition-colors duration-300'
          aria-label='Instagram'
        >
          <FaInstagram size={24} />
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-700 transition-colors duration-300'
          aria-label='LinkedIn'
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
