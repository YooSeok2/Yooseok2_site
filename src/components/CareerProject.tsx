import React from 'react';
import { CareerObjType } from '../utils/CareerDatas';

function CareerProject({ id, title, year, cont, skils, link }: CareerObjType) {
  return (
    <div className="career-project">
      <h4>{title}</h4>
      <span>{year}</span>
      <ul>
        {
          cont && cont.map((ele, idx) => (
            <li key={`cont${id}${idx + 1}`}>{ele}</li>
          ))
        }
      </ul>
      <div className="career-etc">
        <div className="career-skil">
          <h4>사용 기술 : </h4>
          <div className="career-skils-list">
            {
              skils && skils.map((ele, idx) => (
                <span key={`skils${id}${idx + 1}`}>{ele}</span>
              ))
            }
          </div>
        </div>
        <div className="career-link">
          {
            link && <h4>사이트 주소 :</h4>
          }
          {' '}
          <a href={link} target="_blank" rel="noreferrer">
            <span>{link}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CareerProject;
