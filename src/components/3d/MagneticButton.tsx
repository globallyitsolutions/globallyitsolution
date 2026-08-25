import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  id?: string;
  onClick?: () => void;
  as?: 'div' | 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 18,
  id,
  onClick,
  as = 'div',
  href,
  target,
  rel,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 220, mass: 0.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    x.set(deltaX * strength);
    y.set(deltaY * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const motionWrapper = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: isHovered ? 1.03 : 1 }}
      transition={{ scale: { type: 'spring', stiffness: 400, damping: 25 } }}
      className={`inline-block ${className}`}
      onClick={onClick}
      id={id}
    >
      {children}
    </motion.div>
  );

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        id={id}
        aria-label={ariaLabel}
        className={`inline-block ${className}`}
        onClick={onClick}
      >
        {motionWrapper}
      </a>
    );
  }

  if (as === 'button') {
    return (
      <button
        type={type}
        id={id}
        aria-label={ariaLabel}
        className={`inline-block ${className}`}
        onClick={onClick}
      >
        {motionWrapper}
      </button>
    );
  }

  // Default to a safe div container to avoid invalid HTML nesting (<button> inside <button> or <a> inside <button>)
  return motionWrapper;
};
