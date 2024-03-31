import React from "react";
import "./style.scss";
import {
  useTypewriter,
  Cursor,
  TypewriterHelper,
} from "react-simple-typewriter";

interface TypewriterOptions {
  words: string[];
  loop?: number | boolean;
}

export const Dashboard: React.FC = () => {
  const [text] = useTypewriter({
    words: [" Shriram-Kushwaha", " A web developer"],
    loop: Infinity,
    typeSpeed: 120,
    deleteSpeed: 80,
  } as TypewriterOptions) as [string, TypewriterHelper];


  return (
    <div className="dash-bg" id="home">
      <div className="texts">
        <div className="headings">
          <h1 className="heading1">HEY, WELCOME TO MY PORTFOLIO</h1>
          <h1 className="type">
            I AM
            <span>
              {text}
              <span>
                <Cursor />
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
