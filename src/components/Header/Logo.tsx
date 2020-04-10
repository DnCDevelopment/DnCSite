import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import lottie from 'lottie-web';
import animation from '../../assets/animations/json/dcdnew.json';
import './Logo.scss';

const Logo: React.FC = () => {
  const animationContainer = useRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy();
  }, []);

  return (
    <Link to="/" className="logo-container">
      <div className="logo-container-anim" ref={animationContainer} />
    </Link>
  );
};

export default Logo;
