import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Beaker } from 'lucide-react';

export default function IntroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => navigate('/dashboard'), 1000);
      }
    });

    tl.from('.logo-container', {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to('.logo-container', {
      rotationY: 360,
      duration: 1.5,
      ease: 'power1.inOut'
    })
    .from('.particles', {
      opacity: 0,
      scale: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out'
    })
    .to('.intro-container', {
      opacity: 0,
      delay: 1,
      duration: 0.5
    });
  }, [navigate]);

  return (
    <div ref={containerRef} className="intro-container w-screen h-screen bg-black flex items-center justify-center">
      <div className="logo-container relative">
        <div className="text-6xl font-bold text-white flex items-center gap-4">
          <Beaker className="w-16 h-16 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            LOL Groups
          </span>
        </div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particles absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 200 - 100}px`,
              top: `${Math.random() * 200 - 100}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}