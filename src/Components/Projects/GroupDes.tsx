
import React from 'react';

interface IDes {
  num: string;
  ui: string;
  desc: string;
  link: string;
  key:number;
}

export const GroupDes: React.FC<IDes> = ({num, ui, desc, link,  }) => {
 

  return (
    <div  className="groups">
      <h3 className="number">{num}</h3>
      <div className="des">
        <a href={link}>
        <span className="uiux" >
          {ui}
        </span>
        </a>
        <span className="group-des">{desc}</span>
      </div>
    </div>
  );
};

