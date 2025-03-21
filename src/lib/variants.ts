export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number) => {
  return {
    hidden: {
      y: direction === 'up' || direction === 'down' ? (direction === 'up' ? 80 : -80) : 0,
      x: direction === 'left' || direction === 'right' ? (direction === 'left' ? 80 : -80) : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}; 