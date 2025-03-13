import { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedLines = () => {
    const [toggle, setToggle] = useState(false);
  
    const { lines } = useSpring({
      lines: toggle ? 1 : 0,
      from: { lines: 0 },
      config: { duration: 1000 },
    });
  
    return (
      <svg width="200" height="200">
        <animated.line
          x1="10"
          y1="10"
          x2="190"
          y2="10"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="200"
          strokeDashoffset={lines.interpolate((value) => 200 - value * 200)}
        />
        <animated.line
          x1="10"
          y1="50"
          x2="190"
          y2="50"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="200"
          strokeDashoffset={lines.interpolate((value) => 200 - value * 200)}
        />
        <animated.line
          x1="10"
          y1="90"
          x2="190"
          y2="90"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="200"
          strokeDashoffset={lines.interpolate((value) => 200 - value * 200)}
        />
        {/* Add more lines as needed */}
        <circle
          cx="100"
          cy="100"
          r="5"
          fill="black"
          onClick={() => setToggle(!toggle)}
        />
      </svg>
    );
  };
  
  export default AnimatedLines;