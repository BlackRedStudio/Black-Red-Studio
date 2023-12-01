import { useEffect } from 'react';
import { navigate } from 'gatsby';

const page404 = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default page404;
