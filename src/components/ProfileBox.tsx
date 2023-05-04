import React from 'react';

interface PropsType {
  icon : HTMLImageElement | File | any;
  category : string;
  text: string;
}

function ProfileBox({ icon, category, text } : PropsType) {
  return (
    <div className="prof-box">
      <div className="prof-img">
        <img src={icon} alt={category} />
      </div>
      <div className="prof-box-cont">
        <h4>{category}</h4>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ProfileBox;
