import React from 'react';

interface PropsType {
  backImg : HTMLImageElement | File | any;
  text : string
}

function SkilsBox({ backImg, text }:PropsType) {
  return (
    <div className="skils-box">
      <div className="skils-txt-box">
        <span>{text}</span>
      </div>
      <div className="skils-back-img">
        <img src={backImg} alt={text} />
      </div>
    </div>
  );
}

export default SkilsBox;
