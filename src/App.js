import "./styles.css";
import { animated, useSpring } from "react-spring";
import { useState } from "react";

const mouths = [
  "M119.5 162.5C145 162.5 159.5 189.5 155 194.5C150.5 199.5 153 188.5 119.5 188.5C86 188.5 87.5002 197 84.0001 194.5C80.5001 192 94.0001 162.5 119.5 162.5Z",
  "M122.501 160C148.001 160 173.001 159.5 173.001 167.5C173.001 175.5 156.001 173 122.501 173C89.0008 173 66.5 175 66.5 167.5C66.5 160 97.0006 160 122.501 160Z",
  "M120.999 145C158.499 145 171.5 138 176 142.5C187.5 154 164.499 198.5 120.999 198.5C77.4995 198.5 54.929 161.5 62 145C66.2855 135 83.5 145 120.999 145Z"
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const animationProps = useSpring({
    mouth: mouths[activeIndex]
  });

  return (
    <>
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="120" cy="120" r="120" fill="#FFCD4C" />
        <path
          d="M192 135.5C188 135.5 178.5 126 164.5 123C150.5 120 141 125.5 137 123C133 120.5 152 99.0001 172 104.5C192 110 196 135.5 192 135.5Z"
          fill="#664300"
        />
        <path
          d="M48.3939 135.897C52.3939 135.897 61.8939 126.397 75.8939 123.397C89.8939 120.397 99.394 125.896 103.394 123.397C107.394 120.897 88.3939 99.3966 68.3939 104.897C48.3939 110.397 44.3939 135.897 48.3939 135.897Z"
          fill="#664300"
        />
        <animated.path d={animationProps.mouth} fill="#664300" />
      </svg>
      <div>
        {["disappointed", "neutral", "excited"].map((text, index) => (
          <button
            type="button"
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            style={{
              backgroud: activeIndex === index ? "purple" : "white",
              color: activeIndex === index ? "white" : "black"
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </>
  );
}
