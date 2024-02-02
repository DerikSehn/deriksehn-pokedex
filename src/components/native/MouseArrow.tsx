import React from 'react'
/* component that follows the mouse with react state, it must change appearance whenever hits a button or link  */
function MouseArrow() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
    const scrollY = window.scrollY;
      setPosition({ x: e.clientX  , y: e.clientY + scrollY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
    
  return (
    <div
        id={'cursor'}
      className="absolute top-1 opacity-50 -left-2 w-5 h-5 bg-champagne_pink rounded-full  z-[10001]"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}

export default MouseArrow