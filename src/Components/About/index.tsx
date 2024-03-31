import React from "react";
import "./style.scss";
import MyImage from "../../assets/IMG-20210715-WA0002.jpg";
export const About: React.FC = () => {
  return (
    <div id="about">
      <h1>About Me..</h1>
      <div className="rows">
        <div className="image">
          <img src={MyImage} alt="profile pic" />
        </div>
        <div className="abouts">
          <p>
            As a dedicated B.Com student with a passion for web development, I
            have cultivated a robust skill set that seamlessly blends both
            business acumen and technical expertise. My academic journey has
            equipped me with a strong foundation in business principles, while
            my personal exploration into web development has allowed me to
            master programming languages and embrace industry best practices.
            Throughout my coursework, I've honed my analytical and strategic
            thinking, providing me with a unique perspective that I can bring to
            the realm of web development. My studies in business have given me a
            solid understanding of financial concepts, marketing strategies, and
            organizational dynamics, enhancing my ability to create web
            solutions that align with business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};
